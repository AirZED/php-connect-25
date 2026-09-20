import React from "react";
import Image from "next/image";
import Container from "../layout/Container";
import { cn } from "@/lib/utils";
import { SPONSOR_TIERS, partners, sponsors, type LogoOnDark } from "@/data";

/**
 * Every size below was measured from the design at a 640px-wide box, then
 * expressed as a share of the box's own width (container query units) so the
 * whole block scales together from phones to desktop.
 */
const u = (px: number) => `${(px * 0.15625).toFixed(3)}cqw`;
/** Same as u(), but never smaller than `min` px so text stays readable. */
const t = (px: number, min: number) => `max(${min}px, ${u(px)})`;

const tier = (id: string) => sponsors.filter((sponsor) => sponsor.tier === id);
const tierLabel = (id: string) => SPONSOR_TIERS.find((item) => item.id === id)?.label ?? "";

const organizers = partners.filter((partner) => partner.type === "Organizing Partner");
const otherPartners = partners.filter((partner) => partner.type !== "Organizing Partner");

export default function SponsorsPartners() {
  const [diamond] = tier("diamond");
  const featuredRow = [
    ...organizers.map((item) => ({ label: "Organizing Partner", item })),
    ...tier("media").map((item) => ({ label: tierLabel("media"), item })),
    ...tier("meal").map((item) => ({ label: tierLabel("meal"), item })),
  ];

  return (
    <section
      id="sponsors"
      data-nav-theme="dark"
      className="scroll-mt-[170px] bg-[#0B081B] py-16 md:py-24"
    >
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-6">
          <h2 className="font-secondary text-xl font-normal uppercase tracking-normal text-white md:text-[1.5rem] lg:text-[2rem]">
            Sponsors and Partners
          </h2>
          <a
            href="/sponsor"
            className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-dark"
          >
            <Image src="/images/icons/register.png" alt="" width={16} height={16} />
            Become a Sponsor
          </a>
        </div>

        <div
          style={{ containerType: "inline-size" }}
          className="mt-8 md:mt-12 lg:mt-14"
        >
          <div className="border border-white/10 text-white">
            {diamond && <DiamondRow sponsor={diamond} />}

            <Row>
              <Label>{tierLabel("silver")}</Label>
              <div
                className="flex flex-wrap items-center"
                style={{ marginTop: u(10), columnGap: u(34), rowGap: u(16) }}
              >
                {tier("silver").map((sponsor) => (
                  <Logo key={sponsor.name} {...sponsor} width={sponsor.name === "Litehost" ? 172 : 160} />
                ))}
              </div>
            </Row>

            <div
              className="grid grid-cols-[1fr_1.3fr_0.8fr] border-t border-white/10"
            >
              {featuredRow.map(({ label, item }, index) => (
                <div
                  key={item.name}
                  className={cn("min-w-0", index > 0 && "border-l border-white/10")}
                  style={{
                    padding: `${u(18)} ${index === featuredRow.length - 1 ? u(12) : u(43)} ${u(20)} ${
                      index === 0 ? u(13) : u(44)
                    }`,
                  }}
                >
                  <Label>{label}</Label>
                  <div style={{ marginTop: u(6) }}>
                    <Logo {...item} width={FEATURED_WIDTH[item.name] ?? 150} />
                  </div>
                </div>
              ))}
            </div>

            <div id="partners" className="scroll-mt-[170px] border-t border-white/10">
              <Row bare>
                <Label>Partners</Label>
                <div
                  className="flex flex-wrap items-center justify-between"
                  style={{ marginTop: u(12), columnGap: u(34), rowGap: u(24) }}
                >
                  {otherPartners.map((partner) => (
                    <Logo key={partner.name} {...partner} width={PARTNER_WIDTH[partner.name] ?? 110} />
                  ))}
                </div>
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// Logo widths (in design px) — read off the design so each mark keeps its optical size.
const FEATURED_WIDTH: Record<string, number> = {
  "Kovo Labs": 151,
  "Wckd Studio": 180,
  Lunchpark: 111,
};
const PARTNER_WIDTH: Record<string, number> = {
  "PHP Foundation": 55,
  NativePHP: 153,
  JetBrains: 139,
  Nsa: 111,
  "Notion UNIUYO Community": 123,
  "AWS Student Builders Group UNIUYO": 210,
  "Karfé Nnyin": 40,
};

const Row = ({ children, bare }: { children: React.ReactNode; bare?: boolean }) => (
  <div
    className={cn(!bare && "border-t border-white/10")}
    style={{ padding: `${u(20)} ${u(9)} ${u(14)} ${u(13)}` }}
  >
    {children}
  </div>
);

const Label = ({ children }: { children: React.ReactNode }) => (
  <span
    className="block font-secondary font-normal uppercase tracking-[0.04em] text-white/90"
    style={{ fontSize: t(8, 10) }}
  >
    {children}
  </span>
);

const DiamondRow = ({ sponsor }: { sponsor: (typeof sponsors)[number] }) => (
  <div
    className="flex items-start"
    style={{ padding: `${u(17)} ${u(13)} ${u(24)}`, columnGap: u(54) }}
  >
    <div
      className="relative shrink-0 overflow-hidden bg-white"
      style={{ width: u(90), height: u(90), borderRadius: u(12) }}
    >
      {sponsor.logo && (
        <Image
          src={`/images/${sponsor.logo}`}
          alt={sponsor.name}
          fill
          sizes="180px"
          className="object-contain"
        />
      )}
    </div>
    <div className="min-w-0" style={{ paddingRight: u(4) }}>
      <h3
        className="font-secondary font-semibold uppercase leading-tight tracking-[0.02em]"
        style={{ fontSize: t(15, 13) }}
      >
        {tierLabel("diamond")}
      </h3>
      {sponsor.description && (
        <p
          className="font-secondary leading-[1.85] text-white/80"
          style={{ fontSize: t(7.2, 10), marginTop: u(12) }}
        >
          {sponsor.description}
        </p>
      )}
      {sponsor.website && (
        <a
          href={sponsor.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-secondary font-medium underline underline-offset-4 transition hover:text-white/70"
          style={{ fontSize: t(7.5, 10), marginTop: u(14), columnGap: u(8) }}
        >
          Learn more
          <svg aria-hidden viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.2" style={{ width: t(8, 9), height: t(8, 9) }}>
            <path d="M2 10 10 2M4 2h6v6" />
          </svg>
        </a>
      )}
    </div>
  </div>
);

const Logo = ({
  name,
  logo,
  logoOnDark,
  website,
  width,
}: {
  name: string;
  logo?: string;
  logoOnDark?: LogoOnDark;
  website?: string;
  width: number;
}) => {
  const content = logo ? (
    <Image
      src={`/images/${logo}`}
      alt={name}
      width={400}
      height={200}
      // The optimizer rejects SVG unless dangerouslyAllowSVG is set; serve it as-is.
      unoptimized={logo.endsWith(".svg")}
      style={{ width: u(width), height: "auto" }}
      className={cn(
        "max-w-full",
        // Black monochrome artwork would vanish on the dark section.
        logoOnDark === "invert" && "invert",
        logoOnDark === "white" && "brightness-0 invert",
        logoOnDark === "chip" && "rounded-lg bg-white p-2"
      )}
    />
  ) : (
    // Placeholder until the brand supplies artwork.
    <span className="font-heading font-medium text-white/70" style={{ fontSize: t(14, 14) }}>
      {name}
    </span>
  );

  return website ? (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className="block transition hover:opacity-80"
    >
      {content}
    </a>
  ) : (
    <div>{content}</div>
  );
};
