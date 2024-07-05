import { carousel } from "@/data/home/carousel.js";
import Image from "next/image";

const Carousel = () => {
    return (
        <div className="relative flex overflow-hidden">
            <div className="flex animate-marquee">
                {carousel.map((image, index) => (
                    <div key={index} className="mx-8">
                        <Image
                            src={image}
                            alt="carousel-img"
                            className="min-w-[22rem] max-h-[28rem] object-cover"
                        />
                    </div>
                ))}
            </div>
            <div className="flex absolute animate-marquee-continuation">
                {carousel.map((image, index) => (
                        <div key={index} className="mx-8">
                            <Image
                                src={image}
                                alt="carousel-img"
                                className="min-w-[22rem] max-h-[28rem] object-cover"
                            />
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Carousel;

