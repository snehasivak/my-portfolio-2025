'use client';

import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import ClientOnly from "./components/client-only";

export default function HomePage({ blogs }) {
  return (
    <div suppressHydrationWarning>
      <ClientOnly>
        <HeroSection />
        <Skills />
        <AboutSection /> 
      </ClientOnly>

      <Experience />
      <Projects />
      <Education />
      {/* <Blog blogs={blogs} /> */}
      <ContactSection />
    </div>
  );
}