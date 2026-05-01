import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Mission from "@/components/Mission";
import Programs from "@/components/Programs";
import Testimonial from "@/components/Testimonial";
import DonateSection from "@/components/DonateSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Mission />
      <Programs />
      <Testimonial />
      <DonateSection />
    </>
  );
}
