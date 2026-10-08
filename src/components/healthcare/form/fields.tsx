import { forwardRef, type InputHTMLAttributes, type ReactNode, type SelectHTMLAttributes, type TextareaHTMLAttributes } from "react";
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
}

export const TextField = forwardRef<HTMLInputElement, BaseProps & InputHTMLAttributes<HTMLInputElement>>(
  ({ id, label, error, hint, className, ...props }, ref) => (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-hc-ink">
        {label}
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

interface SelectFieldProps extends BaseProps, Omit<SelectHTMLAttributes<HTMLSelectElement>, "children" | "id" | "placeholder"> {
  placeholder: string;
  options?: Option[];
  groups?: { label: string; options: Option[] }[];
}

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ id, label, error, placeholder, options, groups, className, value, ...props }, ref) => (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-hc-ink">
        {label}
      </label>
      <select
        ref={ref}
        id={id}
        value={value}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldClass(!!error), "hc-select cursor-pointer", !value && "text-hc-muted/80", className)}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options?.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
        {groups?.map((g) => (
          <optgroup key={g.label} label={g.label}>
            {g.options.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
      <FieldError id={`${id}-error`} error={error} />
    </div>
  ),
);
SelectField.displayName = "SelectField";

export const TextAreaField = forwardRef<HTMLTextAreaElement, BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ id, label, error, hint, className, ...props }, ref) => (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-hc-ink">
        {label}
      </label>
      <textarea
        ref={ref}
        id={id}
        aria-invalid={!!error}
        aria-describedby={[error ? `${id}-error` : "", hint ? `${id}-hint` : ""].filter(Boolean).join(" ") || undefined}
        className={cn(fieldClass(!!error), "h-auto min-h-[120px] resize-y py-3 leading-relaxed", className)}
        {...props}
      />
      {hint}
      <FieldError id={`${id}-error`} error={error} />
    </div>
  ),
);
TextAreaField.displayName = "TextAreaField";

interface ChipGroupProps {
  name: string;
  legend: string;
  options: Option[];
  value: string;
  error?: string;
  onChange: (value: string) => void;
  columns?: 2 | 3;
  children?: ReactNode;
}

export const ChipGroup = ({ name, legend, options, value, error, onChange, columns = 2, children }: ChipGroupProps) => (
  <fieldset aria-describedby={error ? `${name}-error` : undefined}>
    <legend className="mb-2 text-sm font-semibold text-hc-ink">{legend}</legend>
    <div className={cn("grid gap-2", columns === 3 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2")}>
      {options.map((o) => (
        <label
          key={o.value}
          className={cn(
            "relative flex min-h-[44px] cursor-pointer items-center rounded-xl border bg-hc-white px-3.5 py-2.5 text-sm font-medium text-hc-body transition-colors",
            "hover:border-[#C9D3E3] has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-hc-blue/15",
            value === o.value ? "border-hc-blue bg-hc-blue/[0.06] text-hc-ink" : error ? "border-hc-danger/40" : "border-hc-line",
          )}
        >
          <input
            type="radio"
            name={name}
            value={o.value}
            checked={value === o.value}
            onChange={() => onChange(o.value)}
            className="sr-only"
          />
          <span
            aria-hidden="true"
            className={cn(
              "mr-2.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border",
              value === o.value ? "border-hc-blue" : "border-[#B8C3D6]",
            )}
          >
            {value === o.value && <span className="h-2 w-2 rounded-full bg-hc-blue" />}
          </span>
          {o.label}
        </label>
      ))}
    </div>
    {children}
    <FieldError id={`${name}-error`} error={error} />
  </fieldset>
);
