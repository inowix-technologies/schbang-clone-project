import { Play } from "lucide-react";

export const VideoSection = () => {
  return (
    <section className="py-section">
      <div className="max-w-container mx-auto px-6">
        <div className="relative aspect-video bg-muted rounded-2xl overflow-hidden group cursor-pointer">
          {/* Video placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
            <div className="bg-background/10 backdrop-blur-sm rounded-full p-6 group-hover:scale-110 transition-transform duration-300">
              <Play className="w-12 h-12 text-background fill-background" />
            </div>
          </div>
          
          {/* Video overlay */}
          <div className="absolute bottom-6 left-6 text-background">
            <p className="text-sm opacity-80">ShowReel 20 Seconds Clip</p>
          </div>
        </div>
      </div>
    </section>
  );
};