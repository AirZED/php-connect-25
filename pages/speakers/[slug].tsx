import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "@/components/layout/Container";
import Page from "@/components/layout/Page";
import { RegisterButton } from "@/components/sections/Hero";
import { initialsOf } from "@/components/sections/Speakers";
import {
  ArrowLeftIcon,
  FacebookIcon,
  GithubIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/ui/Icons";
import { speakers, type Speaker } from "@/data";

const NAV_LINKS: { href: string; text: string }[] = [
  { href: "/#speakers", text: "Speakers" },
  { href: "/agenda", text: "Schedule" },
  { href: "/#sponsors", text: "Sponsors" },
  { href: "/#partners", text: "Partners" },
];

const SOCIAL_ICONS = [
  { key: "instagram", Icon: InstagramIcon, label: "Instagram" },
  { key: "facebook", Icon: FacebookIcon, label: "Facebook" },
  { key: "github", Icon: GithubIcon, label: "GitHub" },
  { key: "linkedin", Icon: LinkedInIcon, label: "LinkedIn" },
  { key: "twitter", Icon: XIcon, label: "X" },
  { key: "website", Icon: GlobeIcon, label: "Website" },
] as const;

export default function SpeakerProfile({ speaker }: { speaker: Speaker }) {
  const socials = SOCIAL_ICONS.filter(({ key }) => speaker.socials?.[key]);

  return (
    <Page>
      <Head>
        <title>{`${speaker.name} — Speaker | PHPConnect '26`}</title>
        <meta
          name="description"
          content={speaker.bio ?? `${speaker.name}, ${speaker.designation}, speaking at PHPConnect '26.`}
        />
      </Head>

      <div className="bg-paper">
        <Container className="flex items-center justify-between gap-4 py-6 md:py-8">
          <Link href="/" className="block shrink-0">
            <Image
              src="/images/logo-white.svg"
              alt="PHP Connect"
              width={78}
              height={55}
              className="h-10 w-auto [filter:brightness(0)] md:h-[55px]"
              priority
            />
          </Link>

          <div className="flex items-center gap-8">
            <nav className="hidden items-center gap-x-10 lg:flex">
              {NAV_LINKS.map(({ href, text }) => (
                <Link
                  key={text}
                  href={href}
                  className="text-sm font-medium tracking-wide text-ink transition-colors hover:text-ink/60"
                >
                  {text}
                </Link>
              ))}
            </nav>
            <RegisterButton className="hidden md:inline-flex" />
          </div>
        </Container>

        <Container className="pb-20 pt-6 md:pb-28 md:pt-10">
          <Link
            href="/#speakers"
            aria-label="Back to all speakers"
            className="inline-flex text-ink transition-colors hover:text-ink/60"
          >
            <ArrowLeftIcon />
          </Link>

          <div className="mt-8 flex flex-col gap-8 md:mt-12 md:flex-row md:gap-14">
            <div className="relative aspect-[9/11] w-full max-w-[260px] shrink-0 overflow-hidden bg-ink/5">
              {speaker.image ? (
                <Image
                  src={`/images/${speaker.image}`}
                  fill
                  alt={speaker.name}
                  className="duotone-photo object-cover"
                  sizes="260px"
                  quality={80}
                  priority
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-ink/10">
                  <span className="font-display text-5xl font-bold text-ink/40">
                    {initialsOf(speaker.name)}
                  </span>
                </div>
              )}
            </div>

            <div className="max-w-2xl">
              <h1 className="font-heading text-3xl font-medium leading-tight text-ink md:text-[40px]">
                {speaker.name}
              </h1>
              <p className="mt-2 text-sm text-ink/50 md:text-base">
                {speaker.designation}
              </p>

              {speaker.bio && (
                <div className="mt-6 space-y-4">
                  {speaker.bio.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="text-sm leading-relaxed text-ink/70 md:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {speaker.talk && (
                <div className="mt-8 border-t border-ink/15 pt-6">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-ink/40">
                    Session
                  </span>
                  <h2 className="mt-3 font-heading text-lg font-medium text-ink md:text-xl">
                    {speaker.talk.title}
                  </h2>
                  {speaker.talk.overview && (
                    <p className="mt-3 text-sm leading-relaxed text-ink/70 md:text-base">
                      {speaker.talk.overview}
                    </p>
                  )}
                </div>
              )}

              {socials.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {socials.map(({ key, Icon, label }) => (
                    <a
                      key={key}
                      href={speaker.socials![key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${speaker.name} on ${label}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink/70 transition hover:border-ink/50 hover:text-ink"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </Page>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: speakers.map(({ slug }) => ({ params: { slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const speaker = speakers.find((s) => s.slug === params?.slug);
  if (!speaker) return { notFound: true };
  return { props: { speaker } };
};
