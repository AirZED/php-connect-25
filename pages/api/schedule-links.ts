import type { NextApiRequest, NextApiResponse } from "next";
import { readLinks } from "@/lib/scheduleLinks";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).end();
  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
  res.status(200).json(await readLinks());
}
