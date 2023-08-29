import React from "react";
import Container from "../layout/Container";
import Typography from "../ui/Typography";
import Image from "next/image";

export default function Countdown() {
  return (
    <div className="md:py-[75px]">
      <Container className="hidden lg:block space-y-14">
        <div className="lg:max-w-[687px] flex flex-col gap-y-6">
          <Typography variant={"h2"}>Decide To Join The Event.</Typography>
          <Typography variant={"p"}>
            Bringing PHP enthusiasts and developers together for positive
            impact. Bringing PHP enthusiasts and developers together for
            positive impact
          </Typography>
        </div>
      </Container>
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
    </div>
  );
}
