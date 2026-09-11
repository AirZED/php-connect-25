import Head from "next/head";
import Container from "@/components/layout/Container";
import Page from "@/components/layout/Page";
import Reveal from "@/components/animation/Reveal";
import { PersonCard, SpeakerCarousel } from "@/components/sections/Speakers";
import { coreTeamMembers, speakers, volunteers, hosts } from "@/data";

const GROUPS: {
  id?: string;
  label: string;
  items: { slug?: string; name: string; designation: string; image?: string }[];
  carousel?: boolean;
}[] = [
  { label: "Hosts", items: hosts },
  { id: "speakers", label: "Speakers", items: speakers, carousel: true },
  { label: "Core Team", items: coreTeamMembers },
  { label: "Volunteers", items: volunteers },
];

export default function Team() {
  return (
    <Page>
      <Head>
        <title>
          Speakers | Team Members | Volunteers - PHPConnect - A PHP Talks
          Conference 2026{" "}
        </title>
      </Head>
      <main className="bg-paper py-16 md:py-24">
        <Container className="space-y-16 md:space-y-24">
          {GROUPS.map((group) => (
            <section key={group.label} id={group.id} className="scroll-mt-[170px]">
              <Reveal>
                <span className="font-secondary text-[1.5rem] font-normal uppercase leading-none tracking-[1px] text-ink/50">
                  {group.label}
                </span>
              </Reveal>

              <Reveal width="100%">
                {group.carousel ? (
                  <div className="mt-10 md:mt-16">
                    <SpeakerCarousel people={group.items} />
                  </div>
                ) : (
                  <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:mt-16 md:grid-cols-4 md:gap-10">
                    {group.items.map((person, i) => (
                      <PersonCard key={person.slug ?? i} {...person} />
                    ))}
                  </div>
                )}
              </Reveal>
            </section>
          ))}
        </Container>
      </main>
    </Page>
  );
}
