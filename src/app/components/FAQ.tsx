'use client';

import React from 'react';

const FAQ = () => {
    const handleSearch = () => {
        const searchQuery = (
            document.getElementById('searchInput') as HTMLInputElement
        )?.value.toLowerCase();

        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach((item) => {
            const question = item
                .querySelector('.faq-question')
                ?.textContent?.toLowerCase();
            const answer = item
                .querySelector('.faq-answer')
                ?.textContent?.toLowerCase();

            if (
                question?.includes(searchQuery) ||
                answer?.includes(searchQuery)
            ) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    };

    const faqData = [
        { question: 'How can I track my delivery?', answer: '...' },
        { question: 'What are your delivery charges?', answer: '...' },
        { question: 'What should I do if my package is delayed?', answer: '...' },
        { question: 'How can I track my delivery?', answer: '...' },
        { question: 'What are your delivery charges?', answer: '...' },
        { question: 'What should I do if my package is delayed?', answer: '...' },
        
        { question: 'Can I change the delivery address?', answer: '...' },
    ];

    return (
        <section className="bg-gradient-to-b from-blue-50 to-gray-100 py-16">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">
                    Frequently Asked Questions
                </h2>
                {/* Search Bar */}
                <div className="mb-8">
                    <input
                        type="text"
                        id="searchInput"
                        placeholder="Search for a question..."
                        className="w-full md:w-2/3 lg:w-1/2 mx-auto block border border-gray-300 rounded-lg shadow-sm px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        onInput={handleSearch}
                    />
                </div>
                {/* FAQ Items */}
                <div
                    className="space-y-6 max-h-[400px] overflow-y-auto hide-scrollbar"
                >
                    {faqData.map((faq, index) => (
                        <details
                            key={index}
                            className="faq-item group border border-gray-300 rounded-lg shadow-md bg-white transition-all hover:shadow-lg"
                        >
                            <summary className="flex justify-between items-center px-6 py-4 cursor-pointer focus:outline-none group-hover:bg-gray-50">
                                <span className="faq-question text-lg font-medium text-gray-800">
                                    {faq.question}
                                </span>
                                <svg
                                    className="w-6 h-6 text-blue-600 group-open:rotate-180 transition-transform duration-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </summary>
                            <div className="faq-answer overflow-hidden transition-max-height duration-300 max-h-0 group-open:max-h-screen px-6 py-4 text-gray-600 leading-relaxed">
                                {faq.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
