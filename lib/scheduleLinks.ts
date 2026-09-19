import { schedule, SCHEDULE_LINKS_CSV_URL, type ScheduleLinks } from "@/data";

export type ScheduleLinksMap = Record<string, ScheduleLinks>;

// Minimal RFC 4180 parser: quoted fields, escaped quotes, CRLF.
const parseCsv = (text: string): string[][] => {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else field += c;
  }
  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows;
};

const cleanUrl = (value: string | undefined): string | undefined => {
  const trimmed = (value || "").trim();
  if (!trimmed || trimmed.length > 500) return undefined;
  try {
    const url = new URL(trimmed);
    // Only web links: anything else (javascript:, data:) would be an XSS vector.
    return url.protocol === "https:" || url.protocol === "http:" ? url.toString() : undefined;
  } catch {
    return undefined;
  }
};

export const readLinks = async (): Promise<ScheduleLinksMap> => {
  const csvUrl = process.env.SCHEDULE_LINKS_CSV_URL || SCHEDULE_LINKS_CSV_URL;
  if (!csvUrl) return {};

  try {
    const res = await fetch(csvUrl, { cache: "no-store" });
    if (!res.ok) return {};
    const [header, ...rows] = parseCsv(await res.text());
    if (!header) return {};

    const col = (name: string) => header.findIndex((h) => h.trim().toLowerCase() === name);
    const idCol = col("id");
    const calendarCol = col("calendar");
    const liveCol = col("live");
    const recordingCol = col("recording");
    if (idCol < 0) return {};

    const known = new Set(schedule.map((session) => session.id));
    const out: ScheduleLinksMap = {};
    for (const row of rows) {
      const id = (row[idCol] || "").trim();
      if (!known.has(id)) continue;
      const links: ScheduleLinks = {
        calendarUrl: cleanUrl(row[calendarCol]),
        liveUrl: cleanUrl(row[liveCol]),
        recordingUrl: cleanUrl(row[recordingCol]),
      };
      if (links.calendarUrl || links.liveUrl || links.recordingUrl) out[id] = links;
    }
    return out;
  } catch {
    // A sheet outage should never break the schedule; buttons just stay greyed out.
    return {};
  }
};
