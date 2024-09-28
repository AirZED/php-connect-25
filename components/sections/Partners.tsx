import React from "react";
import Image from "next/image";
import Container from "../layout/Container";
import Typography from "../ui/Typography";

export default function Partners() {
  return (
    <div className="my-9 md:my-24 space-y-7 md:space-y-12">
      <Container className="space-y-6 md:space-y-14">
        <Typography variant={"h3"}>Our Patners </Typography>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-5 items-center border-b border-b-gray-500/70 pb-10">
          <Image
            src={"/images/sponsors/Partners/aces.png"}
            width={290}
            height={290}
            alt=""
          />
          <Image
            src={"/images/sponsors/Partners/GDSC.png"}
            width={290}
            height={290}
            alt=""
          />
          <Image
            src={"/images/sponsors/Partners/unschooled.png"}
            width={290}
            height={290}
            alt=""
          />
        </div>
      </Container>
    </div>
  );
}
