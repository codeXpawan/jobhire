'use client'; // This is a Client Component

import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <div
        className="py-4 sm:py-6 flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-base sm:text-lg font-medium pr-2">{question}</h3>
        <span className="text-lg sm:text-[18px] flex-shrink-0">{isOpen ? '-' : '+'}</span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-700 text-sm sm:text-base md:text-[18px] pb-4 sm:pb-6">{answer}</p>
      </div>
    </div>
  );
};

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer web design, development, and optimization services.',
    },
    {
      question: 'How much do your services cost?',
      answer: 'Our pricing varies based on project requirements. Contact us for a quote.',
    },
    {
      question: 'How long does a typical project take?',
      answer: "Project timelines depend on complexity and scope. We'll provide an estimate after consultation.",
    },
    {
      question: 'What tech Stack this project is using ?',
      answer: 'We are using Next.js, React, Tailwind CSS, and TypeScript for this project.',
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 mt-10 sm:mt-20 md:mt-30">
      <h1 className="text-2xl sm:text-3xl md:text-[42px] font-bold mb-8 sm:mb-12 md:mb-20 text-center sm:text-left">
        FREQUENTLY ASKED QUESTIONS (FAQS)
      </h1>
      <div className="border-t border-gray-200">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
