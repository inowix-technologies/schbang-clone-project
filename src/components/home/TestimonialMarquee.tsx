import { useEffect, useRef, useState } from "react";
import type { InowixTestimonial } from "@/data/inowix-content";
import { TestimonialCard } from "@/components/home/TestimonialCard";
import { cn } from "@/lib/utils";

interface TestimonialMarqueeProps {
  items: InowixTestimonial[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  className?: string;
}

export const TestimonialMarquee = ({
  items,
  direction = "left",
  speed = "slow",
  className,
}: TestimonialMarqueeProps) => {
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
    const duration = speed === "fast" ? "35s" : speed === "normal" ? "55s" : "90s";
    containerRef.current.style.setProperty("--animation-duration", duration);
    setStart(true);
  }, [direction, speed, items]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn("flex min-w-full shrink-0 gap-5 py-2 w-max flex-nowrap", start && "animate-scroll")}
      >
        {items.map((item, idx) => (
          <li key={`${item.company}-${idx}`}>
            <TestimonialCard testimonial={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
