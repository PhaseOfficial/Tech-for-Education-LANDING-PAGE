import React from 'react'
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { MdDesignServices } from "react-icons/md";
import { FaBrain } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { GiRollingDiceCup } from "react-icons/gi";
import { FcCollaboration } from "react-icons/fc";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { FaDatabase } from "react-icons/fa";
import { FaPersonChalkboard } from "react-icons/fa6";


const Exploreprod = () => {
  return (
    
    <div className="relative flex flex-col bg-background  md:p-12 md:pb-20 sd:p-8">
    
    <h1 className="text-blue-800 text-2xl font-bold mb-10 ">Key LMS features</h1>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div className="flex flex-col items-center">
      <FaPersonChalkboard className='text-5xl'/>
        <span className="mt-2 text-muted-foreground">Personalised learning</span>
      </div>
      <div className="flex flex-col items-center">
      <BsFileEarmarkBarGraph className='text-5xl'/>
        <span className="mt-2 text-muted-foreground">Analytics</span>
      </div>
      <div className="flex flex-col items-center">
      <FaBrain className='text-5xl'/>
        <span className="mt-2 text-muted-foreground">AI Powered learning tools</span>
      </div>
      <div className="flex flex-col items-center">
      <FaDesktop className='text-5xl'/>
        <span className="mt-2 text-muted-foreground">User Friendly Applications</span>
      </div>
      
    </div>
    <hr className="border-t-2 border-black my-6 mt-10" />
    {/* Company Description */}
    <section className="mb-10">
        <p className="text-lg text-gray-800">
          Tech4Education is an educational technology research and deployment company dedicated to transforming learning experiences through innovation and data-driven solutions. It operates as a Design and Innovation Lab, specializing in personalized, AI-powered learning to enhance student outcomes and streamline teaching processes.
        </p>
      </section>
    {/* <BeholdWidget /> */}
    <h2 className="text-blue-800 font-bold mb-4 text-2xl mt-20">Explore More</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-card rounded-lg shadow-lg overflow-hidden flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
                    <FaDatabase className='text-9xl' />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">Learning Analytics</h3>
                        <p className="text-muted-foreground">
                            Get insights on your learning progress  to make informed decisions.
                        </p>
                        <a
                            href="#"
                            className="mt-2 inline-block bg-secondary text-secondary-foreground hover:bg-secondary/80 py-2 px-4 rounded text-green-600"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
                <div className="bg-card rounded-lg shadow-lg overflow-hidden flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
                    <FaCartShopping className='text-9xl' />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">Full Package</h3>
                        <p className="text-muted-foreground">
                            Get the standard package that includes all the features you need.
                        </p>
                        <a
                            href="#"
                            className="mt-2 text-green-600 inline-block bg-secondary text-secondary-foreground hover:bg-secondary/80 py-2 px-4 rounded"
                        >
                            View Offer
                        </a>
                    </div>
                </div>
                <div className="bg-card rounded-lg shadow-lg overflow-hidden flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
                    <LiaPeopleCarrySolid className='text-9xl' />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">Collaborate With Us</h3>
                        <p className="text-muted-foreground">
                            Let us work together to create software solutions that meet your academic needs.
                        </p>
                        <a
                            href="#"
                            className="mt-2 text-green-600 inline-block bg-secondary text-secondary-foreground hover:bg-secondary/80 py-2 px-4 rounded"
                        >
                            Collaborate with us.
                        </a>
                    </div>
                </div>
    </div>
  </div>
  )
}

export default Exploreprod