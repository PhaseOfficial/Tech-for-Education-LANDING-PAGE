import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Footer Links */}
          <div className="mb-4 md:mb-0">            
            <Link to="/" className="text-gray-300 hover:text-white px-2">Home</Link>
            <Link to="/About" className="text-gray-300 hover:text-white px-2">About</Link>
            <Link to="/Services" className="text-gray-300 hover:text-white px-2">Services</Link>
            <Link to="/Contact" className="text-gray-300 hover:text-white px-2">Contact</Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://wa.me/message/LL4IB5RMLFQVP1" className="hover:text-white">
            <IoLogoWhatsapp className="w-6 h-6"/>

            </a>
            <a href="https://www.instagram.com/phase_rcs/profilecard/?igsh=MXFmYW8zMjZ5dDU5dw==" className="hover:text-white">
            <AiFillInstagram className="w-6 h-6"/>
            </a>
            <a href="https://www.facebook.com/share/14fdJfhYDH/?mibextid=LQQJ4d" className="hover:text-white">
            <FaFacebook className="w-6 h-6"/>
            </a>
            <a href="https://www.linkedin.com/company/red-cup-series/" className="hover:text-white">
            <FaLinkedin className="w-6 h-6"/>
            </a>
          </div>

          {/* Copyright */}
          <div>
            <p className="text-sm">&copy; 2025 Tech for Education. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
