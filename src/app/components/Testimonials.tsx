import React from 'react';
import Image from 'next/image';

interface Testimonial {
    id: number;
    text: string;
    name: string;
    title: string;
    image: string;
    rating: number;
}

const Testimonials: React.FC = () => {
    const testimonials: Testimonial[] = [
        {
            id: 1,
            text: "The delivery was seamless, and the customer support was exceptional. Highly recommended!",
            name: "Jane Doe",
            title: "Business Owner",
            image: "/images/man1.jpg",
            rating: 5,
        },
        {
            id: 2,
            text: "Amazing service! My fragile items arrived intact and on time. I'll definitely use ReactDelivery again.",
            name: "John Smith",
            title: "Freelancer",
            image: "/images/women.jpg",
            rating: 4,
        },
        {
            id: 3,
            text: "From start to finish, everything was perfect. Great communication and quick delivery!",
            name: "Emma Brown",
            title: "E-commerce Seller",
            image: "/images/woman1.jpeg",
            rating: 5,
        },
    ];

    const renderStars = (rating: number): JSX.Element[] => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${
                        i < rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.4 4.304a1 1 0 00.95.69h4.517c.969 0 1.371 1.24.588 1.81l-3.646 2.65a1 1 0 00-.364 1.118l1.4 4.304c.3.921-.755 1.688-1.539 1.118l-3.646-2.65a1 1 0 00-1.175 0l-3.646 2.65c-.784.57-1.838-.197-1.539-1.118l1.4-4.304a1 1 0 00-.364-1.118L2.06 9.731c-.783-.57-.38-1.81.588-1.81h4.517a1 1 0 00.95-.69l1.4-4.304z" />
                </svg>
            );
        }
        return stars;
    };

    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-6 lg:px-20">
                <h2 className="text-5xl font-bold text-center text-gray-800 mb-12">
                    Hear from Our Happy Clients
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white shadow-lg rounded-lg p-8"
                        >
                            <p className="text-lg text-gray-600 italic">
                                {testimonial.text}
                            </p>
                            <div className="mt-6 flex items-center">
                                <Image
                                    width={56}
                                    height={56}
                                    className="rounded-full border-2 border-blue-600"
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                />
                                <div className="ml-4">
                                    <h3 className="text-xl font-bold text-gray-800">
                                        {testimonial.name}
                                    </h3>
                                    <span className="text-sm text-gray-500">
                                        {testimonial.title}
                                    </span>
                                </div>
                            </div>
                            <div className="mt-4 flex">
                                {renderStars(testimonial.rating)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
