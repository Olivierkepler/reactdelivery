const Features = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
                    Our Key Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-white shadow-md rounded-md text-center hover:bg-blue-50 transition-colors duration-300">
                        <div className="mb-4">
                            <svg
                                className="w-12 h-12 text-blue-600 mx-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 0C8.13401 0 5 3.13401 5 7V11H3V15H5V23H9V15H15V23H19V15H21V11H19V7C19 3.13401 15.866 0 12 0ZM7 9V7C7 4.794 8.794 3 11 3C13.206 3 15 4.794 15 7V9H7ZM17 11V13H7V11H17Z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-gray-800">
                            Secure Payments
                        </h3>
                        <p className="text-gray-600">
                            Enjoy safe and reliable payment options for all your deliveries.
                        </p>
                    </div>
                    <div className="p-6 bg-white shadow-md rounded-md text-center hover:bg-blue-50 transition-colors duration-300">
                        <div className="mb-4">
                            <svg
                                className="w-12 h-12 text-blue-600 mx-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 2C9.243 2 7 4.243 7 7V9H5V17H7V21H9V17H15V21H17V17H19V9H17V7C17 4.243 14.757 2 12 2ZM9 7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V9H9V7ZM9 11H15V15H9V11Z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-gray-800">
                            Real-Time Tracking
                        </h3>
                        <p className="text-gray-600">
                            Track your package in real time with our advanced tools.
                        </p>
                    </div>
                    <div className="p-6 bg-white shadow-md rounded-md text-center hover:bg-blue-50 transition-colors duration-300">
                        <div className="mb-4">
                            <svg
                                className="w-12 h-12 text-blue-600 mx-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M16.5 3C17.8807 3 19 4.11929 19 5.5C19 6.88071 17.8807 8 16.5 8C15.1193 8 14 6.88071 14 5.5C14 4.11929 15.1193 3 16.5 3ZM7.5 8C6.11929 8 5 6.88071 5 5.5C5 4.11929 6.11929 3 7.5 3C8.88071 3 10 4.11929 10 5.5C10 6.88071 8.88071 8 7.5 8ZM6 13V11H18V13H6ZM6 17V15H18V17H6ZM5 21H19C20.1046 21 21 20.1046 21 19V9H3V19C3 20.1046 3.89543 21 5 21Z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-gray-800">
                            Fast Delivery
                        </h3>
                        <p className="text-gray-600">
                            Get your packages delivered quickly and efficiently.
                        </p>
                    </div>
                    {/* <div className="p-6 bg-white shadow-md rounded-md text-center hover:bg-blue-50 transition-colors duration-300">
                        <div className="mb-4">
                            <svg
                                className="w-12 h-12 text-blue-600 mx-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 22C10.8954 22 10 21.1046 10 20C10 18.8954 10.8954 18 12 18C13.1046 18 14 18.8954 14 20C14 21.1046 13.1046 22 12 22ZM12 2C10.8954 2 10 2.89543 10 4V14C10 15.1046 10.8954 16 12 16C13.1046 16 14 15.1046 14 14V4C14 2.89543 13.1046 2 12 2Z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-gray-800">
                            Customer Support
                        </h3>
                        <p className="text-gray-600">
                            Our team is here to assist you 24/7 for any delivery needs.
                        </p>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Features;
