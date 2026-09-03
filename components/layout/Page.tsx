import { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Page({
  children,
  hideNav = false,
}: {
  children: ReactNode;
  hideNav?: boolean;
}) {
  return (
    <>
      <main className="relative">
        <Head>
          <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
          <meta property="og:title" content={"PHP Connect"} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:site"
            content="https://event.phptalks.community"
          />
          <meta name="twitter:creator" content="@PHPTalks" />
          <meta
            property="twitter:image"
            content="https://events.phptalks.community/images/og.png"
          />
          <meta
            property="og:image"
            content="https://events.phptalks.community/images/og.png"
          />
          <meta property="og:site_name" content="PHP Connect" />
          <meta property="og:url" content="https://events.phptalks.community" />
          <meta
            property="og:description"
            content="PHP Connect is an annual event that is organised by PHPTALKS, with the sole purpose of engaging techies through physical connections, and fostering learning."
          />
          <meta property="og:type" content="website" />
        </Head>
        {/* {!hideNav && <Navbar />} */}
        {children}
        <Footer />
      </main>
    </>
  );
}
