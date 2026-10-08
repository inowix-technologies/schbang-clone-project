import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Listener = (visible: boolean) => void;

const listeners = new WeakMap<Element, Listener>();
let sharedObserver: IntersectionObserver | null = null;

/** One observer for the whole page instead of one per revealed element. */
const getObserver = () => {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          listeners.get(entry.target)?.(true);
          listeners.delete(entry.target);
          sharedObserver?.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
  }
  return sharedObserver;
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Stagger offset in milliseconds. */
  delay?: number;
}

export const Reveal = ({ children, className, as: Tag = "div", delay = 0 }: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = getObserver();
    listeners.set(node, setVisible);
    observer.observe(node);
    return () => {
      listeners.delete(node);
      observer.unobserve(node);
    };
  }, []);

  const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <Tag ref={ref} style={style} className={cn("hc-reveal", visible && "hc-reveal-in", className)}>
      {children}
    </Tag>
  );
};
