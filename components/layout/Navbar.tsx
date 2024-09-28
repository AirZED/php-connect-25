import Image from "next/image";
import Link, { LinkProps } from "next/link";
import React, { useEffect, useState } from "react";
import { Bars3 } from "../ui/Icons";

export const navigation: { href: string; text: string }[] = [
  {
    text: "SPEAKERS",
    href: "/team#speakers",
  },

  {
    text: "AGENDA",
    href: "/agenda",
  },
];

export default function Navbar() {
  const [isNavOpen, toggleNav] = useState(false);
  useEffect(() => {
    if (window !== undefined) {
      const body = window.document.querySelector("body");
      if (isNavOpen) {
        body?.classList.add("max-h-screen");
        body?.classList.add("overflow-hidden");
      } else {
        body?.classList.remove("max-h-screen");
        body?.classList.remove("overflow-hidden");
      }
    }
  }, [isNavOpen]);

  const navScroll = () => {
    const navbar = window.document.querySelector("#navbar");

    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30
    ) {
      navbar?.classList.add("nav-scrolled");
    } else {
      navbar?.classList.remove("nav-scrolled");
    }
  };
  useEffect(() => {
    window.onscroll = () => navScroll();
  }, []);
  return (
    <nav
      id="navbar"
      className="fixed z-20 w-full left-0 top-0  md:px-[27px] py-6 px-6 transition-[padding,backdrop-blur]"
    >
      <div className="max-w-[1440px] md:px-10 xl:px-16 mx-auto flex justify-between items-center  md:my-10 md:p-6 md:bg-black py-5 rounded-full">
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
          <NavLink href={"/team#speakers"}>SPEAKERS</NavLink>
          <NavLink href={"/agenda"}>AGENDA</NavLink>
        </div>
        <Link
          className="hidden md:inline text-lg leading-6 font-medium font-heading text-black bg-secondary px-10 py-3 rounded-3xl"
          href={
            "https://docs.google.com/forms/d/e/1FAIpQLSeC2iB6tyhRkuBFmn56cR9nd9S27L7U66qCiK_R9G9VR6IDKw/viewform"
          }
          target="_blank"
        >
          Join Live
        </Link>
        <button
          onClick={() => toggleNav(true)}
          className="md:hidden text-white"
        >
          <Bars3 />
        </button>
      </div>
      {!!isNavOpen && <MobileNav onClose={() => toggleNav(false)} />}
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

const MobileNav = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="bg-primary bg-opacity-90 backdrop-blur-lg w-full h-screen fixed top-0 left-0 z-[60] lg:hidden p-10 flex flex-col">
      <button
        onClick={onClose}
        className="text-xl md:text-2xl text-white flex items-center gap-x-3 self-end"
      >
        <span>Close</span>{" "}
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="flex flex-col justify-center items-center h-full gap-y-10">
        {navigation.map(({ text, href }, idx) => (
          <NavLink onClick={onClose} key={idx} href={href}>
            {text}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
