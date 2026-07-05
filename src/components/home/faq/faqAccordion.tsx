"use client";

import { FAQItem } from "./faqItem";
import { faqs } from "./data";

export const FAQAccordion = () => {
  return (
    <div className="flex flex-col gap-5">
      {faqs.map((faq) => (
        <FAQItem key={faq.id} faq={faq} />
      ))}
    </div>
  );
};
