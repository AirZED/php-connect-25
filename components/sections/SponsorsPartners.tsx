import React, { useEffect, useState } from "react";
import Image from "next/image";
import Container from "../layout/Container";
import { cn } from "@/lib/utils";
import { SPONSOR_TIERS, partners, sponsors, type LogoOnDark } from "@/data";

type Tab = "sponsors" | "partners";

export default function SponsorsPartners() {
  const [tab, setTab] = useState<Tab>("sponsors");

  useEffect(() => {
    const syncFromHash = (hash: string) => {
      if (hash === "#partners") setTab("partners");
      else if (hash === "#sponsors") setTab("sponsors");
    };

    syncFromHash(window.location.hash);
    window.addEventListener("hashchange", () => syncFromHash(window.location.hash));

    // Next.js Link doesn't fire a native hashchange for same-page hash
    // navigation, so catch the click directly too.
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest("a[href*='#sponsors'], a[href*='#partners']");
      const href = anchor?.getAttribute("href");
      if (!href) return;
      syncFromHash(href.slice(href.indexOf("#")));
    };
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <section
      id="sponsors"
      data-nav-theme="dark"
      className="scroll-mt-[170px] bg-[#0B081B] py-16 md:py-24"
    >
      <Container className="space-y-10 md:space-y-14">
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/10 pb-6">
          <div className="flex gap-8 md:gap-10">
            <TabButton
              id="sponsors-tab"
              active={tab === "sponsors"}
              onClick={() => setTab("sponsors")}
            >
              Sponsors
            </TabButton>
            <TabButton
              id="partners"
              active={tab === "partners"}
              onClick={() => setTab("partners")}
            >
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
  id,
  active,
  onClick,
  children,
}: {
  id?: string;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    id={id}
    onClick={onClick}
    className={cn(
      "scroll-mt-[170px] font-heading text-xl uppercase tracking-wide pb-1 transition md:text-2xl",
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
    {SPONSOR_TIERS.map(({ id, label }) => {
      const tierSponsors = sponsors.filter((sponsor) => sponsor.tier === id);
      if (tierSponsors.length === 0) return null;
      return (
        <SponsorTier key={id} name={label}>
          {tierSponsors.map((sponsor) => (
            <SponsorLogo key={sponsor.name} {...sponsor} />
          ))}
        </SponsorTier>
      );
    })}
  </div>
);

const PartnersPanel = () => (
  <SponsorTier name="Partners">
    {partners.map((partner) => (
      <SponsorLogo key={partner.name} {...partner} />
    ))}
  </SponsorTier>
);

const SponsorLogo = ({
  name,
  logo,
  logoOnDark,
  website,
}: {
  name: string;
  logo?: string;
  logoOnDark?: LogoOnDark;
  website?: string;
}) => {
  const content = logo ? (
    <Image
      src={`/images/${logo}`}
      alt={name}
      fill
      sizes="(min-width: 1024px) 20vw, 50vw"
      // The optimizer rejects SVG unless dangerouslyAllowSVG is set; serve it as-is.
      unoptimized={logo.endsWith(".svg")}
      className={cn(
        "object-contain object-center",
        // Black monochrome artwork would vanish on the dark section.
        logoOnDark === "invert" && "invert",
        logoOnDark === "chip" && "p-2"
      )}
    />
  ) : (
    // Placeholder until the brand supplies artwork.
    <span className="px-2 text-center font-heading text-base font-medium text-white/70 md:text-lg">
      {name}
    </span>
  );

  const className = cn(
    "relative flex h-16 w-full items-center justify-center md:h-20",
    // Multi-colour dark artwork needs a light tile to sit on.
    logoOnDark === "chip" && "rounded-lg bg-white"
  );

  return website ? (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className={cn(className, "transition hover:opacity-80")}
    >
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
};

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
