import Image from "next/image";
import Link, { LinkProps } from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed z-20 w-full left-0 top-0  md:px-[27px]">
      <div className="max-w-[1440px] md:px-10 xl:px-16 mx-auto flex justify-between items-center my-7 md:my-10 p-6 md:bg-black py-5 rounded-full">
        <Link href={"/"}>
          <Image
            src={"/images/logo-white.svg"}
            width={77.48}
            height={55}
            alt="PHP connect"
            className="w-[50.7px] h-[36px] md:w-[77.48px] md:h-[55px]"
          />
        </Link>
        <div className="hidden md:flex justify-between gap-x-[50px]">
          <NavLink href={"/speakers"}>ABOUT</NavLink>
          <NavLink href={"/speakers"}>SPEAKERS</NavLink>
          <NavLink href={"/speakers"}>SPONSORS</NavLink>
          <NavLink href={"/speakers"}>AGENDA</NavLink>
        </div>
        <Link
          className="hidden md:inline text-lg leading-6 font-medium font-heading text-black bg-secondary px-10 py-3 rounded-3xl"
          href={"/"}
        >
          Register
        </Link>
        <button className="md:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
      </div>
    </nav>
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
