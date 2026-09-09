import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../layout/Container";
import Reveal from "../animation/Reveal";
import { speakers } from "@/data";

const SCROLL_INTERVAL = 1200;
const SCROLL_DURATION = 1200;

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export default function Speakers() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let timer = 0;

    // The list is rendered twice, so one loop is half the scrollable width.
    const loopWidth = () => track.scrollWidth / 2;

    const stepSize = () => {
      const first = track.firstElementChild as HTMLElement | null;
      if (!first) return track.clientWidth;
      const gap = parseFloat(getComputedStyle(track).columnGap || "0") || 0;
      return first.offsetWidth + gap;
    };

    const schedule = () => {
      timer = window.setTimeout(advance, SCROLL_INTERVAL);
    };

    const advance = () => {
      if (loopWidth() <= 0) return schedule();

      const from = track.scrollLeft;
      const distance = stepSize();
      const start = performance.now();

      const tick = (now: number) => {
        const t = Math.min((now - start) / SCROLL_DURATION, 1);
        // Wrapping through the duplicated half is invisible: the content
        // at `loopWidth` is identical to the content at 0.
        track.scrollLeft = (from + distance * easeInOutCubic(t)) % loopWidth();
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

    track.addEventListener("pointerenter", pause);
    track.addEventListener("pointerleave", resume);
    track.addEventListener("touchstart", pause, { passive: true });
    track.addEventListener("touchend", resume, { passive: true });

    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(frame);
      track.removeEventListener("pointerenter", pause);
      track.removeEventListener("pointerleave", resume);
      track.removeEventListener("touchstart", pause);
      track.removeEventListener("touchend", resume);
    };
  }, []);

  return (
    <section id="speakers" className="bg-paper py-16 md:py-[10rem] ">
      <Container className="space-y-10 md:space-y-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <Reveal>
            <span className="font-secondary text-[1.5rem] font-normal uppercase leading-none tracking-[1px] text-ink/50">
              Speakers
            </span>
          </Reveal>
          <Reveal className="md:max-w-4xl">
            <h2 className="font-primary text-2xl font-normal uppercase leading-[1.2] tracking-normal text-ink md:text-[32px]">
              From core contributors to industry innovators, showcasing the best
              of the PHP ecosystem.
            </h2>
          </Reveal>
        </div>

        <Reveal width="100%">
          <div
            ref={trackRef}
            className="no-scrollbar flex gap-6 overflow-x-auto pb-2 md:gap-16"
          >
            {speakers.map((speaker, k) => (
              <SpeakerCard key={k} {...speaker} />
            ))}
            {speakers.map((speaker, k) => (
              <SpeakerCard key={`clone-${k}`} aria-hidden {...speaker} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

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
  "aria-hidden": ariaHidden,
}: {
  slug: string;
  name: string;
  designation: string;
  image?: string;
  "aria-hidden"?: boolean;
}) => {
  return (
    <Link
      href={`/speakers/${slug}`}
      aria-hidden={ariaHidden}
      tabIndex={ariaHidden ? -1 : undefined}
      className="group flex w-[38vw] shrink-0 flex-col gap-4 sm:w-[220px]"
    >
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
    </Link>
  );
};
