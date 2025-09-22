import { useState } from "react";
import { Button } from "@/components/ui/button";

const locations = [
  {
    code: "MU",
    city: "Mumbai",
    time: "12:22 PM",
    timezone: "India",
    office: "Base Creative",
    address: "Kamala Mills Compound, 301/302 Trade World, Tower D, Lower Parel, Mumbai, Maharashtra 400013",
    phones: ["+91 963254875", "+91 9658745123"],
    email: "bd@schbang.com"
  },
  {
    code: "BLR", 
    city: "Bangalore",
    time: "12:22 PM",
    timezone: "India",
    office: "Base Creative",
    address: "OXFORD TOWER-2, Door no. 901 8th floor, 139, Kodihalli, Bengaluru, Karnataka 560008",
    phones: ["+91 963254875", "+91 9658745123"],
    email: "bd@schbang.com"
  },
  {
    code: "DL",
    city: "Delhi", 
    time: "12:22 PM",
    timezone: "India",
    office: "Base Creative",
    address: "1-A, Khasra No. 275, First Floor, Westend Marg, Saidulajab, Saket, New Delhi, Delhi 110030",
    phones: ["+91 963254875", "+91 9658745123"],
    email: "bd@schbang.com"
  },
  {
    code: "LDN",
    city: "London",
    time: "07:52 AM", 
    timezone: "London",
    office: "Base Creative",
    address: "15/F The Hennessy 256 Hennessy Road Wan Chai, Hong Kong",
    phones: ["+91 963254875", "+91 9658745123"],
    email: "bd@schbang.com"
  }
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