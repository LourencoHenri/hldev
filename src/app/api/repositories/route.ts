import { TECHNOLOGIES_MAP } from "@/src/lib/technologies";
import { NextResponse } from "next/server";

export async function GET() {
    const token = process.env.AIRTABLE_TOKEN!;
    const baseId = process.env.AIRTABLE_BASE_ID!;
    const table = process.env.AIRTABLE_TABLE!;

    const res = await fetch(
        `https://api.airtable.com/v0/${baseId}/${table}`,
        {
            headers: { Authorization: `Bearer ${token}` },
        }
    );

    const data = await res.json();

    const items = data.records.map((r: any) => {
        const techKeys: string[] = r.fields?.Technologies ?? [];

        return {
            id: r.id,
            name: r.fields?.Name ?? "",
            description: r.fields?.Description ?? "",
            gitHubUrl: r.fields?.["GitHub URL"] ?? "",
            siteUrl: r.fields?.["Site URL"] ?? "",
            image: r.fields?.Attachment?.[0]?.url ?? "",
            technologies: techKeys
                .map((key) => TECHNOLOGIES_MAP[key as keyof typeof TECHNOLOGIES_MAP])
                .filter(Boolean), // remove tech inválida
        };
    });

    return NextResponse.json({ items });
}