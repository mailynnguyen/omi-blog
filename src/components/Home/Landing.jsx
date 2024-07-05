"use client";
import React, { useState } from "react";
import Image from "next/image";
import LandingImg from "@/../public/images/landing.webp";
import SpeechBubbleImg from "@/../public/images/speech-bubble.webp";

const Landing = () => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    }

    const handleMouseLeave = () => {
        setIsHover(false);
    }

    return (
        <div className="flex w-full justify-center mt-[4%] font-fredoka text-2xl relative text-center">
            <Image src={LandingImg} alt="landing-img" className="h-auto w-[80%]" />
            <div className="absolute h-auto w-[25%] bottom-[16%] left-[14%]">
                <Image src={SpeechBubbleImg} alt="speech-bubble-img" />
                <div className="absolute top-[11%] w-[60%] ml-[12%]">
                    <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        {isHover 
                        ? "Hi! I'm Omi and welcome to my page! Here I share my life to you. :p" 
                        : "ruff ruff rufff ruf! ruuuf ruuuff! ruff ruf :p"}
                    </p>
                </div>        
            </div>
            <div className="bottom-[10%] right-[14%] w-[25%] h-auto absolute">
                <Image src={SpeechBubbleImg} alt="speech-bubble-img" className="transform scale-x-[-1]" />
                <div className="absolute top-[10%] w-[60%] ml-[24%]">
                    <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        {isHover 
                        ? "And these are some of my lovely humans <3<3. Anyways I hope you enjoy!"
                        : "ruff ruuuf rufff <3<3. rufruf ruffruf rufff!"}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Landing;