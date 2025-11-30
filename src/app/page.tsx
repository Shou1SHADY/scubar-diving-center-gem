import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";
import CoursesSection from "@/components/sections/courses-section";
import GallerySection from "@/components/sections/gallery-section";
import HeroSection from "@/components/sections/hero-section";
import TeamSection from "@/components/sections/team-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection isHomePage={true} />
      <CoursesSection isHomePage={true} />
      <GallerySection isHomePage={true} />
      <TeamSection isHomePage={true} />
      <ContactSection />
    </div>
  );
}
