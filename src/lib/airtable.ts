import "server-only";

const AIRTABLE_API_KEY =
	process.env.AIRTABLE_API_KEY ?? process.env.AIRTABLE_TOKEN;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;

interface AirtableRecord<T> {
	id: string;
	fields: T;
	createdTime: string;
}

interface AirtableResponse<T> {
	records: AirtableRecord<T>[];
	offset?: string;
}

export interface AirtableFetchOptions {
	revalidate?: number | false;
	params?: Record<string, string>;
}

export async function airtableFetch<T>(
	tableName: string,
	options: AirtableFetchOptions = {}
): Promise<AirtableRecord<T>[]> {
	if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
		throw new Error(
			"Airtable env vars missing. Set AIRTABLE_API_KEY and AIRTABLE_BASE_ID."
		);
	}

	const search = new URLSearchParams(options.params);
	const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(
		tableName
	)}${search.toString() ? `?${search.toString()}` : ""}`;

	const res = await fetch(url, {
		headers: { Authorization: `Bearer ${AIRTABLE_API_KEY}` },
		next: {
			revalidate: options.revalidate === undefined ? 300 : options.revalidate,
		},
	});

	if (!res.ok) {
		const body = await res.text().catch(() => "");
		throw new Error(`Airtable error ${res.status}: ${body || res.statusText}`);
	}

	const data = (await res.json()) as AirtableResponse<T>;
	return data.records;
}
