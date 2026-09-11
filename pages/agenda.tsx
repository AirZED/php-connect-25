import Schedule from "@/components/sections/Schedule";
import Page from "@/components/layout/Page";
import Head from "next/head";

export default function AgendaPage() {
  return (
    <Page>
      <Head>
        <title>Agenda - PHPConnect - A PHP Talks Conference 2026 </title>
      </Head>
      <main>
        <Schedule />
      </main>
    </Page>
  );
}
