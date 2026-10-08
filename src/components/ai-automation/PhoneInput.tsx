import { cn } from "@/lib/utils";
import { PHONE_COUNTRIES, getPhoneCountry } from "@/lib/ai-automation/phone";

interface PhoneInputProps {
  id: string;
  countryIso: string;
  value: string;
  onCountryChange: (iso: string) => void;
  onChange: (value: string) => void;
  invalid?: boolean;
  describedBy?: string;
  fieldClassName: string;
}

export const PhoneInput = ({
  id,
  countryIso,
  value,
  onCountryChange,
  onChange,
  invalid,
  describedBy,
  fieldClassName,
}: PhoneInputProps) => {
  const country = getPhoneCountry(countryIso);

  return (
    <div className="flex gap-2">
      <select
        aria-label="Country code"
        value={countryIso}
        onChange={(e) => onCountryChange(e.target.value)}
        className={cn(fieldClassName, "lp-select w-[124px] shrink-0 px-3")}
      >
        {PHONE_COUNTRIES.map((c) => (
          <option key={c.iso} value={c.iso}>
            {c.dial ? `${c.label} +${c.dial}` : c.label}
          </option>
        ))}
      </select>
      <input
        id={id}
        name="whatsapp"
        type="tel"
        inputMode="tel"
        autoComplete={country.dial ? "tel-national" : "tel"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={country.example}
        aria-invalid={invalid || undefined}
        aria-describedby={describedBy}
        className={cn(fieldClassName, "min-w-0 flex-1")}
      />
    </div>
  );
};
