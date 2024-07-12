"use client";
import Title from "@/components/Title.jsx";
import Pages from "@/components/album/Pages.jsx";
import SectionDivider from "@/components/SectionDivider";
import useView from "@/components/useView.jsx";

const Album = () => {
    const [inView, ref] = useView();

    return (
        <div className="grid">
            <div ref={ref} className={`${inView && "animate-fade-down animate-duration-1000"} justify-self-center mt-[8%]`}>
                <Title text="Omi's Adventures" fontSize="text-6xl md:text-7xl" border="border-b-4" />
            </div>
            <SectionDivider />
            <Pages />
            <SectionDivider />
            
        </div>
    )
}

export default Album;