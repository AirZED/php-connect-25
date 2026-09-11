import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Container from "../layout/Container";
import { Bars3, CalendarIcon } from "../ui/Icons";
import { cn } from "@/lib/utils";
import { REGISTRATION_URL } from "@/data";

const EVENT_DATE = "2026-10-03T09:00:00";

const NAV_LINKS: { href: string; text: string }[] = [
  { href: "#speakers", text: "Speakers" },
  { href: "#schedule", text: "Schedule" },
  { href: "#sponsors", text: "Sponsors" },
  { href: "#partners", text: "Partners" },
];

export default function Hero() {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isOverDark, setIsOverDark] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 4);

      const probeY = 155; // just below the fixed nav's own box (top-[30px] + h-[7.5rem])
      const el = document.elementFromPoint(window.innerWidth / 2, probeY);
      const themed = el?.closest<HTMLElement>("[data-nav-theme]");
      setIsOverDark(themed ? themed.dataset.navTheme === "dark" : true);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="ticket-pattern-bg pb-10 md:pb-16">
      <Container className="!px-3 md:!px-8">
        <div
          ref={cardRef}
          data-nav-theme="dark"
          className="relative overflow-hidden rounded-t-[32px] md:rounded-t-[56px]"
        >
          <div className="fixed left-0 right-0 top-[30px] z-30 mx-auto flex h-[7.5rem] w-full max-w-[1440px] justify-between gap-4 px-3 md:px-8 xl:px-16">
            <LogoMark className="self-center" invert={!isOverDark} />

            <div className="flex gap-[2rem] item-buttom self-start">
              <nav
                className={cn(
                  "hidden items-center gap-x-10 rounded-full transition-colors lg:flex",
                  !isAtTop &&
                    cn(
                      "border px-6 py-2.5 backdrop-blur-md",
                      isOverDark
                        ? "border-white/10 bg-black/30"
                        : "border-ink/10 bg-white/60"
                    )
                )}
              >
                {NAV_LINKS.map(({ href, text }) => (
                  <Link
                    key={text}
                    href={href}
                    className={cn(
                      "text-base font-bold tracking-wide transition-colors",
                      isAtTop
                        ? "text-ink hover:text-ink"
                        : isOverDark
                        ? "text-white hover:text-white"
                        : "text-ink hover:text-ink",
                    )}
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
                  className={cn(
                    "lg:hidden transition-colors",
                    isOverDark ? "text-white" : "text-ink",
                  )}
                >
                  <Bars3 />
                </button>
              </div>
            </div>
          </div>

          {isNavOpen && <MobileNav onClose={() => setNavOpen(false)} />}

          <div className="relative w-full h-screen mt-[30px]">
            <Image
              src="/images/backgrounds/hero-3.png"
              alt="PHP Connect attendees networking, The Builder's Edition"
              fill
              priority
              className=" absolute right-0 left-0 z-1"
            />

            <div className="z-2 relative inset-0 z-10 flex h-full flex-col gap-8 overflow-hidden px-6 pb-10 pt-24 md:px-[2rem] md:pb-[7rem] md:pt-[10rem]">
              <div className="w-fit self-end">
                <CountdownWidget />
              </div>
              <div className="mt-auto w-full item-buttom self-start">
                <h1 className="font-display text-[11vw] font-bold uppercase leading-[0.85] text-white sm:text-[56px] md:text-[76px] lg:text-[92px] xl:text-[140px]">
                  PHPConnect &apos;26
                </h1>
                <div className="flex flex-col gap-4 mt-[.3rem] sm:flex-row sm:items-center sm:justify-between">
                  <p className="mt-4 max-w-md text-base text-white sm:text-[1.3rem]">
                    Join 1,500+ developers, engineers, and tech leaders from
                    around the globe for a day of learning, networking, and
                    innovation, online.
                  </p>
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
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const LogoMark = ({
  className = "",
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) => (
  <Link href="/" className={`block ${className}`}>
    <Image
      src="/images/logo-white.svg"
      alt="PHP Connect"
      width={78}
      height={55}
      className={cn(
        "h-10 w-auto transition-[filter] md:h-[55px]",
        invert && "[filter:brightness(0)]",
      )}
      priority
    />
  </Link>
);

export const RegisterButton = ({ className = "" }: { className?: string }) => (
  <a
    href={REGISTRATION_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] hover:bg-accent-dark ${className}`}
  >
    <Image src="/images/icons/register.png" alt="" width={16} height={16} />
    Register Now
  </a>
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
        <div key={label} className="flex flex-col items-center">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black/40 font-display text-sm font-semibold text-white md:h-14 md:w-14 md:text-[2rem]">
            {pad(value)}
          </div>
          <span className="text-[1rem] tracking-wide text-white">{label}</span>
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
