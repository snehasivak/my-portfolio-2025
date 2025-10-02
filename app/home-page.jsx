'use client';

import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import Projects from "./components/homepage/projects";
import dynamic from "next/dynamic";

// Dynamically import the components here, inside a Client Component
const HeroSection = dynamic(() => import("./components/homepage/hero-section"), { ssr: false });
const Skills = dynamic(() => import("./components/homepage/skills"), { ssr: false });

export default function HomePage({ blogs }) {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      {/* <Blog blogs={blogs} /> */}
      <ContactSection />
    </div>
  );
}