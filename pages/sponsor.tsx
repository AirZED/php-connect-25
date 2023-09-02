import Container from "@/components/layout/Container";
import Page from "@/components/layout/Page";
import Typography from "@/components/ui/Typography";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Sponsor() {
  return (
    <Page>
      <Head>
        <title>Sponsor - PHPConnect - A PHP Talks Conference 2023 </title>
      </Head>
      <main className="my-20 lg:my-40">
        <Container className="py-10 flex flex-col gap-y-[15px]">
          <Typography variant={"h1"}>Become a Sponsor</Typography>
          <Typography className="inline-block lg:max-w-[699px]">
            Our goal is to make sure everyone goes home satisfied and to this
            effect, we are excited to have speakers for all levels of expertise.
            Get ready to be hooked at their incredible display of intelligence.
          </Typography>
          <Link
            download={"Sponsorship_For_PHPConnnect.pdf"}
            href={"/docs/Sponsorship_For_PHPConnnect.pdf"}
            className="flex items-center gap-x-3"
          >
            <Typography
              variant={"h6"}
              className="text-lg text-secondary font-medium"
            >
              Become a Sponsor
            </Typography>
          </Link>
        </Container>
        <Container className="w-full h-full grid place-content-center">
          <Image
            src={"/images/sponsor/vector.svg"}
            height={543}
            width={543}
            className="w-[339px] h-[339px] lg:w-[543px] lg:h-[543px]"
            alt="Sponsor Vector"
          />
        </Container>
        <Container className="flex flex-col md:flex-row gap-y-4 gap-x-[27px] my-6 lg:my-14">
          <div className="w-full md:w-1/2 flex flex-col gap-y-[9.66px] bg-tertiary py-8 md:py-14 px-[30px] md:px-12 rounded-[18px] lg:rounded-[30px]">
            <Typography variant={"h3"} className="text-primary">
              Calls for Speakers
            </Typography>
            <Typography className="text-primary text-xs">
              We would love you to share your Knowledge at our PHP Conference
              event. Register as one of our speakers at the PHP Conference Event
            </Typography>
            <Link href={"/"} className="flex items-center gap-x-3">
              <Typography
                variant={"p"}
                className="text-sm lg:text-lg font-heading  text-primary font-medium"
              >
                Become a Speaker
              </Typography>
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-y-[9.66px] bg-secondary py-8 md:py-14 px-[30px] md:px-12 rounded-[18px] lg:rounded-[30px]">
            <Typography variant={"h3"} className="text-primary">
              Register for Event
            </Typography>
            <Typography className="text-primary text-xs">
              We are excited to have you in-person for the PHP Connect Event.
              Register and secure a seat.
            </Typography>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSeC2iB6tyhRkuBFmn56cR9nd9S27L7U66qCiK_R9G9VR6IDKw/viewform"
              className="flex items-center gap-x-3"
            >
              <Typography
                variant={"p"}
                className="text-sm lg:text-lg font-heading  text-primary font-medium"
              >
                Register Here
              </Typography>
            </Link>
          </div>
        </Container>
      </main>
    </Page>
  );
}

export default Sponsor;
