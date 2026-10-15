import FeaturedWork from "@/components/home/FeaturedWork";
import Hero from "@/components/home/Hero";
import { AboutTeaser, Marquee, ReelStrip, Services, Stats } from "@/components/home/Sections";
import WorkList from "@/components/home/WorkList";
import { projects } from "@/lib/content";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedWork projects={featured} />
      <WorkList projects={rest} />
      <Stats />
      <ReelStrip />
      <Services />
      <AboutTeaser />
    </>
  );
}
