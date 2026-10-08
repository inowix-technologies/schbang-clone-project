import { forwardRef } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { COUNTRY_CODES, findCountry } from "@/lib/healthcare/phone";
import { fieldClass } from "./field-class";

interface PhoneFieldProps {
  id: string;
  countryIso: string;
  phone: string;
  error?: string;
  onCountryChange: (iso: string) => void;
  onPhoneChange: (value: string) => void;
}

export const PhoneField = forwardRef<HTMLInputElement, PhoneFieldProps>(
  ({ id, countryIso, phone, error, onCountryChange, onPhoneChange }, ref) => {
    const country = findCountry(countryIso);
    const errorId = `${id}-error`;
    return (
      <div>
        <label htmlFor={id} className="mb-1 block text-sm font-semibold text-hc-ink">
          WhatsApp number
        </label>
        <div className="flex gap-2">
          {/* The native select stays on top (transparent) so mobile users get the OS picker; the span shows the short code. */}
          <div className="relative shrink-0">
            <span
              aria-hidden="true"
              className={cn(fieldClass(false), "flex w-[108px] items-center justify-between gap-1 font-medium")}
            >
              <span className="whitespace-nowrap">
                <span className="text-xs text-hc-muted">{country.iso}</span> +{country.dial}
              </span>
              <ChevronDown className="h-4 w-4 text-hc-muted" />
            </span>
            <select
              aria-label="Country code"
              value={countryIso}
              onChange={(e) => onCountryChange(e.target.value)}
              className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            >
              {COUNTRY_CODES.map((c) => (
                <option key={c.iso} value={c.iso}>
                  {c.name} (+{c.dial})
                </option>
              ))}
            </select>
          </div>
          <input
            ref={ref}
            id={id}
            name="whatsapp"
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            placeholder={country.iso === "IN" ? "98XXX XXXXX" : "Mobile number"}
            value={phone}
            onChange={(e) => onPhoneChange(e.target.value)}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            className={cn(fieldClass(!!error), "min-w-0 flex-1")}
          />
        </div>
        {error && (
          <p id={errorId} className="mt-1.5 text-[13px] font-medium text-hc-danger">
            {error}
          </p>
        )}
      </div>
    );
  },
);
PhoneField.displayName = "PhoneField";
