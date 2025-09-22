export const NotificationBanner = () => {
  return (
    <div className="bg-background border-b border-border">
      <div className="max-w-container mx-auto px-6 py-3">
        <div className="flex items-center justify-center text-sm text-foreground">
          <span className="mr-2">🎉</span>
          <span>
            Schbang ranked #5 in MMA SMARTIES Business Impact Index.{" "}
            <a 
              href="#" 
              className="text-primary hover:underline font-medium"
            >
              Read More Here.
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};