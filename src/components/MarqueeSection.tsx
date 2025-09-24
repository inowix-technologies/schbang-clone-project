export const MarqueeSection = () => {
  return (
    <div className="bg-primary text-primary-foreground py-8 overflow-hidden relative">
      <div className="absolute top-10 left-5 w-20 h-20 bg-light-blue rounded-full opacity-20 animate-bounce-slow"></div>

      {/* Primary marquee */}
      <div className="flex animate-marquee">
        <div className="flex space-x-12 text-2xl md:text-4xl font-bold whitespace-nowrap">
          <span>IT'S TIME TO CREATE A Inowix</span>
          <span className="text-primary-foreground/60">★</span>
          <span>IT'S TIME TO CREATE A Inowix</span>
          <span className="text-primary-foreground/60">★</span>
          <span>IT'S TIME TO CREATE A Inowix</span>
          <span className="text-primary-foreground/60">★</span>
          <span>IT'S TIME TO CREATE A Inowix</span>
          <span className="text-primary-foreground/60">★</span>
          <span>IT'S TIME TO CREATE A Inowix</span>
          <span className="text-primary-foreground/60">★</span>
        </div>
      </div>
      
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-primary pointer-events-none"></div>
    </div>
  );
};