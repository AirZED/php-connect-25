"use client";
import Image from "next/image";
import Container from "../layout/Container";
import Reveal from "../animation/Reveal";
import { RegisterButton } from "./Hero";
import { galleryGroups } from "@/data";
import { useState, useRef, useEffect } from "react";

export default function Gallery() {
  const [expandedGalleries, setExpandedGalleries] = useState<string[]>([]);
  const scrollContainerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Autoscroll backs off for a few seconds after the visitor interacts, but a
  // resting mouse pointer does not stop it.
  const pausedUntil = useRef(0);
  const pauseAutoScroll = (ms = 4000) => {
    pausedUntil.current = Date.now() + ms;
  };
  const openEdition = expandedGalleries[0];

  // Only one year stays open: opening another closes the previous one.
  const toggleGallery = (edition: string) => {
    setExpandedGalleries((prev) => (prev.includes(edition) ? [] : [edition]));
  };

  // Slowly advance the open gallery, looping back to the start at the end.
  useEffect(() => {
    if (!openEdition) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior = reduceMotion ? "auto" : "smooth";

    const timer = setInterval(() => {
      const container = scrollContainerRefs.current[openEdition];
      if (!container || Date.now() < pausedUntil.current || isDragging.current) return;

      const atEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 4;
      if (atEnd) {
        container.scrollTo({ left: 0, behavior });
        return;
      }
      const first = container.firstElementChild as HTMLElement | null;
      const step = first ? first.offsetWidth + 20 : container.clientWidth * 0.5;
      container.scrollBy({ left: step, behavior });
    }, 3000);

    return () => clearInterval(timer);
  }, [openEdition]);

  // Mouse Drag
  const handleMouseDown = (e: React.MouseEvent, edition: string) => {
    const container = scrollContainerRefs.current[edition];
    if (!container) return;
    isDragging.current = true;
    pauseAutoScroll();
    startX.current = e.pageX - container.offsetLeft;
    scrollLeft.current = container.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    if (isDragging.current) pauseAutoScroll();
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent, edition: string) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const container = scrollContainerRefs.current[edition];
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX.current) * 1.5; 
    container.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section data-nav-theme="light" className="bg-paper py-16 md:py-24 overflow-hidden">
      <Container>
        <Reveal width="100%">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <h2 className="font-heading text-2xl uppercase tracking-normal text-ink md:text-4xl">
              Gallery
            </h2>
            <RegisterButton />
          </div>
        </Reveal>

        <div className="mt-10 md:mt-14">
          {galleryGroups.map((group, index) => {
            const isExpanded = expandedGalleries.includes(group.edition);

            return (
              <div key={group.edition} className="w-full">
                {index > 0 && <Divider />}

                <Reveal width="100%">
                  <div className="py-8">
                    <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-8">
                      <span className="font-secondary text-lg font-normal uppercase leading-[1.8] tracking-normal text-ink/50 md:w-[170px] md:shrink-0">
                        {group.edition}
                      </span>

                      <p className="font-secondary text-lg font-normal leading-none tracking-normal text-ink md:w-[360px] md:shrink-0 md:text-xl">
                        {group.caption}
                      </p>

                      <button
                        type="button"
                        onClick={() => toggleGallery(group.edition)}
                        className="font-mono text-sm text-ink/60 transition-colors hover:text-ink md:w-[100px] md:shrink-0 text-left"
                      >
                        {isExpanded ? "viewLess()" : "viewAll()"}
                      </button>

                      <div
                        className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          !isExpanded
                            ? "flex flex-1 gap-3 overflow-hidden opacity-100"
                            : "max-w-0 opacity-0 overflow-hidden pointer-events-none"
                        }`}
                      >
                        {group.images.slice(0, 2).map((image, i) => (
                          <div
                            key={i}
                            className="relative h-[150px] w-[210px] shrink-0 overflow-hidden bg-ink/10"
                          >
                            <Image
                              src={`/images/${image}`}
                              alt=""
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>

                      {isExpanded && (
                        <button
                          type="button"
                          onClick={() => toggleGallery(group.edition)}
                          aria-label="Close gallery"
                          className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/30 text-xl text-ink transition-colors hover:bg-ink hover:text-paper"
                        >
                          ×
                        </button>
                      )}
                    </div>

                    {/*Swipeable Gallery */}
                    <div
                      className={`grid w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isExpanded
                          ? "grid-rows-[1fr] mt-8 opacity-100"
                          : "grid-rows-[0fr] opacity-0 pointer-events-none"
                      }`}
                    >
                      <div className="overflow-hidden w-full">
                        <div
                          ref={(el) => {
                            scrollContainerRefs.current[group.edition] = el;
                          }}
                          onMouseDown={(e) => handleMouseDown(e, group.edition)}
                          onMouseLeave={handleMouseLeaveOrUp}
                          onTouchStart={() => pauseAutoScroll()}
                          onTouchEnd={() => pauseAutoScroll()}
                          onWheel={() => pauseAutoScroll()}
                          onMouseUp={handleMouseLeaveOrUp}
                          onMouseMove={(e) => handleMouseMove(e, group.edition)}
                          className={`flex w-full gap-5 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing select-none transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${
                            isExpanded ? "translate-x-0" : "translate-x-12"
                          }`}
                        >
                          {group.images.map((image, i) => (
                            <div
                              key={i}
                              style={{
                                transitionDelay: isExpanded ? `${i * 70}ms` : "0ms",
                              }}
                              className={`relative h-[350px] w-[70vw] shrink-0 overflow-hidden bg-ink/10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:h-[450px] md:w-[55vw] lg:h-[500px] lg:w-[50vw] ${
                                isExpanded
                                  ? "translate-x-0 opacity-100"
                                  : "translate-x-16 opacity-0"
                              }`}
                            >
                              <Image
                                src={`/images/${image}`}
                                alt=""
                                fill
                                draggable={false}
                                className="object-cover pointer-events-none"
                                sizes="(max-width: 768px) 70vw, 50vw"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}

          <Divider />
        </div>
      </Container>
    </section>
  );
}

const Divider = () => (
  <div
    aria-hidden
    className="h-[3px] w-full bg-[repeating-linear-gradient(to_right,#0A0A0D_0px,#0A0A0D_20px,transparent_20px,transparent_34px)] opacity-25"
  />
);