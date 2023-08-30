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
            <Container className="max-h-[413px] w-full md:mt-40 flex flex-col items-center md:items-start">
              <div className="flex justify-center lg:justify-start relative text-center md:text-left">
                <Reveal width="100%">
                  <Typography variant={"h2"} className="[line-height:normal] ">
                    Inspiring the PHP Renaissance: Building Tomorrow’s Web
                  </Typography>
                </Reveal>

                <Image
                  src={"/images/date-ring.png"}
                  width={175}
                  height={175}
                  className="hidden md:block absolute right-0 bottom-0"
                  alt="Date"
                />
              </div>

              <Reveal>
                <div className="my-10">
                  <Link
                    className="text-lg leading-6 font-medium font-heading text-black bg-secondary px-12 py-4 rounded-full"
                    href={"/"}
                  >
                    Register
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
                <Image
                  src={"/images/date-ring.png"}
                  width={175}
                  height={175}
                  className="hidden md:block absolute right-0 bottom-0"
                  alt="Date"
                />
              </div>
              <div className="my-10">
                <Link
                  className="text-lg leading-6 font-medium font-heading text-black bg-secondary px-12 py-4 rounded-full"
                  href={"/"}
                >
                  Register
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
