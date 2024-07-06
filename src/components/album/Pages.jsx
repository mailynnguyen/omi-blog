"use client";
import React, { useState } from "react";
import { pages } from "@/data/album/pages";
import Title from "../Title.jsx";
import { TbChevronCompactLeft, TbChevronCompactRight } from "react-icons/tb";

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
            <div className="flex overflow-hidden relative">
                {pages.map((page, index) => (
                    <div 
                        key={index} 
                        className="grid transition ease-out duration-500"
                        style={{ transform: `translateX(-${curr * 100}%)` }}
                    >
                        <div className="justify-self-center mb-[4%]">
                            <Title text={page.caption} fontSize="text-4xl" border="border-b-2" />
                        </div>
                        {page.grid}
                    </div>
                ))}
                <div className="absolute w-full h-full flex justify-between">
                    <div onClick={handleBack} onMouseLeave={() => setLeftHover(false)} onMouseEnter={() => setLeftHover(true)} className="w-[12%] flex justify-center items-center hover:cursor-pointer">
                        <TbChevronCompactLeft className={` transition ${leftHover && "scale-125" }`} color="white" size={72} />
                    </div>
                    <div onClick={handleNext} onMouseLeave={() => setRightHover(false)} onMouseEnter={() => setRightHover(true)} className="w-[12%] flex justify-center items-center hover:cursor-pointer">
                        <TbChevronCompactRight className={` transition ${rightHover && "scale-125"}`}color="white" size={72} />
                    </div>
                </div>
            </div>
    )
}

export default Pages;