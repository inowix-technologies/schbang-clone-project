interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className }: HeroSectionProps) => {
  return (
    <section className={`min-h-screen flex items-center justify-center px-4 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <h1 className="font-hero font-bold text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight text-center animate-fade-in">
          <span className="block ">A great solution is</span>
          <span className="block text-[#CDC3FF]">never a coincidence;</span>
          <span className="block">It's built when all the</span>
          <span className="block text-[#FFC8A9]">molecules</span>
          <span className="block">fall into place.</span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;