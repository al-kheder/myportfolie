import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Timeline from '@/components/Timeline';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
    </main>
  );
}