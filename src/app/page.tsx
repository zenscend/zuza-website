import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBand from "@/components/TrustBand";
import WhoWeAre from "@/components/WhoWeAre";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Team from "@/components/Team";
import WaitlistCTA from "@/components/WaitlistCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBand />
        <WhoWeAre />
        {/* <Features /> */}
        <HowItWorks />
        <Team />
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  );
}
