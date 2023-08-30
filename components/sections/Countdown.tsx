import React from "react";
import Container from "../layout/Container";
import Typography from "../ui/Typography";
import Image from "next/image";
import Reveal from "../animation/Reveal";

export default function Countdown() {
  return (
    <div className="md:pt-[75px]">
      <Container className="hidden lg:block space-y-14">
        <div className="lg:max-w-[687px] flex flex-col gap-y-6">
          <Reveal>
            <Typography variant={"h2"}>Decide To Join The Event.</Typography>
          </Reveal>
          <Reveal>
            <Typography variant={"p"}>
              Bringing PHP enthusiasts and developers together for positive
              impact. Bringing PHP enthusiasts and developers together for
              positive impact
            </Typography>
          </Reveal>
        </div>
      </Container>
      <Reveal>
        <div className="bg-[url('/images/backgrounds/connect-pattern.png')] bg-left-bottom bg-no-repeat py-24 hidden lg:block ">
          <Container>
            <Image
              src={"/images/video-player.png"}
              alt="video-player"
              width={1320}
              height={590}
            />
          </Container>
        </div>
      </Reveal>
      <Container>
        <Reveal width="100%">
          <div className="flex flex-col gap-y-16 md:flex-row justify-between px-10 py-24 lg:py-28">
            <div className="flex flex-col items-center gap-y-4 text-center">
              <Typography variant={"h3"}>200+</Typography>
              <Typography variant={"p"} className="md:text-2xl font-normal">
                Attendees 👦👩🏿‍
              </Typography>
            </div>
            <div className="flex flex-col items-center gap-y-4 text-center">
              <Typography variant={"h3"}>20</Typography>
              <Typography variant={"p"} className="md:text-2xl font-normal">
                Speakers
              </Typography>
            </div>
            <div className="flex flex-col items-center gap-y-4 text-center">
              <Typography variant={"h3"}>3</Typography>
              <Typography variant={"p"} className="md:text-2xl font-normal">
                Sessions
              </Typography>
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
