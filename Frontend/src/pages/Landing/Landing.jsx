import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import DashboardPreview from "@/components/landing/DashboardPreview";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <DashboardPreview />
      <CTASection />
      <Footer />
    </>
  );
}