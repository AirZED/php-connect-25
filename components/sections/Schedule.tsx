import Image from "next/image";
import Link from "next/link";
import Container from "../layout/Container";
import Reveal from "../animation/Reveal";
import { useEffect, useMemo, useState } from "react";
import { EVENT_DAY, schedule, type ScheduleLinks } from "@/data";

// Parses one WAT time string against the event's date, so "now" can be
// compared against it. Handles both a range ("12:10 – 12:40 PM") and a
// single point in time ("11:00 AM"), and a first time that omits its own
// AM/PM when it matches the second ("11:40 AM – 12:10 PM" stays explicit,
// "12:10 – 12:40 PM" infers PM for 12:10 from 12:40 PM).
const parseWatTime = (time: string): { start: Date; end: Date | null } => {
  const parts = time.split(" – ");
  const parse = (text: string, fallbackAp?: string) => {
    const m = text.trim().match(/(\d{1,2}):(\d{2})\s*(AM|PM)?$/);
    if (!m) return null;
    const [, hStr, mStr, ap] = m;
    const period = ap ?? fallbackAp;
    let hours = parseInt(hStr, 10) % 12;
    if (period === "PM") hours += 12;
    return { hours, minutes: parseInt(mStr, 10) };
  };

  const endMatch = parts[1] ? parts[1].trim().match(/(AM|PM)$/) : null;
  const startParsed = parse(parts[0], endMatch?.[1]);
  const endParsed = parts[1] ? parse(parts[1]) : null;

  const toDate = (p: { hours: number; minutes: number }) =>
    new Date(`${EVENT_DAY}T${String(p.hours).padStart(2, "0")}:${String(p.minutes).padStart(2, "0")}:00+01:00`);

  return {
    start: startParsed ? toDate(startParsed) : new Date(NaN),
    end: endParsed ? toDate(endParsed) : null,
  };
};

// A row with no end time (just "Pre PHPConnect — 11:00 AM") runs until the
// next row starts.
const useLiveSessionId = () => {
  const windows = useMemo(() => {
    const parsed = schedule.map((session) => parseWatTime(session.time));
    return schedule.map((session, i) => ({
      id: session.id,
      start: parsed[i].start,
      end: parsed[i].end ?? parsed[i + 1]?.start ?? null,
    }));
  }, []);

  const [liveId, setLiveId] = useState<string | null>(null);

  useEffect(() => {
    const check = () => {
      const now = Date.now();
      const current = windows.find(
        (w) => now >= w.start.getTime() && (w.end ? now < w.end.getTime() : true)
      );
      setLiveId(current?.id ?? null);
    };
    check();
    const id = setInterval(check, 15000);
    return () => clearInterval(id);
  }, [windows]);

  return liveId;
};

export default function Schedule() {
  const [links, setLinks] = useState<Record<string, ScheduleLinks>>({});
  const liveId = useLiveSessionId();

  useEffect(() => {
    fetch("/api/schedule-links")
      .then((res) => (res.ok ? res.json() : {}))
      .then(setLinks)
      .catch(() => {});
  }, []);

  return (
    <section id="schedule" data-nav-theme="light" className="scroll-mt-[170px] bg-paper py-16 md:py-24">
      <Container className="space-y-2">
        <Link
          href="/agenda"
          className="group flex flex-col gap-6 md:flex-row md:items-start md:justify-between"
        >
          <Reveal>
            <span className="font-secondary text-[1.5rem] font-normal uppercase leading-none tracking-[1px] text-ink/50 transition-colors group-hover:text-ink">
              Event Schedule
            </span>
          </Reveal>
          <Reveal className="md:max-w-4xl">
            <h2 className="font-primary text-2xl font-normal uppercase leading-[1.2] tracking-normal text-ink transition-colors group-hover:text-accent md:text-[32px]">
              From core contributors to industry innovators, showcasing the best
              of the PHP ecosystem.
            </h2>
          </Reveal>
        </Link>

        <Reveal width="100%">
          <div className="relative pt-10 md:pt-12">
            <div className="absolute left-0 top-0 z-10 flex">
              <div className="tiny-clip-triangle relative flex h-10 w-60 items-end gap-2 bg-[#C7BFEF] px-6 md:h-12 pb-2">
                <span className="h-3.5 w-3.5 rounded-full bg-[#20D119]" />
                <span className="h-3.5 w-3.5 rounded-full bg-[#EF8510]" />
                <span className="h-3.5 w-3.5 rounded-full bg-[#DB0F0F]" />
              </div>
            </div>

            <div className="rounded-tr-[32px] rounded-br-[32px] rounded-bl-[32px] rounded-tl-none bg-[#C7BFEF] p-3 md:rounded-tr-[40px] md:rounded-br-[40px] md:rounded-bl-[40px] md:rounded-tl-none md:px-4 md:py-7">
              <div className="rounded-[24px] bg-white/90 px-5 py-2 shadow-[0_20px_60px_-30px_rgba(23,15,54,0.35)] md:rounded-[28px] md:px-8">
                {schedule.map((session, index) => (
                  <ScheduleRow
                    key={session.title}
                    session={session}
                    links={links[session.id]}
                    isLive={session.id === liveId}
                    isLast={index === schedule.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

const ScheduleRow = ({
  session,
  links,
  isLive,
  isLast,
}: {
  session: (typeof schedule)[number];
  links?: ScheduleLinks;
  isLive: boolean;
  isLast: boolean;
}) => {
  return (
    <div
      className={
        "flex flex-col gap-4 py-6 md:grid md:grid-cols-12 md:items-start md:gap-2 md:py-7" +
        (isLast ? "" : " dash-divider")
      }
    >
      <div className="md:col-span-6">
        {isLive && <LiveBadge />}
        <h3 className="font-secondary text-base font-medium leading-snug text-[#0B081B] md:text-[1.3rem]">
          {session.title}
        </h3>
        {!!session.description && (
          <p className="mt-1 text-sm leading-snug text-[#616161]">
            {session.description}
          </p>
        )}
        <SessionLinks links={links} isTalk={!!session.speakers?.length} />
      </div>

      <div className="flex flex-col gap-2 md:col-span-3">
        {session.speakers?.map((speaker, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="relative h-5 w-5 shrink-0 overflow-hidden rounded-full bg-ink/10">
              {speaker.image ? (
                <Image
                  src={`/images/${speaker.image}`}
                  alt={speaker.name}
                  fill
                  className="object-cover"
                  sizes="20px"
                />
              ) : (
                <span className="flex h-full w-full items-center justify-center text-[9px] font-medium text-[#0B081B]">
                  {speaker.name.charAt(0)}
                </span>
              )}
            </div>
            <span className="font-secondary text-xs text-[#525252] md:text-[1rem] font-[400]">
              {speaker.name}
              {!!speaker.affiliation && `, ${speaker.affiliation}`}
            </span>
          </div>
        ))}
      </div>

      <div className="font-secondary uppercase tracking-[0.5px] text-[#0B081B] md:col-span-3 md:text-right">
        <span className="block text-xs md:text-[1.1rem]">{session.time} WAT</span>
        <span className="block text-xs text-[#616161] md:text-[0.9rem]">
          {session.timeEdt} EDT
        </span>
      </div>
    </div>
  );
};

const LiveBadge = () => (
  <span className="mb-1.5 inline-flex items-center gap-1.5 rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600" />
    </span>
    Live
  </span>
);

const linkClass = "inline-flex items-center gap-1.5 text-xs underline md:text-sm";

const SessionLink = ({
  href,
  icon,
  children,
}: {
  href?: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) =>
  href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${linkClass} text-[#2A1A9E] hover:text-accent`}
    >
      {icon}
      {children}
    </a>
  ) : (
    <span aria-disabled className={`${linkClass} cursor-default text-[#2A1A9E]/40`}>
      {icon}
      {children}
    </span>
  );

// Breaks, shoutouts and other non-talk segments (no speaker) only ever get
// a "Watch live" link — nobody adds an ad break to their calendar — and it's
// hidden entirely once that link is gone, rather than sitting there greyed
// out. Recorded talks offer just the recording; upcoming talks offer the
// calendar and live links, greyed out until the organisers add them in
// /admin.
const SessionLinks = ({ links, isTalk }: { links?: ScheduleLinks; isTalk: boolean }) => {
  if (!isTalk && !links?.liveUrl) return null;

  return (
    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
      {!isTalk ? (
        <SessionLink href={links?.liveUrl} icon={<LiveIcon />}>
          Watch live
        </SessionLink>
      ) : links?.recordingUrl ? (
        <SessionLink href={links.recordingUrl} icon={<RecordingIcon />}>
          Watch recording
        </SessionLink>
      ) : (
        <>
          <SessionLink href={links?.calendarUrl} icon={<CalendarIcon />}>
            Add to calendar
          </SessionLink>
          <SessionLink href={links?.liveUrl} icon={<LiveIcon />}>
            Watch live
          </SessionLink>
        </>
      )}
    </div>
  );
};

const CalendarIcon = () => (
  <svg aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 1-1Zm13 8H4v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9Z" />
  </svg>
);

const LiveIcon = () => (
  <svg aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5 3-5 3Z" />
  </svg>
);

const RecordingIcon = () => (
  <svg aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-1.6l4.4 2.5A1 1 0 0 0 22 16.9V7.1a1 1 0 0 0-1.6-.9L16 8.6V8a3 3 0 0 0-3-3H4Zm4 4.5 4 2.5-4 2.5v-5Z" />
  </svg>
);
