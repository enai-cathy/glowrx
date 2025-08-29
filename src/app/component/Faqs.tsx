"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "How does your service work?",
    answer:
      "Our service connects you with licensed providers who can prescribe medications and provide guidance online.",
  },
  {
    question: "Is my information private?",
    answer:
      "Absolutely. All your information is encrypted and confidential. We follow HIPAA compliance standards.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept all major credit cards and select digital payment options.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-2xl mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-6 text-gray-900 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="text-xl  border-b border-gray-200 "
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 hover:bg-gray-50 transition"
            >
              {faq.question}
              <span
                className={`font-bold rounded-full bg-gray-100 px-2 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 pb-4 text-gray-700"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
