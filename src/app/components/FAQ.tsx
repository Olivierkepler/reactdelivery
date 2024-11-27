const FAQ = () => {
    const faqData = [
        {
            question: "How can I track my delivery?",
            answer: "You can track your delivery in real time using the tracking link sent to your email or through the 'Track My Order' section on our website.",
        },
        {
            question: "What are your delivery charges?",
            answer: "Our delivery charges vary depending on the distance and package size. Please visit our pricing section for more details.",
        },
        {
            question: "What should I do if my package is delayed?",
            answer: "If your package is delayed, please contact our 24/7 support team for assistance, and we will resolve the issue promptly.",
        },
    ];

    return (
        <section className="bg-gradient-to-b from-blue-50 to-gray-100 py-16">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                    {faqData.map((faq, index) => (
                        <details
                            key={index}
                            className="group border border-gray-300 rounded-lg shadow-md bg-white transition-all hover:shadow-lg"
                        >
                            <summary className="flex justify-between items-center px-6 py-4 cursor-pointer focus:outline-none group-hover:bg-gray-50">
                                <span className="text-lg font-medium text-gray-800">
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
                            <div className="px-6 py-4 text-gray-600 leading-relaxed">
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
