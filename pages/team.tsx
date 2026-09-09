import Container from "@/components/layout/Container";
import Page from "@/components/layout/Page";
import Typography from "@/components/ui/Typography";
import { coreTeamMembers, speakers, volunteers, hosts } from "@/data";
import { initialsOf } from "@/components/sections/Speakers";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Team() {
  return (
    <Page>
      <Head>
        <title>
          Speakers | Team Members | Volunteers - PHPConnect - A PHP Talks
          Conference 2024{" "}
        </title>
      </Head>
      <main className="my-20 md:my-40">
        <Container id="#speakers" className="py-10">
          <Typography variant={"h2"}>Hosts</Typography>
          <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-8 my-12">
            {hosts.map((host, k) => (
              <SpeakerCard key={k} {...host} />
            ))}
          </div>
        </Container>
        <Container id="#speakers" className="py-10">
          <Typography variant={"h2"}>Speakers</Typography>
          <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-8 my-12">
            {speakers.map((speaker, k) => (
              <SpeakerCard key={k} {...speaker} />
            ))}
          </div>
        </Container>
        <Container id="#speakers" className="py-10">
          <Typography variant={"h2"}>Core Team Members</Typography>
          <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-8 my-8">
            {coreTeamMembers.map((team, k) => (
              <SpeakerCard key={k} {...team} />
            ))}
          </div>
        </Container>
        <Container id="#speakers" className="py-10">
          <Typography variant={"h2"}>Volunteers</Typography>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-8 my-8">
            {volunteers.map((team, k) => (
              <SpeakerCard key={k} {...team} />
            ))}
          </div>
        </Container>
      </main>
    </Page>
  );
}

export const SpeakerCard = ({
  slug,
  name,
  designation,
  image,
}: {
  slug?: string;
  name: string;
  designation: string;
  image?: string;
}) => {
  const card = (
    <div className="max-w-[184.58px] h-[193px]  md:max-w-[408px] md:h-[417px] relative rounded-[18px] lg:rounded-[30px] overflow-hidden border-2 border-black/50">
      {image ? (
        <Image
          src={`/images/${image}`}
          fill
          alt=""
          className="-z-10 h-fit rounded-[18px] lg:rounded-[30px] "
          objectFit="cover"
          quality={100}
        />
      ) : (
        <div className="absolute inset-0 -z-10 flex items-center justify-center rounded-[18px] bg-ink/80 lg:rounded-[30px]">
          <span className="font-display text-4xl font-bold text-white/40 md:text-6xl">
            {initialsOf(name)}
          </span>
        </div>
      )}
      <div className="speaker-card w-full h-full z-10 bg-opacity-25 px-3 py-4 md:px-7 md:py-9  flex justify-start items-end">
        <div className="flex flex-col gap-y-[5px] space-y-0">
          <Typography
            variant={"h6"}
            className="text-tertiary font-heading text-sm md:text-2xl font-medium my-0"
          >
            {name}
          </Typography>
          <Typography className="text-white [line-height:normal;] font-heading text-[9px] md:text-base font-normal">
            {designation}
          </Typography>
        </div>
      </div>
    </div>
  );

  return slug ? (
    <Link href={`/speakers/${slug}`} className="block">
      {card}
    </Link>
  ) : (
    card
  );
};

export default Team;
