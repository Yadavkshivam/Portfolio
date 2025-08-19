import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Experience from '@/components/Experience'
import TechStack from '@/components/TechStack'
import ScrollToTop from '@/components/ScrollToTop'
import PositionOfResponsibility from '@/components/PositionOfResponsibility';


export default function Home() {
  return (
    <main className="bg-[#f8f9fc] text-[#333] font-sans">
    
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <PositionOfResponsibility />
      <TechStack />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
