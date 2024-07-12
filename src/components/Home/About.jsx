import Image from "next/image";
import Title from "@/components/Title.jsx";
import ModelOmiImg from "@/../public/images/model-omi.webp";

const About = () => {
    

    return (
        <div className="flex flex-col lg:flex-row text-center lg:justify-evenly items-center px-[8%] my-[8%]">
            <div className="lg:w-[40%] w-[90%] mb-[10%] lg:mb-[0%]">
                <Title text="About Me" fontSize="text-2xl" border="border-b-2" margin="mb-[8%]" />
                <p className="mb-[4%] text-xl">Hello. my name is Omi Madugula. I like to play with my friends (human friends), not dogs hmp. I'm six years old and am a morkie (malteze-yorkie). Anyways, I like long walks, car rides, and sleeping.</p>
                <p className="mb-[2%]">I also like cheese. I also only know two tricks: how to shake paws and sit. But you have to give me treats tho, or else idk how to do them. hehe. I like playing tug-o-war and my favorite toy is my LIFE-SIZE kangaroo.</p>
                <p className="">Anyways, that's enough about me. Enjoy my pictures! hehe</p>
            </div>
            <Image src={ModelOmiImg} alt="model-omi-img"  height={512}  />
        </div>
    )
}

export default About;