import Header from '@/components/header';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import ProjectsSection from '@/components/sections/projects';
import SkillsSection from '@/components/sections/skills';
import ContactSection from '@/components/sections/contact';
import PortfolioReviewSection from '@/components/sections/portfolio-review';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <PortfolioReviewSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
