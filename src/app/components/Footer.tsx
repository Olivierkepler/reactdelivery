import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <p>Email: info@reactdelivery.com</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Address: 123 Delivery St, City, Country</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul>
                            {/* <li className="mb-2"><a href="/" className="hover:text-blue-400">Home</a></li> */}
                            <li className="mb-2"><a href="/deliveries" className="hover:text-blue-400">Track Delivery</a></li>
                            <li className="mb-2"><a href="/contact" className="hover:text-blue-400">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-blue-400">Twitter</a>
                            <a href="#" className="hover:text-blue-400">Facebook</a>
                            <a href="#" className="hover:text-blue-400">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center border-t border-gray-700 pt-8">
                    <p>&copy; {new Date().getFullYear()} ReactDelivery. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
