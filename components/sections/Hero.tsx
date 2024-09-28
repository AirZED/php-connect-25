import Image from "next/image";
import React from "react";
import Typography from "../ui/Typography";
import Container from "../layout/Container";
import Link from "next/link";
import { Splide, SplideSlide } from "../Splide";
import Reveal from "../animation/Reveal";

export default function Hero() {
  return (
    <div className="bg-black ">
      <Splide
        options={{
          type: "fade",
          rewind: true,
          autoplay: true,
          arrows: false,
        }}
      >
        <SplideSlide>
          <div className="h-full w-full relative  min-h-screen hero-1 flex justify-center items-center">
            <Container className="max-h-[463px] w-full md:mt-40 flex flex-col items-center md:items-start">
              <div className="flex justify-center lg:justify-start relative text-center md:text-left">
                <Reveal width="100%">
                  <Typography
                    variant={"h2"}
                    className="[line-height:normal] md:leading-[125%]"
                  >
                    {`PHPConnect' 24`} <br />
                    Mastering the Craft
                  </Typography>
                </Reveal>
              </div>

              <Reveal>
                <div className="py-10 lg:my-10">
                  <Link
                    className="text-lg leading-6 font-medium font-heading text-black bg-secondary px-12 py-4 rounded-full"
                    href={"https://youtube.com/live/V1vs1tCdc_k?feature=share"}
                    Join Live
                  </Link>
                </div>
              </Reveal>
            </Container>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="h-full w-full relative  min-h-screen hero-2 flex justify-center items-center">
            <Container className=" max-h-[413px] md:mt-[24px] flex flex-col items-center md:items-start w-full">
              <div className="flex justify-center lg:justify-between relative text-center w-full md:text-left">
                <div>
                  <span className=" text-xl bg-tertiary text-primary max-w-max px-3 py-2 my-3 inline-block rounded-full">
                    We’ve been online
                  </span>
                  <Typography variant={"h2"} className=" max-w-[995px] ">
                    Now We Want To Connect Physically With You.
                  </Typography>
                </div>
              </div>
              <div className="my-10">
                <Link
                  className="text-lg leading-6 font-medium font-heading text-black bg-secondary px-12 py-4 rounded-full"
                  href={"/"}
                >
                  Join Live
                </Link>
              </div>
            </Container>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

//  Photo by <a href="https://unsplash.com/@productschool?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Product School</a> on <a href="https://unsplash.com/photos/nOvIa_x_tfo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
