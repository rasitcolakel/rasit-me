// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { extractEducation, extractPost } from "@/utils/propertyExtractor";

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_KEY,
});
type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const database_id = process.env.NOTION_EDUCATIONDB_ID as string;
  const response = (await notion.databases.query({
    database_id: database_id,
  })) as QueryDatabaseResponse;
  res.setHeader("Cache-Control", `public, max-age=${process.env.CACHE_TIME}`);
  res.status(200).send(
    response.results.map((r: any) => {
      return { ...extractEducation(r.properties), id: r.id };
    })
  );
}
