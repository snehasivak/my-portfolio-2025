import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import Projects from "./components/homepage/projects";
import dynamic from "next/dynamic";

// Dynamically import the components causing the client-side error
const HeroSection = dynamic(() => import("./components/homepage/hero-section"), { ssr: false });
const Skills = dynamic(() => import("./components/homepage/skills"), { ssr: false });

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);
  return filtered;
};

export default async function Home() {
  const blogs = await getData();

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
  )
};