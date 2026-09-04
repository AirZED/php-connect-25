import React from "react";
import Image from "next/image";
import Container from "../layout/Container";
import Reveal from "../animation/Reveal";
import { speakers } from "@/data";

export default function Speakers() {
  return (
    <section className="bg-paper py-16 md:py-[10rem] ">
      <Container className="space-y-10 md:space-y-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <Reveal>
            <span className="font-secondary text-[1.5rem] font-normal uppercase leading-none tracking-[1px] text-ink/50">
              Speakers
            </span>
          </Reveal>
          <Reveal className="md:max-w-4xl">
            <h2 className="font-primary text-2xl font-normal uppercase leading-[1.2] tracking-normal text-ink md:text-3xl lg:text-[40px]">
              From core contributors to industry innovators, showcasing the
              best of the PHP ecosystem.
            </h2>
          </Reveal>
        </div>

        <Reveal width="100%">
          <div className="no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 md:gap-16">
            {speakers.map((speaker, k) => (
              <SpeakerCard key={k} {...speaker} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

const SpeakerCard = ({
  name,
  designation,
  image,
}: {
  name: string;
  designation: string;
  image: string;
}) => {
  return (
    <div className="flex w-[38vw] shrink-0 snap-start flex-col gap-4 sm:w-[220px]">
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-ink/5">
        <Image
          src={`/images/${image}`}
          fill
          alt={name}
          className="duotone-photo object-cover"
          sizes="(min-width: 768px) 25vw, 50vw"
          quality={70}
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-heading text-lg font-medium text-ink md:text-xl">
          {name}
        </span>
        <span className="text-sm text-ink/50">{designation}</span>
      </div>
    </div>
  );
};
