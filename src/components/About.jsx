"use client";
import Image from "next/image";
import Title from "@/components/Title.jsx";
import ModelOmiImg from "@/../public/images/model-omi.webp";
import useView from "@/components/useView.jsx";

const About = () => {
    const [inView, ref] = useView();

    return (
        <div ref={ref} className="flex flex-col lg:flex-row text-center lg:text-left lg:justify-evenly items-center px-[8%] my-[8%]">
            <div className={`${inView && "animate-fade-right animate-delay-500 animate-duration-[1500ms]"} lg:w-[40%] w-[90%] mb-[10%] lg:mb-[0%]`}>
                <Title text="About Me" fontSize="text-2xl" border="border-b-2" margin={`mb-[8%] lg:ml-[3%] ${inView && "lg:animate-fade-down lg:animate-duration-[800ms]"}`} />
                <p className={`${inView && "lg:animate-fade-right lg:animate-duration-[800ms] lg:animate-delay-500"} mb-[4%] text-xl`}>Hello. my name is Omi Madugula. I like to play with my friends (human friends), not dogs, hmp. I&apos;m six years old and am a morkie (malteze-yorkie). Anyways, I like long walks, car rides, and sleeping.</p>
                <p className={`${inView && "lg:animate-fade-right lg:animate-duration-[800ms] lg:animate-delay-[800ms]"} mb-[2%]`}>I also like cheese. I also only know two tricks: how to shake paws and sit. But you have to give me treats tho, or else idk how to do them. hehe. I like playing tug-o-war and my favorite toy is my LIFE-SIZE kangaroo.</p>
                <p className={`${inView && "lg:animate-fade-right lg:animate-duration-[800ms] lg:animate-delay-[1100ms]"}`}>Anyways, that&apos;s enough about me. Enjoy my pictures! hehe</p>
            </div>
            <Image className={`${inView && "animate-fade-left animate-delay-500 animate-duration-[1500ms]"}`} src={ModelOmiImg} alt="model-omi-img" height={512}  />
        </div>
    )
}

export default About;