import BackgroundEffects from "./BackgroundEffects";
import HeroContent from "./HeroContent";
import AuthFlowCard from "./AuthFlowCard";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <BackgroundEffects />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center justify-between gap-16 px-6 py-24">
        <HeroContent />
        <AuthFlowCard />
      </div>
    </section>
  );
};

export default Hero;