// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const { Client } = require("@notionhq/client");

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_KEY,
});
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const database_id = process.env.NOTION_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: database_id,
  });
  res.status(200).json(response);
}
