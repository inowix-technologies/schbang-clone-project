import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface LogoItem {
  name: string;
  image: string;
}

interface ClientLogoMarqueeProps {
  items: LogoItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  className?: string;
}

export const ClientLogoMarquee = ({
  items,
  direction = "left",
  speed = "slow",
  className,
}: ClientLogoMarqueeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;
    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      scrollerRef.current?.appendChild(item.cloneNode(true));
    });
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
    const duration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "60s";
    containerRef.current.style.setProperty("--animation-duration", duration);
    setStart(true);
  }, [direction, speed, items]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn("flex min-w-full shrink-0 gap-6 py-2 w-max flex-nowrap", start && "animate-scroll")}
      >
        {items.map((item, idx) => (
          <li
            key={`${item.name}-${idx}`}
            className="flex h-14 w-28 shrink-0 items-center justify-center rounded-sm border border-border/30 bg-inowix-bg/60 px-3"
          >
            <img
              src={item.image}
              alt={item.name}
              className="max-h-8 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
