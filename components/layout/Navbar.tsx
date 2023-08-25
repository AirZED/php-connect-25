import Image from "next/image";
import Link, { LinkProps } from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed z-20 w-full left-0 top-0  px-[27px]">
      <div className="max-w-[1440px] md:px-10 xl:px-16 mx-auto flex justify-between items-center my-10 p-6 bg-black py-5 px-9 rounded-full">
        <Link href={"/"}>
          <Image
            src={"/images/logo-white.svg"}
            width={77.48}
            height={55}
            alt="PHP connect"
          />
        </Link>
        <div className="flex justify-between gap-x-[50px]">
          <NavLink href={"/speakers"}>Speakers</NavLink>
          <NavLink href={"/speakers"}>Speakers</NavLink>
          <NavLink href={"/speakers"}>Speakers</NavLink>
          <NavLink href={"/speakers"}>Speakers</NavLink>
        </div>
        <Link className="text-lg leading-6 font-medium font-heading text-black bg-secondary px-10 py-3 rounded-3xl" href={"/"}>Register</Link>
      </div>
    </nav>
  );
}

const NavLink = (
  props: LinkProps & { children: string | JSX.Element | JSX.Element[] }
) => (
  <Link
    className="text-lg leading-6 font-medium font-heading text-white uppercase"
    {...props}
  />
);
