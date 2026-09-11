import Image from "next/image";
import Link from "next/link";
import Container from "../layout/Container";
import Reveal from "../animation/Reveal";
import { schedule } from "@/data";

export default function Schedule() {
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
        "flex flex-col gap-4 py-6 md:grid md:grid-cols-12 md:items-start md:gap-2 md:py-7" +
        (isLast ? "" : " dash-divider")
      }
    >
      <div className="md:col-span-7">
        <h3 className="font-secondary text-base font-medium leading-snug text-[#0B081B] md:text-[1.3rem]">
          {session.title}
        </h3>
        {!!session.description && (
          <p className="mt-1 text-sm leading-snug text-[#616161]">
            {session.description}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2 md:col-span-4">
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

      <span className="font-secondary text-xs uppercase tracking-[0.5px] text-[#0B081B] md:col-span-1 md:text-right md:text-[1.2rem]">
        {session.time}
      </span>
    </div>
  );
};
