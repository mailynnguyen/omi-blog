import SectionDividerImg from "@/../public/images/section-divider.webp";
import Image from "next/image";

const SectionDivider = () => {
    return (
        <div className="my-[8%] m-auto w-[20%] h-auto !important ">
            <Image src={SectionDividerImg} alt="section-divider-img" />
        </div>
    )
}

export default SectionDivider;