import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Container from "@/components/layout/Container";
import Typography from "@/components/ui/Typography";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Countdown from "@/components/sections/Countdown";
import Speakers from "@/components/sections/Speakers";
import Team from "@/components/sections/Team";
import Footer from "@/components/layout/Footer";
import Page from "@/components/layout/Page";
import Sponsors from "@/components/sections/Sponsors";
import Partners from "@/components/sections/Partners";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Page>
      <Head>
        <title>PHPConnect - A PHP Talks Conference 2023 </title>
      </Head>
      <main>
        <Hero />
        <About />
        <div className="relative w-full h-[284px] hidden lg:block">
          <Image
            src="/images/speakers-sessions-mix.png"
            alt="speakers-sessions-mix."
            fill
            className="h-full w-full"
          />
        </div>
        <Countdown />
        <Speakers />
        <Sponsors />
        <Partners />

        {/* <Team/> */}
      </main>
    </Page>
  );
}
const IconTest = () => (
  <svg className="css-rt6ihi w-10 h-10" viewBox="0 0 50 66.79423891030912">
    <g
      transform="translate(-0.0041222241269601445, -24.64536814548582) scale(1.5233357836656778)"
      fill="#ff3b00"
    >
      <path d="M0.72 16.560000000000002 l0 0 c0 -0.06 30.66 -0.48 30.84 -0.36 c0.78 0.72 1.14 7.44 1.26 15.42 c-3.18 -2.7 -8.1 -5.52 -14.88 -5.7 c-1.14 0 -2.04 0.84 -2.1 1.98 c0 1.14 0.84 2.04 1.98 2.1 c8.34 0.18 13.14 4.98 15 7.38 c0 10.5 -0.48 21.12 -1.08 21.72 c-1.26 1.08 -30.42 1.38 -31.2 0 c-0.6 -1.14 -0.6 -11.52 -0.48 -21.72 c6.06 0.48 15.72 2.46 17.4 9.9 c0.3 1.08 1.32 1.8 2.4 1.56 c1.14 -0.3 1.8 -1.32 1.56 -2.46 c-2.22 -9.96 -14.28 -12.48 -21.24 -13.02 c0.18 -8.94 0.42 -16.74 0.54 -16.8 z"></path>
    </g>
  </svg>
);
