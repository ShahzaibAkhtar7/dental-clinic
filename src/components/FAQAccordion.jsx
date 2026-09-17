import { useState } from "react";
import { ChevronDown } from "lucide-react";
import faqs from "../data/faqs";
import SectionHeading from "./SectionHeading";

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-line">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display text-base font-medium text-ink sm:text-lg">
          {faq.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-coral transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl text-sm leading-relaxed text-ink/65">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQAccordion() {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null);

  return (
    <section className="bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading eyebrow="Good to know" title="Frequently asked questions" align="center" />

        <div className="mt-10">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
