import Title from "@/components/Title.jsx";
import Pages from "@/components/album/Pages.jsx";
import SectionDivider from "@/components/SectionDivider";

const Album = () => {
    return (
        <div className="grid">
            <div className="justify-self-center my-[8%]">
                <Title text="Omi's Adventures" fontSize="text-7xl" border="border-b-4" />
            </div>
            <Pages />
            <SectionDivider />
        </div>
    )
}

export default Album;