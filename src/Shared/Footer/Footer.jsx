import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-8">
          <img
              className="h-[60px] w-[60px]"
              src="https://i.ibb.co/Db9KTKD/feminin-dance-logo-727263-7-removebg-preview.png"
              alt=""
            />
            <p className="text-xl font-semibold">
              Academy Of Dance
            </p>
            <p className="text-sm text-gray-300">
              Unleash your passion for dance!
            </p>
          </div>
          <div className="mb-8">
            <p className="text-xl font-semibold mb-2">
              Contact Us
            </p>
            <p className="text-sm text-gray-300">
              Email: info@academyofdance.com
              <br />
              Phone: (123) 456-7890
            </p>
          </div>
          <div className="mb-8">
            <p className="text-xl font-semibold mb-2">
              Address
            </p>
            <p className="text-sm text-gray-300">
              1234 Dance Avenue,
              <br />
              Cityville, State 12345,
              <br />
              United States
            </p>
          </div>
          <div className="mb-8">
            <p className="text-xl font-semibold mb-2">
              Follow Us
            </p>
            <div className="flex space-x-4 text-3xl">
              <a href="#">
               <h3>
                <FaFacebook/>
               </h3>
              </a>
              <a href="#">
              <h3>
                <FaInstagram/>
               </h3>
              </a>
              <a href="#">
              <h1>
                <FaLinkedin/>
               </h1>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl font-semibold mb-2 text-gray-300">
            Join our Newsletter
          </p>
          <p className="text-sm text-gray-300">
            Subscribe to our newsletter to receive the latest updates, promotions, and dance tips directly in your inbox!
          </p>
          <form className="mt-4 flex items-center justify-center">
            <input
              className="px-4 py-2 rounded-l-full focus:outline-none text-gray-800"
              type="email"
              placeholder="Enter your email"
            />
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-r-full">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="bg-gray-700 py-6">
        <div className="container mx-auto text-center text-gray-300">
          <p className="text-base">
            © {new Date().getFullYear()} Academy of Dance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
