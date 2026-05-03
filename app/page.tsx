"use client";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Mission from "@/components/Mission";
import Programs from "@/components/Programs";
import Testimonial from "@/components/Testimonial";
import DonateSection from "@/components/DonateSection";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollReveal>
        <StatsBar />
      </ScrollReveal>
      <ScrollReveal>
        <Mission />
      </ScrollReveal>
      <ScrollReveal>
        <Programs />
      </ScrollReveal>
      <ScrollReveal>
        <Testimonial />
      </ScrollReveal>
      <ScrollReveal>
        <DonateSection />
      </ScrollReveal>
    </>
  );
}


