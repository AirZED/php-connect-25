import Image from "next/image";
import React from "react";
import Typography from "./ui/Typography";
import Container from "./layout/Container";
import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <div className="h-full w-full relative min-h-[832px] hero-1 flex justify-center items-center">
        <Container className=" max-h-[413px] md:mt-60 flex flex-col items-center md:items-start">
          <div className="flex justify-center lg:justify-start relative text-center md:text-left"> 
            <Typography variant={"h2"} className="[line-height:normal] ">
              Inspiring the PHP Renaissance: Building Tomorrow’s Web
            </Typography>
            <Image src={"/images/date-ring.png"} width={175} height={175} className="hidden md:block absolute right-0 bottom-0" alt="Date"/>
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
      {/* <div className="h-full w-full relative min-h-[832px] hero-2 "></div> */}
    </div>
  );
}

//  Photo by <a href="https://unsplash.com/@productschool?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Product School</a> on <a href="https://unsplash.com/photos/nOvIa_x_tfo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
