import ezbuzz from "../assets/Easebuzz_Logo.jpg";
import e2e from "../assets/66f39d4fdfb2bfc1091c408a_e2e-logo-white.webp"
import shopify from "../assets/60ccab9786c6e542b5601be6_5f0439b0f26a5acaf2f50e1a_shopify.png"
import phonepay from "../assets/PhonePe-Logo.wine.png"
import tata from "../assets/tata-comm-collaborates-with-amazon-to-establish-advanced-ai-ready-network-in-india.webp"
import paytm from "../assets/Paytm-Logo.516dcbea24a48dc1f0187700fbd0f6a48f9a18c3.png"
import razorpay from "../assets/Razorpay_logo.svg"


const clients = [
  { name: "Ezbuzz", logo: ezbuzz },
  { name: "E2e", logo: e2e },
  { name: "Shopify", logo: shopify },
  { name: "Phone pay", logo: phonepay },
  { name: "Tata Communications", logo: tata },
  { name: "PayTM", logo: paytm },
  { name: "Razorpay", logo: razorpay },
  ];

export const ClientsSection = () => {
  return (
    <section className="py-section bg-secondary">
      <div className="max-w-container mx-auto px-6">
        <div className="overflow-hidden">
          <div className="animate-marquee flex items-center gap-16">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-16 w-auto object-contain" // Increased size
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
