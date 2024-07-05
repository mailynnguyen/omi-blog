import Polaroid from "./Polaroid";
import { polaroids } from "@/data/home/polaroids.js";

const Polaroids = () => {
    return (
        <div className="flex w-fit mx-auto">
            {polaroids.map((polaroid, index) => (
                <Polaroid 
                    key={index} 
                    image={polaroid.name} 
                    rotateDirection={index % 2 === 0 ? "-" : ""}
                    text={polaroid.text}
                />
            ))}
        </div>
    )
}

export default Polaroids;