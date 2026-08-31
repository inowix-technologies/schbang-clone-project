import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { HERO_FILM_POSTER_URL, HERO_FILM_URL } from "@/data/hero-media";

interface HeroFilmProps {
  className?: string;
  variant?: "stage" | "stacked";
}

export const HeroFilm = ({ className, variant }: HeroFilmProps) => {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden rounded-sm border border-border/30 bg-inowix-surface",
        variant === "stage"
          ? "aspect-[16/10] min-h-[280px] lg:min-h-[420px]"
          : "aspect-[4/5] max-h-[42vh] sm:max-h-[48vh] md:aspect-[16/9] md:max-h-none",
        !variant &&
          "aspect-[4/5] max-h-[42vh] sm:max-h-[48vh] md:aspect-[16/9] md:max-h-none lg:aspect-[16/10] lg:min-h-[420px] lg:max-h-none",
        className
      )}
    >
      <img
        src={HERO_FILM_POSTER_URL}
        alt=""
        aria-hidden="true"
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
          isReady && !prefersReducedMotion ? "opacity-0" : "opacity-100"
        )}
        loading="eager"
        decoding="async"
      />

      {!prefersReducedMotion && (
        <video
          ref={videoRef}
          src={HERO_FILM_URL}
          poster={HERO_FILM_POSTER_URL}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          onCanPlay={() => setIsReady(true)}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            isReady ? "opacity-100" : "opacity-0"
          )}
        />
      )}

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-inowix-bg/20 via-transparent to-transparent"
        aria-hidden="true"
      />
    </div>
  );
};
