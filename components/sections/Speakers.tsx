import React from "react";
import Image from "next/image";
import Container from "../layout/Container";
import Reveal from "../animation/Reveal";
import { speakers } from "@/data";

export default function Speakers() {
  return (
    <section className="bg-paper py-16 md:py-24">
      <Container className="space-y-10 md:space-y-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[200px_1fr] md:gap-10">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ink/50">
              Speakers
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
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-8 md:gap-y-14">
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
    <div className="flex flex-col gap-4">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-ink/5">
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
