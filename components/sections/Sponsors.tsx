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
        <SponsorType name="Gold">
          <Image
            src={"/images/sponsors/Gold/notion.png"}
            width={290}
            height={290}
            alt=""
          />
          <Image
            src={"/images/sponsors/Gold/marvy.png"}
            width={290}
            height={290}
            alt=""
          />
        </SponsorType>

        <SponsorType name="Diamond">
          <Image
            src={"/images/sponsors/Diamond/wkd.png"}
            width={290}
            height={290}
            alt=""
          />
          <Image
            src={"/images/sponsors/Diamond/AGNimble.png"}
            width={290}
            height={290}
            alt=""
          />
          <Image
            src={"/images/sponsors/Diamond/reggie.png"}
            width={290}
            height={290}
            alt=""
          />
          <Image
            src={"/images/sponsors/Diamond/Venhoot.png"}
            width={290}
            height={290}
            alt=""
          />
        </SponsorType>

        <SponsorType name="Silver">
          <Image
            src={"/images/sponsors/Silver/Middey.png"}
            width={290}
            height={290}
            alt=""
          />
          <Image
            src={"/images/sponsors/Silver/Litehost.png"}
            width={290}
            height={290}
            alt=""
          />
          <Image
            src={"/images/sponsors/Silver/teller.png"}
            width={290}
            height={290}
            alt=""
          />
          <Image
            src={"/images/sponsors/Silver/Viction.png"}
            width={290}
            height={290}
            alt=""
          />
          <Image
            src={"/images/sponsors/Silver/phpsandbox.png"}
            width={290}
            height={290}
            alt=""
          />
          <Image
            src={"/images/sponsors/Silver/Frontier.png"}
            width={290}
            height={290}
            alt=""
          />
          <Image
            src={"/images/sponsors/Silver/DigitalNERD.png"}
            width={290}
            height={290}
            alt=""
          />
          <Image
            src={"/images/sponsors/Silver/coderigi.png"}
            width={290}
            height={290}
            alt=""
          />
        </SponsorType>
      </Container>
    </div>
  );
}

const SponsorType = ({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Typography variant={"h4"} className="text-xl md:text-2xl font-medium">
        {name}
      </Typography>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-5 items-center border-b border-b-gray-500/70 pb-10">
        {children}
      </div>
    </>
  );
};
