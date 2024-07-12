"use client";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import LandingImg from "@/../public/images/landing.webp";
import SpeechBubbleImg from "@/../public/images/speech-bubble.webp";
import useView from "@/components/useView.jsx";

const Landing = () => {
    const [inView, ref] = useView();

    const isXL = useMediaQuery({ query: '(min-width: 1280px)' })

    const [isHover, setIsHover] = useState(false);
    console.log(isXL)
    const handleMouseEnter = () => {
        setIsHover(true);
    }

    const handleMouseLeave = () => {
        setIsHover(false);
    }

    return (
        <div ref={ref} className="mx-auto w-full text-2xl relative">
            <Image src={LandingImg} alt="landing-img" className="relative h-[80vh] object-cover" />
            <div className="absolute h-[25%] bg-gradient-to-b to-omi-gray-100 from-transparent bottom-0 left-0 right-0 z-40"></div>
            <div  className="text-white absolute left-[6%] top-[10%]">
                <p className={`${inView && "animate-fade-down animate-duration-[1000ms]"} text-5xl mobile:text-6xl sm:text-7xl md:text-8xl font-bold mobile:leading-snug sm:leading-snug md:leading-snug`}>Hello, I&apos;m <span className="text-[#C19A6B]">Omi</span>!</p>
                <p className={`${inView && "animate-fade-right animate-duration-[800ms] animate-delay-500"} text-2xl mobile:text-3xl sm:text-4xl md:text-5xl font-medium leading-loose mobile:leading-loose sm:leading-loose md:leading-loose`}>and welcome to my page.</p>
                <p className={`${inView && "animate-fade-right animate-duration-[800ms] animate-delay-[800ms]"} text-xl md:text-3xl font-medium leading-snug md:leading-snug`}>here are pictures of me and my best dawgs :p</p>
                <p className={`${inView && "animate-fade-right animate-duration-[800ms] animate-delay-[1100ms]"} text-2xl md:text-4xl font-semibold leading-loose md:leading-loose`}>hope you enjoy, hehe</p>
            </div>
            {isXL && (
                <div className={`${inView && "animate-zoom"} bottom-[13%] left-[35%] w-[25%] -rotate-[10deg] h-auto absolute`}>
                    <div className="scale-x-[-1]">
                        <Image src={SpeechBubbleImg} alt="speech-bubble-img" className="transform scale-x-[-1]" />
                    </div>
                    <div className="font-fredoka text-center absolute top-[15%] w-[70%] ml-[8%]">
                        <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        {isHover 
                            ? "i like eggs, underwear, and humans! but not dogs, ruff >(" 
                            : "ruff ruff rufff ruf! ruuuf ruuuff! ruff ruf :p"}
                        </p>
                    </div>
                </div>
            )}
           
        </div>
    )
}

export default Landing;