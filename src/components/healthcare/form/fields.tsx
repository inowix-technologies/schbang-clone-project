import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Option } from "@/lib/healthcare/form";
import { fieldClass } from "./field-class";

const FieldError = ({ id, error }: { id: string; error?: string }) =>
  error ? (
    <p id={id} className="mt-1.5 text-[13px] font-medium text-hc-danger">
      {error}
    </p>
  ) : null;

interface BaseProps {
  id: string;
  label: string;
  error?: string;
  hint?: ReactNode;
  optional?: boolean;
}

export const TextField = forwardRef<HTMLInputElement, BaseProps & InputHTMLAttributes<HTMLInputElement>>(
  ({ id, label, error, hint, optional, className, ...props }, ref) => (
    <div>
      <label htmlFor={id} className="mb-1 flex items-baseline justify-between gap-3 text-sm font-semibold text-hc-ink">
        {label}
        {optional && <span className="text-xs font-normal text-hc-muted">Optional</span>}
      </label>
      <input
        ref={ref}
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldClass(!!error), className)}
        {...props}
      />
      {hint}
      <FieldError id={`${id}-error`} error={error} />
    </div>
  ),
);
TextField.displayName = "TextField";

interface ChipGroupProps {
  name: string;
  legend: string;
  options: Option[];
  value: string;
  error?: string;
  onChange: (value: string) => void;
  children?: ReactNode;
}

/** Tap-to-pick pills: faster than dropdowns on mobile and every option is visible at once. */
export const ChipGroup = ({ name, legend, options, value, error, onChange, children }: ChipGroupProps) => (
  <fieldset aria-describedby={error ? `${name}-error` : undefined}>
    <legend className="mb-2 text-sm font-semibold text-hc-ink">{legend}</legend>
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const checked = value === o.value;
        return (
          <label
            key={o.value}
            className={cn(
              "relative inline-flex min-h-[40px] cursor-pointer items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all",
              "has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-hc-blue/20",
              checked
                ? "border-transparent text-hc-white hc-gradient-bg shadow-[0_6px_16px_-8px_rgba(59,91,255,0.8)]"
                : error
                  ? "border-hc-danger/40 bg-hc-white text-hc-body hover:border-hc-danger/60"
                  : "border-hc-line bg-hc-white text-hc-body hover:border-hc-blue/40 hover:text-hc-ink",
            )}
          >
            <input
              type="radio"
              name={name}
              value={o.value}
              checked={checked}
              onChange={() => onChange(o.value)}
              className="sr-only"
            />
            {checked && <Check aria-hidden="true" className="h-3.5 w-3.5" />}
            {o.label}
          </label>
        );
      })}
    </div>
    {children}
    <FieldError id={`${name}-error`} error={error} />
  </fieldset>
);
