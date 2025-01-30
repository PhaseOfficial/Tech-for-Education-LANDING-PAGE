import React from 'react';
import whiteAndBlueImage from '../assets/whitenblue.png';

export default function HeroSection() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen bg-background text-primary pb-12">
            <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 text-center">
                <div className="flex justify-between mb-4">
                    <button className="px-8 py-2 mb-10 font-bold text-white rounded-lg bg-gradient-to-r from-black to-blue-500 hover:from-blue-500 hover:to-black">
                        Get Demo &rarr;
                    </button>
                    <button className="px-8 py-2 font-bold mb-10 text-white rounded-lg bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600">
                        Log In &rarr;
                    </button>
                    </div>
              
                <p className="text-2xl sm:text-3xl md:text-4xl mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-blue-600 font-montserrat typewriter-text">
                    Tech for Education
                </p>
            </div>

            <div className="relative w-full gif-container md:w-1/2 flex justify-center">
                <img
                    src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjBtNmh5OXhmcDM4bHg2NnN5YWZ2anZpanI1NWJidnJvbWt2cXU3aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3owyp2SViuDIGh8YoM/giphy.gif"
                    alt="Tech for Education GIF"
                    className="w-full h-full object-cover"
                />
               
            </div>
            <p className="text-xl sm:text-2xl md:text-3xl mt-10 text-blue-600 font-semibold text-center">
                    The Hub for Personalised Learning
                </p>
        </section>
    );
}