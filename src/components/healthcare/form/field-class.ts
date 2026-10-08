import { cn } from "@/lib/utils";

export const fieldClass = (invalid: boolean) =>
  cn(
    "hc-field h-12 w-full rounded-xl border bg-hc-white px-3.5 text-[15px] text-hc-ink placeholder:text-hc-muted/70",
    "transition-[border-color,box-shadow] duration-150 focus:outline-none focus:ring-4",
    invalid
      ? "border-hc-danger/60 focus:border-hc-danger focus:ring-hc-danger/15"
      : "border-hc-line hover:border-[#C9D3E3] focus:border-hc-blue focus:ring-hc-blue/15",
  );
