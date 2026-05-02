# Airtable — Projects Source

The portfolio's `Projects` section is a Next.js Server Component that pulls records from Airtable at request time and falls back to `src/data/projects.ts` if the API is unreachable, returns no records, or env vars are missing.

## 1. Environment variables

Server-side only. Never expose them with `NEXT_PUBLIC_`.

```env
AIRTABLE_API_KEY=pat_xxx_your_personal_access_token
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
AIRTABLE_TABLE_NAME=Projects
```

The integration also accepts the legacy names already present in `.env.local`:

| Preferred              | Legacy alias       |
| ---------------------- | ------------------ |
| `AIRTABLE_API_KEY`     | `AIRTABLE_TOKEN`   |
| `AIRTABLE_TABLE_NAME`  | `AIRTABLE_TABLE`   |

`AIRTABLE_BASE_ID` keeps the same name in both schemes.

To create a Personal Access Token: <https://airtable.com/create/tokens> — give it `data.records:read` scope on the base.

## 2. Table schema

Create one table (default name: `Projects`) with the following columns. Column names must match exactly — they're the field keys used by the integration.

| Airtable column | Airtable type                                  | Field in code | Required | Example                                                              |
| --------------- | ---------------------------------------------- | ------------- | -------- | -------------------------------------------------------------------- |
| `name`          | Single line text                               | `name`        | yes      | `gymPassSystem` *(slug; matches i18n keys for already-translated projects)* |
| `title`         | Single line text                               | `title`       | no       | `GymPass System`                                                     |
| `description`   | Long text                                      | `description` | yes      | `Backend service in Node.js using Prisma and Docker.`                |
| `technologies`  | Multiple select **or** comma-separated text    | `technologies`| no       | `react, typeScript, nextJs`                                          |
| `gitHubUrl`     | URL                                            | `gitHubUrl`   | no       | `https://github.com/LourencoHenri/node-03`                            |
| `siteUrl`       | URL                                            | `siteUrl`     | no       | `https://example.com`                                                |
| `image`         | URL **or** Attachment                          | `image`       | no       | `https://images.unsplash.com/photo-...`                              |
| `featured`      | Checkbox                                       | `featured`    | no       | `true`                                                               |
| `order`         | Number                                         | `order`       | no       | `1` *(lower = appears first)*                                        |

### Notes

- **`name`** — used as the i18n slug. For the 14 projects already migrated as fallback (`gymPassSystem`, `weatherApp`, etc.), keep the same slug so existing translations under `portfolio.<slug>.title/description` are reused.
- **`title`** — optional override. When set, it takes precedence over the i18n title for that project, useful for new projects that aren't translated.
- **`description`** — used directly when no i18n key exists for that slug.
- **`technologies`** — accepted values (case-insensitive): `react`, `react native`, `next.js`, `vue.js`, `node.js`, `typeScript`, `javaScript`, `tailwind`, `styled components`, `material ui`, `figma`, `git`, `github`, `docker`, `prisma`, `fastify`, `html`, `css`, `storybook`, `jira`. Aliases like `ts`, `next`, `tailwind css`, `mui`, `nodejs` also resolve. Any unknown value is silently dropped.
- **`image`** — Either an Attachment (preferred) or a public URL. For attachments, the integration uses the `large` thumbnail.
- **`featured`** — When checked, the card shows a "Featured" badge and the project ranks above non-featured ones, plus enables the "Featured" filter pill.
- **`order`** — Within each `featured` group, projects sort by ascending `order`. Empty values sort last.

## 3. How the integration is wired

```
src/types/project.ts        → Project / TechnologyKey types (preserves the original interface)
src/data/projects.ts        → Local fallback (the 14 original projects, migrated)
src/lib/airtable.ts         → Generic server-only Airtable fetcher
src/lib/projects.ts         → getProjects() — fetches, maps Airtable → Project, sorts, falls back
src/components/Projects/index.tsx           → Server component, calls getProjects()
src/components/Projects/ProjectsSection.tsx → Client wrapper (i18n strings, layout)
src/components/Projects/ProjectsList.tsx    → Pagination + featured filter
src/components/ProjectCard/index.tsx        → Premium project card
src/lib/technologies.tsx                    → TechnologyKey → name + icon map
```

ISR is enabled with `revalidate: 300` (5 min) inside `airtableFetch`. Edit that value to tune cache freshness.

## 4. Adding a new project

1. Create a record in your `Projects` table with at least `name`, `description`, and the technology list.
2. (Optional) tick `featured`, set `order`, attach an `image`.
3. Save. Next page load (after the 5-minute ISR window, or after a redeploy) will pull the new record.

To force an immediate refresh during development: stop and restart `yarn dev`.

## 5. Local-only usage (no Airtable yet)

If `AIRTABLE_API_KEY` or `AIRTABLE_BASE_ID` is missing, the loader logs a warning and renders the local fallback in `src/data/projects.ts`. The site keeps working with no extra setup.
