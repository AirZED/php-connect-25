import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Container from "../layout/Container";
import { Bars3, Bolt, CalendarIcon } from "../ui/Icons";

// TODO: confirm the real PHP Connect '26 date and swap it in here.
const EVENT_DATE = "2026-11-20T09:00:00";

const NAV_LINKS: { href: string; text: string }[] = [
  { href: "/team#speakers", text: "Speakers" },
  { href: "/agenda", text: "Schedule" },
  { href: "/#sponsors", text: "Sponsors" },
  { href: "/#partners", text: "Partners" },
];

export default function Hero() {
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <section className="ticket-pattern-bg pt-4 md:pt-10 pb-10 md:pb-16">
      <Container className="!px-3 md:!px-8">
        <div className="hero-card relative overflow-hidden rounded-t-[32px] md:rounded-t-[56px]">
          <div className="relative z-30 flex items-center justify-between gap-4 px-5 pt-5 md:px-10 md:pt-8">
            <LogoMark />

            <nav className="hidden lg:flex items-center gap-x-10">
              {NAV_LINKS.map(({ href, text }) => (
                <Link
                  key={text}
                  href={href}
                  className="text-sm font-medium tracking-wide text-white/80 transition-colors hover:text-white"
                >
                  {text}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <RegisterButton className="hidden md:inline-flex" />
              <button
                onClick={() => setNavOpen(true)}
                aria-label="Open menu"
                className="text-white lg:hidden"
              >
                <Bars3 />
              </button>
            </div>
          </div>

          {isNavOpen && (
            <MobileNav onClose={() => setNavOpen(false)} />
          )}

          <div className="absolute right-5 top-24 z-20 hidden sm:block md:right-10 md:top-28">
            <CountdownWidget />
          </div>

          <EditionLabel side="left" />
          <EditionLabel side="right" />

          <div className="relative z-10 mx-4 mt-6 aspect-[4/5] overflow-hidden rounded-[20px] sm:aspect-[16/10] md:mx-16 md:mt-10 md:aspect-[21/9] md:rounded-[28px]">
            <Image
              src="/images/backgrounds/hero-3.png"
              alt="PHP Connect attendees networking"
              fill
              priority
              className="duotone-photo object-cover"
            />
            <div className="grain-overlay absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 flex flex-col gap-8 overflow-hidden px-5 pb-14 pt-8 md:px-16 md:pb-20 md:pt-10 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <h1 className="font-display text-[11vw] font-bold uppercase leading-[0.85] text-white sm:text-[56px] md:text-[76px] lg:text-[92px] xl:text-[104px]">
                PHPConnect &apos;26
              </h1>
              <p className="mt-4 max-w-md text-sm text-white/60 md:text-base">
                Join 1,500+ developers, engineers, and tech leaders from
                around the globe for three days of learning, networking, and
                innovation.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <RegisterButton />
              <Link
                href="/agenda"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.02]"
              >
                <CalendarIcon />
                View Schedule
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const LogoMark = () => (
  <Link
    href="/"
    className="flex flex-col items-start gap-0.5 rounded-xl border-2 border-white px-2.5 py-1.5 leading-none text-white"
  >
    <span className="font-display text-[11px] font-bold tracking-[0.1em]">
      PHP
    </span>
    <span className="flex items-center gap-1 font-display text-[11px] font-bold tracking-[0.1em]">
      <span className="inline-block h-1 w-1 rounded-full bg-white" />
      Connect
    </span>
  </Link>
);

const RegisterButton = ({ className = "" }: { className?: string }) => (
  <Link
    href="/#register"
    className={`inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] hover:bg-accent-dark ${className}`}
  >
    <Bolt />
    Register Now
  </Link>
);

const EditionLabel = ({ side }: { side: "left" | "right" }) => (
  <span
    className={`builder-edition-label pointer-events-none absolute top-1/2 z-10 hidden -translate-y-1/2 text-[10px] font-semibold uppercase text-white/40 md:block ${
      side === "left" ? "left-3" : "right-3 rotate-180"
    }`}
  >
    The Builder Edition
  </span>
);

const pad = (n: number) => n.toString().padStart(2, "0");

const useCountdown = (target: string) => {
  const [time, setTime] = useState({ days: 0, hrs: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const targetTime = new Date(target).getTime();
    const tick = () => {
      const diff = Math.max(targetTime - Date.now(), 0);
      setTime({
        days: Math.floor(diff / 86400000),
        hrs: Math.floor((diff / 3600000) % 24),
        mins: Math.floor((diff / 60000) % 60),
        secs: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return time;
};

const CountdownWidget = () => {
  const { days, hrs, mins, secs } = useCountdown(EVENT_DATE);
  const units = [
    { label: "Days", value: days },
    { label: "Hrs", value: hrs },
    { label: "Mins", value: mins },
    { label: "Sec", value: secs },
  ];

  return (
    <div className="flex items-end gap-2 rounded-[28px] border border-white/10 bg-white/[0.06] p-2 backdrop-blur-sm">
      {units.map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center gap-1">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#131218] font-display text-sm font-semibold text-white md:h-14 md:w-14 md:text-base">
            {pad(value)}
          </div>
          <span className="text-[9px] uppercase tracking-wide text-white/50">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

const MobileNav = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 z-40 flex flex-col bg-ink/98 p-8 backdrop-blur-lg lg:hidden">
    <div className="flex items-center justify-between">
      <LogoMark />
      <button
        onClick={onClose}
        aria-label="Close menu"
        className="flex items-center gap-2 text-white"
      >
        <span className="text-sm">Close</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <div className="flex flex-1 flex-col items-center justify-center gap-8">
      {NAV_LINKS.map(({ href, text }) => (
        <Link
          key={text}
          href={href}
          onClick={onClose}
          className="font-display text-2xl font-semibold uppercase text-white"
        >
          {text}
        </Link>
      ))}
      <RegisterButton className="mt-4" />
    </div>
  </div>
);
