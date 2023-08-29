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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>PHP Conference 23 </title>
      </Head>

      <main>
        <Navbar />
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
        <Speakers/>
        <Team/>
        <Container></Container>
      </main>
    </>
  );
}
