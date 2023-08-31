import Container from "@/components/layout/Container";
import Page from "@/components/layout/Page";
import Typography from "@/components/ui/Typography";
import Head from "next/head";
import React from "react";

export default function Agenda() {
  return (
    <Page>
      <Head>
        <title>Agenda - PHPConnect - A PHP Talks Conference 2023 </title>
      </Head>
      <main className="my-20 lg:my-40">
        <Container className="py-10 flex flex-col gap-y-[15px]">
          <Typography variant={"h1"}>Agenda</Typography>
          <Typography className="inline-block lg:max-w-[699px]">
            We believe that Config should be available to everyone, anywhere.
            That’s why this year, it’s 24 hours long. Don’t let the lengthy
            agenda trick you into guzzling energy drinks, though—it just means
            that there are more talks to tune in to—no matter where you are in
            the world.
          </Typography>
        </Container>
      </main>
    </Page>
  );
}
