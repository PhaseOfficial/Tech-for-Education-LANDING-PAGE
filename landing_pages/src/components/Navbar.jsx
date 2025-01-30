import { useState } from 'react';
import mysite from '../assets/bluelogo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 w-full bg-opacity-40 text-primary py-4 px-6 backdrop-blur-md z-10">
            <div className="container mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold text-blue"> {/* Change text-red-500 to your desired color */}
                    <img src={mysite} alt='logo' className="w-40" />
                </h1>

                {/* Desktop Menu */}
                
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="hover:text-blue-500">Home</Link>
                    <Link to="/Services" className="hover:text-blue-500">Services</Link>
                    <Link to="/About" className="hover:text-blue-500">About</Link>
                    <Link to="/Contact" className="hover:text-blue-500">Contact</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex items-center px-3 py-2 border rounded text-black border-red hover:text-gray-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {/* Icon for mobile menu (hamburger) */}
                    <GiHamburgerMenu />
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                
                <div className="md:hidden bg-navigation bg-opacity-60 text-primary mt-2 py-4 rounded-lg shadow-lg">
                    <Link to="/" className="block px-4 py-2 hover:bg-white/70">Home</Link>
                    <Link to="/Services" className="block px-4 py-2 hover:bg-white/70">Services</Link>
                    <Link to="/About" className="block px-4 py-2 hover:bg-white/70">About</Link>
                    <Link to="/Contact" className="block px-4 py-2 hover:bg-white/70">Contact</Link>
                </div>
            )}
        </nav>
    );
}
