import Image from "next/image";


const Polaroid = ({image, rotateDirection, text}) => {
    return (
        <div className={`shadow-lg ${rotateDirection}rotate-[20deg] w-80 h-[26rem] bg-white px-6 pt-6`}>
            <Image src={image} alt="polaroid-img" className="h-[76%] object-cover"/>
            <p className="font-permanent-marker mt-[5%] text-2xl w-full text-center">{text}</p>
        </div>
    )
}

export default Polaroid;