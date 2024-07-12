"use client";
import React from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

const Polaroid = ({ image, text }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 769px)' })

    return (
        <div>
            {isMobile ? (
                <div className="w-screen flex justify-center ">
                    <div className="-rotate-[7deg] transition ease-out duration-400 hover:scale-110 shadow-lg w-80 h-[26rem] bg-white px-6 py-6">
                        <Image src={image} alt="polaroid-img" className="h-[80%] object-cover"/>
                        <div className="h-[90px] flex items-center">
                            <p className="font-permanent-marker text-2xl w-full text-center">{text}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="transition duration-400 md:mx-4 -rotate-[7deg] hover:scale-110 shadow-lg w-80 h-[26rem] bg-white px-6 py-6">
                    <Image src={image} alt="polaroid-img" className="h-[80%] object-cover"/>
                    <div className="h-[90px] flex items-center">
                        <p className="font-permanent-marker text-2xl w-full text-center">{text}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Polaroid;