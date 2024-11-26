import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"; // Import icons

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Delivery App</h3>
            <p className="text-lg mb-4">
              We provide fast, reliable, and cost-effective delivery services to meet your needs. Our goal is to ensure timely and safe deliveries for businesses and individuals alike.
            </p>
            <p>&copy; 2024 My Delivery App. All Rights Reserved.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/home" className="hover:text-blue-500">Home</a></li>
              <li><a href="/services" className="hover:text-blue-500">Services</a></li>
              <li><a href="/about" className="hover:text-blue-500">About Us</a></li>
              <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
              <li><a href="/terms" className="hover:text-blue-500">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-blue-500">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="text-lg mb-4">Have questions? Get in touch with us:</p>
            <ul className="space-y-2">
              <li>Email: <a href="mailto:support@mydeliveryapp.com" className="hover:text-blue-500">support@mydeliveryapp.com</a></li>
              <li>Phone: <a href="tel:+1234567890" className="hover:text-blue-500">+1 (234) 567-890</a></li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-500"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-500"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-500"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-500"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </div>

     
    </footer>
  );
}
