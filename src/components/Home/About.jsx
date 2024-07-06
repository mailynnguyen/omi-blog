import Image from "next/image";
import Title from "@/components/Title.jsx";
import ModelOmiImg from "@/../public/images/model-omi.webp";

const About = () => {
    return (
        <div className="flex flex-row justify-evenly items-center px-[8%] my-[8%]">
            <div className="w-[40%]">
                <Title text="About Me" fontSize="text-2xl" border="border-b-2" margin="mb-[8%]" />
                <p className="mb-[2%] text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum, augue et dictum laoreet, metus ligula fringilla massa, vel faucibus ipsum sapien in purus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum, augue et dictum laoreet, metus ligula fringilla massa, vel faucibus ipsum sapien in purus.</p>
            </div>
            <Image src={ModelOmiImg} alt="model-omi-img"  height={512}  />
        </div>
    )
}

export default About;