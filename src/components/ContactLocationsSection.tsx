import { useState } from "react";
import { Button } from "@/components/ui/button";

const locations = [
  {
    code: "BL",
    city: "banglore",
    timezone: "India",
    office: "Base Creative",
    address: "OXFORD TOWER-2, Door no. 901 8th floor, 139, Kodihalli, Bengaluru, Karnataka 560008",
    phones: ["+91 8769626027"],
    email: "admin@inowix.in"
  },
  {
    code: "DL",
    city: "Delhi", 
    timezone: "India",
    office: "Base Creative",
    address: "1-A, Khasra No. 275, First Floor, Westend Marg, Saidulajab, Saket, New Delhi, Delhi 110030",
    phones: ["+91 8769626027"],
    email: "admin@inowix.in"
  },
  {
    code: "CH",
    city: "Chandigarh", 
    timezone: "India",
    office: "Base Creative",
    address: "SBP South City , Zirakpur , Chandigarh",
    phones: ["+91 8769626027"],
    email: "admin@inowix.in"
  },
];

export const ContactLocationsSection = () => {
  const [activeLocation, setActiveLocation] = useState(0);

  return (
    <section className="py-section">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Location Buttons */}
          <div className="space-y-6">
            {locations.map((location, index) => (
              <Button
                key={index}
                variant={activeLocation === index ? "default" : "outline"}
                className="w-full p-6 h-auto justify-start text-left"
                onClick={() => setActiveLocation(index)}
              >
                <div>
                  <div className="font-bold text-lg mb-1">
                    {location.timezone}: {location.time}
                  </div>
                  <div className="text-sm opacity-80">Contact Us</div>
                </div>
              </Button>
            ))}
          </div>

          {/* Location Details */}
          <div className="bg-card p-8 rounded-2xl border border-border">
            {/* Location Tabs */}
            <div className="flex gap-1 mb-8 bg-muted p-1 rounded-lg">
              {locations.map((location, index) => (
                <button
                  key={index}
                  onClick={() => setActiveLocation(index)}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    activeLocation === index
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {location.code}
                </button>
              ))}
            </div>

            {/* Active Location Details */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                {locations[activeLocation].office}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {locations[activeLocation].address}
              </p>
              
              <div className="space-y-2">
                {locations[activeLocation].phones.map((phone, index) => (
                  <a
                    key={index}
                    href={`tel:${phone}`}
                    className="block text-primary hover:underline"
                  >
                    {phone}
                  </a>
                ))}
              </div>
              
              <a
                href={`mailto:${locations[activeLocation].email}`}
                className="text-primary hover:underline"
              >
                {locations[activeLocation].email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};