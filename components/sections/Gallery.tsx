import Image from "next/image";
import Link from "next/link";
import Container from "../layout/Container";
import Reveal from "../animation/Reveal";
import { RegisterButton } from "./Hero";
import { galleryGroups } from "@/data";
import { cn } from "@/lib/utils";

export default function Gallery() {
  return (
    <section data-nav-theme="light" className="bg-paper py-16 md:py-24">
      <Container>
        <Reveal width="100%">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <h2 className="font-heading text-2xl uppercase tracking-normal text-ink md:text-4xl">
              Gallery
            </h2>
            <RegisterButton />
          </div>
        </Reveal>

        <div className="mt-10 md:mt-14">
          {galleryGroups.map((group, index) => (
            <div key={group.edition}>
              {index > 0 && <Divider />}
              <Reveal width="100%">
                <div className="flex flex-col gap-5 py-8 md:flex-row md:items-center md:gap-8">
                  <span className="font-secondary text-lg font-normal uppercase leading-[1.8] tracking-normal align-middle text-ink/50 md:w-[170px] md:shrink-0">
                    {group.edition}
                  </span>

                  <p className="font-secondary text-lg font-normal leading-none tracking-normal text-ink md:w-[360px] md:shrink-0 md:text-xl">
                    {group.caption}
                  </p>

                  <Link
                    href={group.albumUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-ink/60 transition-colors hover:text-ink md:w-[80px] md:shrink-0"
                  >
                    viewAll()
                  </Link>

                  <div className="flex flex-1 gap-3">
                    {group.images.map((image, i) => (
                      <div
                        key={i}
                        className={cn(
                          "relative h-[150px] shrink-0 overflow-hidden bg-ink/10",
                          i < 2 ? "w-[210px]" : "w-[70px]"
                        )}
                      >
                        <Image
                          src={`/images/${image}`}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
          <Divider />
        </div>
      </Container>
    </section>
  );
}

const Divider = () => (
  <div
    aria-hidden
    className="h-[3px] w-full bg-[repeating-linear-gradient(to_right,#0A0A0D_0px,#0A0A0D_20px,transparent_20px,transparent_34px)] opacity-25"
  />
);
