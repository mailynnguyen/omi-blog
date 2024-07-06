import React from "react";
import Polaroid from "./Polaroid";
import { polaroids } from "@/data/home/polaroids.js";
import Button from "@/components/Button.jsx";

const Polaroids = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex w-fit mx-auto">
                {polaroids.map((polaroid, index) => (
                    <Polaroid 
                        key={index} 
                        image={polaroid.name} 
                        text={polaroid.text}
                    />
                ))}
            </div>
            <Button text="See More" className="mt-[5%] flex justify-center" />
        </div>
        
    )
}

export default Polaroids;