import Image from "next/image";
import Link, { LinkProps } from "next/link";
import React, { useEffect } from "react";
import { Bars3 } from "../ui/Icons";

export default function Navbar() {
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
    <>
    <nav id="navbar" className="fixed z-20 w-full left-0 top-0  md:px-[27px] py-6 px-6 transition-[padding,backdrop-blur]">
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
          <NavLink href={"/sponsor"}>SPONSORS</NavLink>
          <NavLink href={"/agenda"}>AGENDA</NavLink>
        </div>
        <Link
          className="hidden md:inline text-lg leading-6 font-medium font-heading text-black bg-secondary px-10 py-3 rounded-3xl"
          href={"https://docs.google.com/forms/d/e/1FAIpQLSeC2iB6tyhRkuBFmn56cR9nd9S27L7U66qCiK_R9G9VR6IDKw/viewform"}
          target="_blank"
        >
          Register
        </Link>
        <button className="md:hidden text-white">
          <Bars3 />
        </button>
      </div>
    </nav>
    {/* <div className="bg-black">


    </div> */}
    </>
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
