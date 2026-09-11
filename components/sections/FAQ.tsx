import { ReactNode, useState } from "react";
import Container from "../layout/Container";
import Reveal from "../animation/Reveal";
import { PlusIcon } from "../ui/Icons";
import { faqs } from "@/data";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section data-nav-theme="light" className="bg-paper py-16 md:py-24">
      <Container className="mx-auto max-w-3xl px-6">
        <Reveal>
          <h2 className="font-primary text-2xl font-normal uppercase leading-[1.2] tracking-normal text-ink md:text-4xl">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="mt-10 md:mt-14">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={index} width="100%">
                <div className="border-b border-ink/15">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-secondary text-lg font-normal leading-none tracking-normal text-ink md:text-xl">
                      {faq.question}
                    </span>
                    <PlusIcon
                      className={cn(
                        "shrink-0 text-ink transition-transform duration-300",
                        isOpen && "rotate-45"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid overflow-hidden transition-all duration-300",
                      isOpen
                        ? "grid-rows-[1fr] pb-5 opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl text-sm text-ink/60 md:text-base">
                        {renderAnswer(faq.answer)}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

// Answers may embed links as [label](href); everything else is plain text.
const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

const renderAnswer = (answer: string) => {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  LINK_PATTERN.lastIndex = 0;
  while ((match = LINK_PATTERN.exec(answer)) !== null) {
    const [full, label, href] = match;
    if (match.index > lastIndex) parts.push(answer.slice(lastIndex, match.index));
    parts.push(
      <a
        key={match.index}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-accent underline underline-offset-2 transition hover:text-accent-dark"
      >
        {label}
      </a>
    );
    lastIndex = match.index + full.length;
  }

  if (lastIndex < answer.length) parts.push(answer.slice(lastIndex));
  return parts;
};
