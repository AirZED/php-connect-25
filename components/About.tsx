import React from "react";
import Container from "./layout/Container";
import Typography from "./ui/Typography";
import Link from "next/link";
import { WhatsappIcon } from "./ui/Icons";
import { Splide, SplideSlide } from "./Splide";
import Image from "next/image";

export default function About() {
  return (
    <div className="py-10 lg:py-24">
      <div className=" md:w-[68%] max-w-[1080px] md:px-[27px]">
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
              exclusive to PHP developers. Our carefully curated sessions give
              us the opportunity to explore the latest technology trends and
              advancements. Whether you&rsquo;re an entrepreneur, developer,
              designer, or simply someone enthusiastic about technology,
              you&rsquo;ll enjoy valuable insights and chances for networking.
              Join us as we exchange knowledge and celebrate innovation.
            </Typography>
            <Link href={"/"} className="flex items-center gap-x-3">
              <WhatsappIcon />
              <Typography variant={"h6"} className="text-lg font-medium">
                Join PHPTalks today
              </Typography>
            </Link>
          </div>
        </Container>
      </div>
      <Splide className="md:my-12" options={{
            arrows: false,
            autoplay: false,
            perPage: 4.2,
            trimspace: false,
            padding: 27,
            drag: "free",
            snap: true,
            focus: "center",
            pagination:false,
            breakpoints: {
                360: {
                    padding: 5,
                    perPage: 1.02,
                    gap:3
                },
                390: {
                    padding: 27,
                    perPage: 1.05,
                },
                320: {
                    padding: 27,
                    perPage: 0.9,
                    // gap:1
                }
            }
        }}>
            <SplideSlide>
                <Image src={"/images/slides/image-1.png"} width={290} height={290} alt=""/>
            </SplideSlide>
            <SplideSlide>
                <Image src={"/images/slides/image-2.png"} width={290} height={290} alt=""/>
            </SplideSlide>
            <SplideSlide>
                <Image src={"/images/slides/image-3.png"} width={290} height={290} alt=""/>
            </SplideSlide>
            <SplideSlide>
                <Image src={"/images/slides/image-4.png"} width={290} height={290} alt=""/>
            </SplideSlide>
            <SplideSlide>
                <Image src={"/images/slides/image-5.png"} width={290} height={290} alt=""/>
            </SplideSlide>
            <SplideSlide>
                <Image src={"/images/slides/image-6.png"} width={290} height={290} alt=""/>
            </SplideSlide>
      </Splide>
    </div>
  );
}
