import Image from "next/image";
import Container from "../layout/Container";
import Reveal from "../animation/Reveal";
import { schedule } from "@/data";

export default function Schedule() {
  return (
    <section className="bg-paper py-16 md:py-24">
      <Container className="space-y-2 md:space-y-3">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[200px_1fr] md:gap-10">
          <Reveal>
            <span className="font-secondary text-xs font-normal uppercase leading-none tracking-[1px] text-ink/50">
              Event Schedule
            </span>
          </Reveal>
          <Reveal>
            <h2 className="font-primary text-2xl font-normal uppercase leading-[1.2] tracking-normal text-ink md:text-4xl lg:text-[42px]">
              From core contributors to industry innovators, showcasing the
              best of the PHP ecosystem.
            </h2>
          </Reveal>
        </div>

        <Reveal width="100%">
          <div className="relative pt-10 md:pt-12">
            <div className="schedule-tab absolute left-1 top-0 z-10 flex items-center gap-2 rounded-[18px] bg-[#C7BFEF] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
            </div>

            <div className="rounded-[32px] bg-[#C7BFEF] p-3 md:rounded-[40px] md:p-4">
              <div className="rounded-[24px] bg-white/90 px-5 py-2 shadow-[0_20px_60px_-30px_rgba(23,15,54,0.35)] md:rounded-[28px] md:px-8">
                {schedule.map((session, index) => (
                  <ScheduleRow
                    key={session.title}
                    session={session}
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
  isLast,
}: {
  session: (typeof schedule)[number];
  isLast: boolean;
}) => {
  return (
    <div
      className={
        "flex flex-col gap-4 py-6 md:flex-row md:items-start md:justify-between md:gap-10 md:py-7" +
        (isLast ? "" : " border-b border-dashed border-ink/20")
      }
    >
      <div className="md:w-[300px] md:shrink-0">
        <h3 className="font-secondary text-base font-medium leading-snug text-ink md:text-lg">
          {session.title}
        </h3>
        {!!session.description && (
          <p className="mt-1 max-w-sm text-sm leading-snug text-ink/50">
            {session.description}
          </p>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 md:max-w-xs">
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
                <span className="flex h-full w-full items-center justify-center text-[9px] font-medium text-ink/50">
                  {speaker.name.charAt(0)}
                </span>
              )}
            </div>
            <span className="text-xs text-ink/60 md:text-sm">
              {speaker.name}
              {!!speaker.affiliation && `, ${speaker.affiliation}`}
            </span>
          </div>
        ))}
      </div>

      <span className="font-secondary text-xs uppercase tracking-[0.5px] text-ink/40 md:shrink-0 md:text-right md:text-sm">
        {session.time}
      </span>
    </div>
  );
};
