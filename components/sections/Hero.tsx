import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Container from "../layout/Container";
import { Bars3, CalendarIcon } from "../ui/Icons";
import { cn } from "@/lib/utils";

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
  const [isOverDark, setIsOverDark] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;
      const cardBottom = cardRef.current.getBoundingClientRect().bottom;
      setIsOverDark(cardBottom > 120);
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
          className="relative overflow-hidden rounded-t-[32px] md:rounded-t-[56px]"
        >
          <div className="fixed left-0 right-0 top-[30px] z-30 mx-auto flex h-[7.5rem] w-full max-w-[1440px] justify-between gap-4 px-3 md:px-8 xl:px-16">
            <LogoMark className="self-center" invert={!isOverDark} />

            <div className="flex gap-[2rem] item-buttom self-start">
              <nav className="hidden lg:flex items-center gap-x-10">
                {NAV_LINKS.map(({ href, text }) => (
                  <Link
                    key={text}
                    href={href}
                    className={cn(
                      "text-sm font-medium tracking-wide transition-colors",
                      isOverDark
                        ? "text-white/80 hover:text-white"
                        : "text-ink/70 hover:text-ink"
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
                    isOverDark ? "text-white" : "text-ink"
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

            <div className="z-2 relative inset-0 z-10 flex h-full flex-col gap-8 overflow-hidden flex pt-[10rem] px-[2rem] pb-[7rem]">
              <div className="w-fit self-end">
                <CountdownWidget />
              </div>
              <div className="mt-auto w-full item-buttom self-start">
                <h1 className="font-display text-[11vw] font-bold uppercase leading-[0.85] text-white sm:text-[56px] md:text-[76px] lg:text-[92px] xl:text-[140px]">
                  PHPConnect &apos;26
                </h1>
                <div className="flex items-center justify-between mt-[.3rem]">
               
                  <p className="mt-4 max-w-md text-[1.3rem] text-white">
                    Join 1,500+ developers, engineers, and tech leaders from
                    around the globe for three days of learning, networking, and
                    innovation.
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
        invert && "[filter:brightness(0)]"
      )}
      priority
    />
  </Link>
);

export const RegisterButton = ({ className = "" }: { className?: string }) => (
  <Link
    href="/#register"
    className={`inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] hover:bg-accent-dark ${className}`}
  >
    <Image src="/images/icons/register.png" alt="" width={16} height={16} />
    Register Now
  </Link>
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
          <div className="flex h-11 w-11 items-center justify-center rounded-full font-display text-sm font-semibold text-white md:h-14 md:w-14 md:text-[2rem]">
            {pad(value)}
          </div>
          <span className="text-[1rem] tracking-wide text-white">
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
