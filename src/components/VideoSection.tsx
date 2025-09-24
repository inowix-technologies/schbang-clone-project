"use client";
import { useEffect, useRef } from "react";
import video from "../assets/Inowix_AI_Storyline_Generation.mp4";

export const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // smooth scroll target & animation refs
  const targetTimeRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);
  const lastProgressRef = useRef<number | null>(null);
  const lastScrollTsRef = useRef<number | null>(null);
  const velocityRef = useRef<number>(0);

  useEffect(() => {
    const videoEl = videoRef.current!;
    const containerEl = containerRef.current!;
    const headerEl = document.querySelector("header") as HTMLElement;

    if (!videoEl || !containerEl) return;

    // ensure video is ready
    videoEl.pause();
    videoEl.preload = "auto";
    videoEl.muted = true;
    videoEl.playsInline = true;
    videoEl.crossOrigin = "anonymous";

    // Navbar transition
    if (headerEl) headerEl.style.transition = "opacity 0.7s";

    // IntersectionObserver to hide/show Navbar
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (headerEl) {
          if (entry.isIntersecting) {
            headerEl.style.opacity = "0";
            headerEl.style.pointerEvents = "none";
          } else {
            headerEl.style.opacity = "1";
            headerEl.style.pointerEvents = "auto";
          }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(containerEl);

    // scroll handler: compute target video time
    const onScroll = () => {
      const rect = containerEl.getBoundingClientRect();
      const wh = window.innerHeight;

      const progress = Math.min(
        Math.max((wh - rect.top) / (rect.height + wh), 0),
        1
      );

      targetTimeRef.current = (videoEl.duration || 1) * progress;

      // compute velocity for adaptive smoothing
      const now = performance.now();
      if (lastProgressRef.current != null && lastScrollTsRef.current != null) {
        const dt = Math.max((now - lastScrollTsRef.current) / 1000, 0.001);
        const dv = (progress - lastProgressRef.current) / dt;
        velocityRef.current = velocityRef.current * 0.85 + dv * 0.15;
      }
      lastProgressRef.current = progress;
      lastScrollTsRef.current = now;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // main RAF loop to smoothly update currentTime
    const startLoop = () => {
      const maxStepSeconds = 0.08;
      const smallDiffThreshold = 0.0005;

      const loop = () => {
        if (!videoEl || videoEl.readyState < 2) {
          rafRef.current = requestAnimationFrame(loop);
          return;
        }

        const current = videoEl.currentTime || 0;
        const target = targetTimeRef.current || 0;
        const diff = target - current;

        const vel = Math.abs(velocityRef.current);
        const baseLerp = 0.06;
        const adaptive = Math.min(0.45, baseLerp + Math.min(vel * 0.12, 0.35));

        let newTime = current + diff * adaptive;

        // clamp per-frame movement
        const delta = newTime - current;
        const clampedDelta = Math.max(-maxStepSeconds, Math.min(maxStepSeconds, delta));
        newTime = current + clampedDelta;

        if (Math.abs(diff) > smallDiffThreshold) {
          try {
            videoEl.currentTime = newTime;
          } catch {}
        }

        rafRef.current = requestAnimationFrame(loop);
      };

      if (rafRef.current == null) rafRef.current = requestAnimationFrame(loop);
    };

    // start loop when metadata is ready
    const onMeta = () => startLoop();
    videoEl.addEventListener("loadedmetadata", onMeta);

    // trigger initial scroll calc
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      videoEl.removeEventListener("loadedmetadata", onMeta);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[500vh]" // large enough for scroll range
    >
      {/* Fixed fullscreen video */}
      <div className="sticky top-0 h-screen w-screen z-[50]">
    <video
      ref={videoRef}
      src={video}
      className="h-full w-full object-cover"
      muted
      playsInline
      preload="auto"
    />
  </div>
    </section>
  );
};
