import React from "react";
import { Splide, SplideSlide } from "../Splide";
import Image from "next/image";
import Container from "../layout/Container";
import Typography from "../ui/Typography";

export default function Sponsors() {
  return (
    <div className="my-9 md:my-24 space-y-7 md:space-y-12">
      <Container className="space-y-6 md:space-y-14">
        <Typography variant={"h3"}>Our Sponsors </Typography>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-5 items-center">
          <Image
            src={"/images/sponsors/lite-host.jpeg"}
            width={290}
            height={290}
            alt=""
          />

          <Image
            src={"/images/sponsors/irun.png"}
            width={290}
            height={290}
            alt=""
          />
          <Image
            src={"/images/sponsors/pay4me-app.jpeg"}
            width={290}
            height={290}
            alt=""
          />
          <Image
            src={"/images/sponsors/open-table-mentorship.png"}
            width={290}
            height={290}
            alt=""
          />
          <Image
            src={"/images/sponsors/vsual-talk.png"}
            width={290}
            height={290}
            alt=""
          />
        </div>
      </Container>
    </div>
  );
}
