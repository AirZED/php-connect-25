import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../layout/Container";
import Reveal from "../animation/Reveal";
import { speakers } from "@/data";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon } from "../ui/Icons";

const SCROLL_INTERVAL = 1200;
const SCROLL_DURATION = 1200;

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export default function Speakers() {
  return (
    <section id="speakers" data-nav-theme="light" className="scroll-mt-[170px] bg-paper py-16 md:py-[10rem] ">
      <Container className="space-y-10 md:space-y-16">
        <Link
          href="/team"
          className="group flex flex-col gap-6 md:flex-row md:items-start md:justify-between"
        >
          <Reveal>
            <span className="font-secondary text-[1.5rem] font-normal uppercase leading-none tracking-[1px] text-ink/50 transition-colors group-hover:text-ink">
              Speakers
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
          <SpeakerCarousel people={speakers} />
        </Reveal>
      </Container>
    </section>
  );
}

export const SpeakerCarousel = ({
  people,
}: {
  people: {
    slug?: string;
    name: string;
    designation: string;
    image?: string;
  }[];
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  // Shared with the manual prev/next buttons below.
  const stepSize = () => {
    const track = trackRef.current;
    const first = track?.firstElementChild as HTMLElement | null;
    if (!track || !first) return 0;
    const gap = parseFloat(getComputedStyle(track).columnGap || "0") || 0;
    return first.offsetWidth + gap;
  };

  const scrollByStep = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    let target = track.scrollLeft + direction * stepSize();
    if (target < 0) target = maxScroll; // prev from the start wraps to the end
    if (target > maxScroll) target = 0; // next from the end wraps to the start
    track.scrollTo({ left: target, behavior: "smooth" });
  };

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let timer = 0;

    const maxScroll = () => track.scrollWidth - track.clientWidth;

    const schedule = () => {
      timer = window.setTimeout(advance, SCROLL_INTERVAL);
    };

    const advance = () => {
      const distance = stepSize();
      if (distance <= 0 || maxScroll() <= 0) return schedule();

      const from = track.scrollLeft;
      // Once the last card is in view, glide back to the start instead of
      // rendering a duplicated list to fake an infinite loop — with only a
      // handful of speakers, the duplicate would be visible on screen at
      // the same time as the originals.
      const atEnd = from >= maxScroll() - 1;
      const target = atEnd ? 0 : Math.min(from + distance, maxScroll());
      const start = performance.now();

      const tick = (now: number) => {
        const t = Math.min((now - start) / SCROLL_DURATION, 1);
        track.scrollLeft = from + (target - from) * easeInOutCubic(t);
        if (t < 1) {
          frame = requestAnimationFrame(tick);
        } else if (!pausedRef.current) {
          // Pausing mid-glide lets the current card settle, then holds.
          schedule();
        }
      };

      frame = requestAnimationFrame(tick);
    };

    const pause = () => {
      pausedRef.current = true;
      window.clearTimeout(timer);
    };

    const resume = () => {
      if (!pausedRef.current) return;
      pausedRef.current = false;
      window.clearTimeout(timer);
      schedule();
    };

    schedule();

    container.addEventListener("pointerenter", pause);
    container.addEventListener("pointerleave", resume);
    container.addEventListener("touchstart", pause, { passive: true });
    container.addEventListener("touchend", resume, { passive: true });

    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(frame);
      container.removeEventListener("pointerenter", pause);
      container.removeEventListener("pointerleave", resume);
      container.removeEventListener("touchstart", pause);
      container.removeEventListener("touchend", resume);
    };
  }, []);

  return (
    <div ref={containerRef} className="group/carousel relative">
      <div
        ref={trackRef}
        className="no-scrollbar flex gap-6 overflow-x-auto pb-2 md:gap-16"
      >
        {people.map((person, k) => (
          <SpeakerCard key={k} {...person} />
        ))}
      </div>

      <CarouselArrow direction="left" onClick={() => scrollByStep(-1)} />
      <CarouselArrow direction="right" onClick={() => scrollByStep(1)} />
    </div>
  );
};

const CarouselArrow = ({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={direction === "left" ? "Previous speaker" : "Next speaker"}
    className={cn(
      "absolute top-[43%] hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 shadow-[0_8px_24px_-8px_rgba(23,15,54,0.4)] transition-opacity duration-200 group-hover/carousel:opacity-100 hover:bg-white sm:flex",
      direction === "left" ? "left-2" : "right-2"
    )}
  >
    <ArrowLeftIcon className={direction === "right" ? "rotate-180" : undefined} />
  </button>
);

export const initialsOf = (name: string) =>
  name
    .replace(/['"\u2019]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

const SpeakerCard = ({
  slug,
  name,
  designation,
  image,
}: {
  slug?: string;
  name: string;
  designation: string;
  image?: string;
}) => (
  <PersonCard
    className="w-[38vw] shrink-0 sm:w-[220px]"
    slug={slug}
    name={name}
    designation={designation}
    image={image}
  />
);

export const PersonCard = ({
  slug,
  name,
  designation,
  image,
  className = "",
}: {
  slug?: string;
  name: string;
  designation: string;
  image?: string;
  className?: string;
}) => {
  const content = (
    <>
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-ink/5">
        {image ? (
          <Image
            src={`/images/${image}`}
            fill
            alt={name}
            className="duotone-photo object-cover"
            sizes="(min-width: 768px) 25vw, 50vw"
            quality={70}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-ink/10">
            <span className="font-display text-4xl font-bold text-ink/40">
              {initialsOf(name)}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-heading text-lg font-medium text-ink transition-colors group-hover:text-accent md:text-xl">
          {name}
        </span>
        <span className="text-sm text-ink/50">{designation}</span>
      </div>
    </>
  );

  if (!slug) {
    return <div className={cn("flex flex-col gap-4", className)}>{content}</div>;
  }

  return (
    <Link
      href={`/speakers/${slug}`}
      className={cn("group flex flex-col gap-4", className)}
    >
      {content}
    </Link>
  );
};
