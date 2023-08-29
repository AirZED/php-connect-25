import React from "react";
import { Splide, SplideSlide } from "../Splide";
import Image from "next/image";
import Typography from "../ui/Typography";
import Container from "../layout/Container";

export default function Team() {
  return (
    <div className="my-9 space-y-7 md:space-y-12">
      <Container className="space-y-6 md:space-y-14">
        <div className="lg:max-w-[895px] flex flex-col gap-y-6">
          <Typography variant={"h2"}>Meet Our Speakers</Typography>
          <Typography variant={"h6"} className="font-sans">
            PHP Connect is an annual event that is organised by PHPTALKS, with
            the sole purpose of engaging techies through physical connections,
            and fostering learning.
          </Typography>
        </div>
      </Container>

      <Container className="grid grid-cols-2 md:hidden">
        <TeamMemberCard
          name="Mr. David"
          designation="Software Engineer"
          image="speaker-1.jpeg"
        />
        <TeamMemberCard
          name="Mr. David"
          designation="Software Engineer"
          image="speaker-1.jpeg"
        />
        <TeamMemberCard
          name="Mr. David"
          designation="Software Engineer"
          image="speaker-1.jpeg"
        />
        <TeamMemberCard
          name="Mr. David"
          designation="Software Engineer"
          image="speaker-1.jpeg"
        />
        <TeamMemberCard
          name="Mr. David"
          designation="Software Engineer"
          image="speaker-1.jpeg"
        />
      </Container>

      <Splide
        className="my-4 hidden md:block"
        options={{
          arrows: false,
          autoplay: false,
          perPage: 3.9,
          trimspace: false,
          padding: 97,
          gap: "30px",
          drag: "free",
          snap: true,
          focus: "center",
          pagination: false,
          breakpoints: {
            360: {
              padding: 5,
              perPage: 1.02,
              gap: 3,
            },
            390: {
              padding: 27,
              perPage: 1.05,
            },
            320: {
              padding: 27,
              perPage: 0.9,
              // gap:1
            },
          },
        }}
      >
        <SplideSlide>
          <TeamMemberCard
            name="Mr. David"
            designation="Software Engineer"
            image="speaker-1.jpeg"
          />
        </SplideSlide>
        <SplideSlide>
          <TeamMemberCard
            name="Mr. David"
            designation="Software Engineer"
            image="speaker-1.jpeg"
          />
        </SplideSlide>
        <SplideSlide>
          <TeamMemberCard
            name="Mr. David"
            designation="Software Engineer"
            image="speaker-1.jpeg"
          />
        </SplideSlide>
        <SplideSlide>
          <TeamMemberCard
            name="Mr. David"
            designation="Software Engineer"
            image="speaker-1.jpeg"
          />
        </SplideSlide>
        <SplideSlide>
          <TeamMemberCard
            name="Mr. David"
            designation="Software Engineer"
            image="speaker-1.jpeg"
          />
        </SplideSlide>
      </Splide>
    </div>
  );
}

const TeamMemberCard = ({
  name,
  designation,
  image,
}: {
  name: string;
  designation: string;
  image: string;
}) => {
  return (
    <div className="w-[154.58px] h-[193px] md:w-[351px] md:h-[417px] relative rounded-[30px] overflow-hidden border-2 border-black/50">
      <Image
        src={`/images/speakers/${image}`}
        fill
        alt=""
        className="-z-10 h-fit rounded-[30px]"
      />
      <div className="speaker-card w-full h-full z-10 bg-opacity-25 px-3 py-4 md:px-7 md:py-9  flex justify-start items-end">
        <div className="flex flex-col gap-y-[5px] space-y-0">
          <Typography
            variant={"h6"}
            className="text-tertiary font-heading text-sm md:text-2xl font-medium my-0"
          >
            {name}
          </Typography>
          <Typography className="text-white [line-height:0;] font-heading text-[9px] md:text-base font-normal">
            {designation}
          </Typography>
        </div>
      </div>
    </div>
  );
};
