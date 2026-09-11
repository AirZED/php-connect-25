import Link from "next/link";
import Container from "./Container";

const SOCIAL_LINKS: { href: string; text: string }[] = [
  { href: "https://twitter.com/PHPTalks", text: "Twitter" },
  { href: "https://www.linkedin.com/company/phptalks/", text: "LinkedIn" },
  { href: "https://www.facebook.com/phptalks", text: "Facebook" },
  { href: "https://chat.whatsapp.com/BygvFuDVOCO3zEtfNRbkuc", text: "Whatsapp" },
];

export default function Footer() {
  return (
    <footer data-nav-theme="light" className="bg-paper">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-8">
        <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[14px] font-normal leading-none tracking-normal text-ink">
          {SOCIAL_LINKS.map((link) => (
            <Link
              key={link.text}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              className="hover:text-ink/60"
            >
              {link.text}
            </Link>
          ))}
        </nav>
        <span className="font-mono text-sm text-ink/70">
          &copy; {new Date().getFullYear()} PHPConnect Association. All rights
          reserved.
        </span>
      </Container>

      <Container>
        <h2 className="font-secondary text-[15vw] font-bold uppercase leading-none tracking-normal text-ink md:text-[9vw] lg:text-[130px]">
          PHPConnect &lsquo;26
        </h2>
      </Container>

      <div className="h-[12.5vw] max-h-[180px] w-full bg-[#EF8510]" />
    </footer>
  );
}
