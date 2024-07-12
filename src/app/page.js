import About from "@/components/About.jsx";
import Landing from "@/components/Landing.jsx";
import SectionDivider from "@/components/SectionDivider.jsx";
import Carousel from "@/components/Carousel.jsx";
import Polaroids from "@/components/Polaroids.jsx";

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
