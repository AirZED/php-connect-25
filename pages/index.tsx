import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Container from "@/components/layout/Container";
import Typography from "@/components/ui/Typography";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>PHP Conference 23 </title>
      </Head>

      <main>
        <Navbar/>
         <Hero/>
         <About/>
        <Container>
        </Container>
      </main>
    </>
  );
}
