import Image from "next/image";
import Link, { LinkProps } from "next/link";
import React from "react";
import Typography from "../ui/Typography";
import { WhatsappIcon } from "../ui/Icons";
import Container from "./Container";

export default function Footer() {
  return (
    <Container className="mt-9 md:mt-12 lg:mt-16">
      <div className="flex text-center flex-col justify-center items-center gap-y-2 gap-x-3 py-12 md:py-20 bg-connect-pattern-2 md:bg-connect-pattern-3 bg-contain bg-[#6549F51A] rounded-[30px] bg-opacity-50">
        <Typography variant={"h4"} className="">Become a World Class PHP Developer</Typography>
        <Typography>
          Join our PHP Talks Community and meet creative and passionate
          developers.
        </Typography>
        <Link href={"/"} className="flex items-center gap-x-3">
          <WhatsappIcon />
          <Typography variant={"h6"} className="text-lg font-medium">
            Join on WhatsApp
          </Typography>
        </Link>
      </div>
      <footer className=" z-20 w-full py-6">
        <div className="max-w-[1440px] md:px-10 xl:px-16 mx-auto flex flex-col md:flex-row justify-start md:justify-between md:items-center gap-y-12 md:my-10 md:p-6 md:bg-black py-5 rounded-full">
          <Link href={"/"}>
            <Image
              src={"/images/logo-white.svg"}
              width={77.48}
              height={55}
              alt="PHP connect"
              className="w-[50.7px] h-[36px] md:w-[77.48px] md:h-[55px]"
            />
          </Link>
          <div className="flex flex-col md:flex-row justify-between gap-x-[50px] gap-y-10">
            <NavLink href={"/speakers"}>SPEAKERS</NavLink>
            <NavLink href={"/speakers"}>SPONSORS</NavLink>
            <NavLink href={"/speakers"}>AGENDA</NavLink>
          </div>

          <span className="text-gray-400 font-heading">
            &copy; {new Date().getFullYear()} PHP Talks
          </span>
        </div>
      </footer>
    </Container>
  );
}

const NavLink = (
  props: LinkProps & { children: string | JSX.Element | JSX.Element[] }
) => (
  <Link
    className="text-lg leading-6  font-medium font-heading text-white uppercase    flex flex-col group"
    {...props}
  >
    <span>{props.children}</span>
    <span className="group-hover:w-full transition-all w-0 h-1 bg-white"></span>
  </Link>
);
