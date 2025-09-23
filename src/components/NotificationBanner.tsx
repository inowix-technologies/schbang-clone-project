export const NotificationBanner = () => {
  return (
    <div className="bg-primary text-primary-foreground py-3 px-6 text-center text-sm relative overflow-hidden">
      <div className="relative z-10">
        <p>
          🏆 <strong>Schbang ranked #5 in MMA SMARTIES Business Impact Index.</strong>{" "}
          <a href="#" className="underline hover:no-underline font-medium">
            Read More Here.
          </a>
        </p>
      </div>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"></div>
      </div>
    </div>
  );
};