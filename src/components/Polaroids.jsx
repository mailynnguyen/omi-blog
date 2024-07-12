"use client";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Polaroid from "./Polaroid";
import { polaroids } from "@/data/home/polaroids.js";
import Button from "@/components/Button.jsx";
import { TbChevronCompactLeft, TbChevronCompactRight } from "react-icons/tb";
import useView from "@/components/useView.jsx";

const Polaroids = () => {
    const [inView, ref] = useView();

    const isMobile = useMediaQuery({ query: '(max-width: 769px)' })
    const [curr, setCurr] = useState(0)
    const [rightAnimation, setRightAnimation] = useState(false)
    const [leftAnimation, setLeftAnimation] = useState(false)

    const handleBack = () => {
        setCurr(curr === 0 ? polaroids.length - 1 : curr - 1)
        setLeftAnimation(true)
        setTimeout(() => {
            setLeftAnimation(false);
        }, 300)
    }

    const handleNext = () => {
        setCurr(curr === polaroids.length - 1 ? 0 : curr + 1)
        setRightAnimation(true)
        setTimeout(() => {
            setRightAnimation(false);
        }, 300)
    }

    return (
        <div ref={ref} className={`overflow-hidden pb-[2%]`}> 
            {isMobile ? (
                <div  className="relative mt-[6%] flex mb-[10%]">
                    {polaroids.map((polaroid, index) => (
                        <div className="transition ease-in-out duration-500" 
                        style={{ transform: `translateX(-${curr * 100}%)` }}
                        key={index}>
                        <Polaroid 
                            
                            image={polaroid.name} 
                            text={polaroid.text}
                        />
                        </div>
                    ))}
                    <div className="absolute w-full h-full flex justify-between">
                        <div onClick={handleBack} className={`w-[16%] flex justify-center items-center`}>
                            <TbChevronCompactLeft className={`${leftAnimation && "animate-scale"}`} color="black" size={86} />
                        </div>
                        <div onClick={handleNext} className="w-[16%] flex justify-center items-center">
                            <TbChevronCompactRight className={`${rightAnimation && "animate-scale"}`} color="black" size={86} />
                        </div>
                    </div>
                </div>
            ) : (
                <div ref={ref} className={`${inView && "lg:animate-fade-down lg:animate-delay-500 lg:animate-duration-[1500ms]"} mt-[4%] mb-[6%] xl:flex grid grid-cols-2 xl:justify-center`}>
                    {polaroids.map((polaroid, index) => (
                        <div key={index} className={`${index % 2 === 0 && "justify-self-end"}`}>
                            <Polaroid 
                                image={polaroid.name} 
                                text={polaroid.text}
                            />
                        </div>
                    ))}
                </div>
            )}
            <Button ref={ref} text="See More" className={`${inView && "animate-fade-right animate-duration-500 animate-delay-500 animate-ease-in"} mt-[5%] w-full flex justify-center`} />
        </div>
    )
}

export default Polaroids;