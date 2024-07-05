import About from "@/components/home/About.jsx";
import Landing from "@/components/home/Landing.jsx";
import SectionDivider from "@/components/SectionDivider";
import Carousel from "@/components/home/Carousel.jsx";
import Polaroids from "@/components/home/Polaroids.jsx";

export default function Home() {
  return (
    <div>
      <Landing />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Carousel />
      <SectionDivider />
      <Polaroids />
      <SectionDivider />
    </div>
  );
};
