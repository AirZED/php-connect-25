import React, { useState } from "react";
import Image from "next/image";
import Container from "../layout/Container";
import { cn } from "@/lib/utils";

type Tab = "sponsors" | "partners";

export default function SponsorsPartners() {
  const [tab, setTab] = useState<Tab>("sponsors");

  return (
    <section className="bg-[#0B081B] py-16 md:py-24">
      <Container className="space-y-10 md:space-y-14">
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/10 pb-6">
          <div className="flex gap-8 md:gap-10">
            <TabButton active={tab === "sponsors"} onClick={() => setTab("sponsors")}>
              Sponsors
            </TabButton>
            <TabButton active={tab === "partners"} onClick={() => setTab("partners")}>
              Partners
            </TabButton>
          </div>
          <a
            href="/sponsor"
            className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-dark"
          >
            <Image src="/images/icons/register.png" alt="" width={16} height={16} />
            Become a Sponsor
          </a>
        </div>

        {tab === "sponsors" ? <SponsorsPanel /> : <PartnersPanel />}
      </Container>
    </section>
  );
}

const TabButton = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={cn(
      "font-heading text-xl uppercase tracking-wide pb-1 transition md:text-2xl",
      active
        ? "border-b-2 border-accent text-white"
        : "border-b-2 border-transparent text-white/40 hover:text-white/70"
    )}
  >
    {children}
  </button>
);

const SponsorsPanel = () => (
  <div className="space-y-10 md:space-y-14">
    <SponsorTier name="Diamond Sponsors">
      <SponsorLogo src="/images/sponsors/Diamond/wkd.png" />
      <SponsorLogo src="/images/sponsors/Diamond/AGNimble.png" />
      <SponsorLogo src="/images/sponsors/Diamond/reggie.png" />
      <SponsorLogo src="/images/sponsors/Diamond/Venhoot.png" />
    </SponsorTier>

    <SponsorTier name="Gold Sponsors">
      <SponsorLogo src="/images/sponsors/Gold/notion.png" />
      <SponsorLogo src="/images/sponsors/Gold/marvy.png" />
    </SponsorTier>

    <SponsorTier name="Silver Sponsors">
      <SponsorLogo src="/images/sponsors/Silver/Middey.png" />
      <SponsorLogo src="/images/sponsors/Silver/Litehost.png" />
      <SponsorLogo src="/images/sponsors/Silver/teller.png" />
      <SponsorLogo src="/images/sponsors/Silver/Viction.png" />
      <SponsorLogo src="/images/sponsors/Silver/phpsandbox.png" />
      <SponsorLogo src="/images/sponsors/Silver/Frontier.png" />
      <SponsorLogo src="/images/sponsors/Silver/DigitalNERD.png" />
      <SponsorLogo src="/images/sponsors/Silver/coderigi.png" />
    </SponsorTier>
  </div>
);

const SponsorLogo = ({ src }: { src: string }) => (
  <div className="relative h-16 w-full md:h-20">
    <Image
      src={src}
      alt=""
      fill
      sizes="(min-width: 1024px) 20vw, 50vw"
      className="object-contain object-center"
    />
  </div>
);

const SponsorTier = ({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-6">
    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
      {name}
    </span>
    <div className="grid grid-cols-2 items-center gap-x-5 gap-y-8 lg:grid-cols-5">
      {children}
    </div>
  </div>
);

const PartnersPanel = () => (
  <SponsorTier name="Partners">
    <SponsorLogo src="/images/sponsors/Partners/aces.png" />
    <SponsorLogo src="/images/sponsors/Partners/GDSC.png" />
    <SponsorLogo src="/images/sponsors/Partners/unschooled.png" />
  </SponsorTier>
);
