"use client";
import React, { useState } from "react";
import { pages } from "@/data/album/pages.js";
import { TbChevronCompactLeft, TbChevronCompactRight } from "react-icons/tb";
import Circle from "./Circle";
import Grid from "./Grid";

const Pages = () => {
    const [curr, setCurr] = useState(0)
    const [rightHover, setRightHover] = useState(false)
    const [leftHover, setLeftHover] = useState(false)

    const handleBack = () => {
        setCurr(curr === 0 ? pages.length - 1 : curr - 1)
    }

    const handleNext = () => {
        setCurr(curr === pages.length - 1 ? 0 : curr + 1)
        
    }

    return (
        <div className="overflow-hidden flex flex-col">
            <div className="flex flex-row mx-auto mb-[3%]">
                {pages.map((_, index) => (
                    <div key={index} onClick={() => setCurr(index)} >
                        <Circle bgColor={curr === index && "bg-omi-gray-200"}/>
                    </div>
                ))}
            </div>
            <div className="flex relative">
                {pages.map((page, index) => (
                    <div 
                        key={index} 
                        className="transition ease-in-out duration-500"
                        style={{ transform: `translateX(-${curr * 100}%)` }}
                    >
                        <Grid images={page} />
                    </div>
                ))}
                <div className="absolute w-full h-full flex justify-between">
                    <div onClick={handleBack} onMouseLeave={() => setLeftHover(false)} onMouseEnter={() => setLeftHover(true)} className="w-[12%] flex justify-center items-center hover:cursor-pointer">
                        <TbChevronCompactLeft className={` transition ease-in-out ${leftHover && "scale-125" }`} color="gray" size={72} />
                    </div>
                    <div onClick={handleNext} onMouseLeave={() => setRightHover(false)} onMouseEnter={() => setRightHover(true)} className="w-[12%] flex justify-center items-center hover:cursor-pointer">
                        <TbChevronCompactRight className={` transition ease-in-out ${rightHover && "scale-125"}`} color="gray" size={72} />
                    </div>
                </div>
            </div>
                
        </div>
    )
}

export default Pages;