import About from "@/components/home/About.jsx";
import Landing from "@/components/home/Landing.jsx";
import SectionDivider from "@/components/SectionDivider";
import Carousel from "@/components/home/Carousel.jsx";

export default function Home() {
  return (
    <div className="relative">
      <Landing />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Carousel />
      <SectionDivider />
    </div>
  );
};
