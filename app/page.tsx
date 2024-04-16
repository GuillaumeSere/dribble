import Hero from "./components/HeroSection/Hero";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <main className="">
        <Hero />
        <SpeedInsights/>
    </main>
  );
}
