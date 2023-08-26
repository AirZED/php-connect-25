import React from "react";
import Container from "./layout/Container";
import Typography from "./ui/Typography";
import Link from "next/link";
import { WhatsappIcon } from "./ui/Icons";

export default function About() {
  return (
    <div className="py-10 lg:py-24 md:w-[68%] max-w-[1080px] md:px-[27px]">
      <Container>
        <div className="md:px-[27px] flex flex-col gap-y-6">
          <Typography variant={"h2"}>About us</Typography>
          <Typography
            variant={"p"}
            className="text-lg font-sans tracking-[0.54px] !leading-[30px]"
          >
            PHP Connect is an annual event that is organised by PHPTALKS, with
            the sole purpose of engaging techies through physical connections,
            and fostering learning. It is primarily organised for, but not
            exclusive to PHP developers. Our carefully curated sessions give us
            the opportunity to explore the latest technology trends and
            advancements. Whether you&rsquo;re an entrepreneur, developer,
            designer, or simply someone enthusiastic about technology,
            you&rsquo;ll enjoy valuable insights and chances for networking.
            Join us as we exchange knowledge and celebrate innovation.
          </Typography>
          <Link href={"/"} className="flex items-center gap-x-3">
            <WhatsappIcon />
            <Typography variant={"h6"} className="text-lg font-medium">Join PHPTalks today</Typography>
          </Link>
        </div>
      </Container>
    </div>
  );
}
