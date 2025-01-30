import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { motion } from 'framer-motion';
import Contactus from '../components/Contactus';
import PAmhonde from '../assets/pamhonde.png';
import Cvutete from '../assets/CEO.c0e639ed1d8243115325.jpg';
import Cchadiwa from '../assets/cchadiwa.png';
import gowani from '../assets/CCO.7f3445d8e7802a1556c5.jpg'
import { FaLinkedin } from "react-icons/fa";
import backgroundImage from '../assets/background.png'; 


const About = () => {
  return (
<div> <div>
    <Navbar />
    <div>
    <div className="bg-cover bg-center h-screen text-gray-800" >
      {/* Hero Section */}
      <section className="flex items-center text-gray-800 bg-cover relative flex-col md:pt-20 md:p-12 md:pb-20 sd:p-8"
  style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl text-5xl font-bold">About Us</h1>
          <p className="mt-4 text-lg md:text-xl">
            Here to deliver
          </p><p className="md:text-xl mb-4 font-black font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-blue-600 font-montserrat typewriter-text">Analytics Driven Learning</p>
        </div>
        
      </section>

      {/* Company Description */}
      <section className="py-12">
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-black p-6 rounded-lg shadow-lg my-8"
    >
      <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <p className="text-lg leading-relaxed text-center md:text-left">
          At <span className="text-blue-500">Tech4Education</span>, founded in 2023 by Winston, Craig, and 
          Arthur at the University of Zimbabwe, was born from a shared vision to<span className="text-blue-500"> revolutionize 
          learning through technology.</span> Seeing challenges in traditional education—limited resources, 
          lack of personalization, and inefficient teaching tools—they developed an <span className="text-blue-500">AI-powered Learning Management System (LMS) </span>
          to empower teachers, support students, and engage parents. Committed to innovation and equity, Tech4Education
           ensures every learner has access to <span className="text-blue-500">smart, 
          personalized, and data-driven education, shaping the future of intelligent learning.</span></p>
          <h2 className="text-3xl font-bold text-center mb-8 mt-8">Our Mission</h2>
          <p className="text-lg leading-relaxed text-center md:text-left">
          To develop intelligent educational technologies that empower students, teachers, and institutions with personalized learning, analytics-driven insights, and immersive digital tools for improved academic outcomes.
          </p>
          <h2 className="text-3xl font-bold text-center mb-8 mt-8">Our Vision</h2>
          <p className="text-lg leading-relaxed text-center md:text-left">
          To revolutionize education through AI-driven, innovative, and data-driven personalized learning experiences, ensuring equitable access to quality education for all.</p>
        </div>
    </motion.div>
      </section>

      {/* Team Section */}
<section className="py-12 bg-gray-100">
  <div className="container mx-auto px-6 md:px-12">
    <h2 className="text-3xl font-bold text-center mb-8">Meet the Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      
      {/* Team Member 2 */}
      <div className="text-center">
        <img
          src={Cvutete}
          alt="Team Member"
          className="mx-auto rounded-full h-32 mb-4"
        />
        <h3 className="text-xl font-bold">Winston Mambongo</h3>
        <p className="text-gray-600">Chief Executive Officer</p>
        <a
          href="https://www.linkedin.com/in/christopher-vutete-603b8166/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
      {/* Team Member 1 */}
      <div className="text-center">
        <img
          src={PAmhonde}
          alt="Team Member"
          className="mx-auto rounded-full h-32 mb-4"
        />
        <h3 className="text-xl font-bold">Arthur Mhonde</h3>
        <p className="text-gray-600">Cheif AI Scientist</p>
        <a
          href="https://www.linkedin.com/in/panashe-arthur-mhonde-2917b6261/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
      {/* Team Member 3 */}
      <div className="text-center">
        <img
          src={Cchadiwa}
          alt="Team Member"
          className="mx-auto rounded-full h-32 mb-4"
        />
        <h3 className="text-xl font-bold">Craig Chadiwa</h3>
        <p className="text-gray-600">Head of Tech</p>
        <a
          href="https://www.linkedin.com/in/craig-chadiwa-16485724a/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
       {/* Team Member 3 */}
       <div className="text-center">
        <img
          src={gowani}
          alt="Team Member"
          className="mx-auto rounded-full h-32 mb-4"
        />
        <h3 className="text-xl font-bold">Valentine Ganyaupfu</h3>
        <p className="text-gray-600">Chief Commercial Officer</p>
        <a
          href="https://www.linkedin.com/in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  </div>
</section>
      <Contactus className="mt-20"/>
   <Footer className="mb-10"/>
    </div>
    </div>
    
    </div>

    </div>
   
    
  )
}
export default About;