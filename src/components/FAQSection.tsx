"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "किन मलाई यो discount offer मा हात हाल्नु पर्छ?",
      answer:
        "यो limited time offer हो जसले तपाईंलाई Google Workspace मा 20% सम्म बचत गर्न मद्दत गर्छ। यो offer सँग तपाईं professional email, cloud storage, र सबै collaboration tools पाउनुहुनेछ।",
    },
    {
      question:
        "Can I transfer my existing emails and data to Google Workspace?",
      answer:
        "हो, तपाईं आफ्नो existing emails, contacts, र calendars लाई सजिलै Google Workspace मा migrate गर्न सक्नुहुन्छ। हामी यसमा पूर्ण सहयोग प्रदान गर्छौं।",
    },
    {
      question: "How long does it take to setup Google Workspace?",
      answer:
        "Setup process सामान्यतया 24-48 घण्टा भित्र पूरा हुन्छ। हाम्रो technical team ले तपाईंलाई पूर्ण setup र training प्रदान गर्नेछ।",
    },
    {
      question:
        "अरू Business Suite management को तुलनामा Google Workspace किन?",
      answer:
        "Google Workspace ले industry-leading security, 99.9% uptime guarantee, र seamless integration प्रदान गर्छ। यो world भरका millions of businesses द्वारा trusted छ।",
    },
    {
      question: "What all can be done using Google Workspace tools?",
      answer:
        "तपाईं professional email management, video conferencing, document collaboration, cloud storage, calendar management, र धेरै अन्य productivity tools use गर्न सक्नुहुन्छ - सबै एकै platform मा।",
    },
  ];

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions (FAQs)
          </h2>
          <p className="text-lg text-gray-600">
            तपाईंका सबै प्रश्नहरूको जवाफ यहाँ छ
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
