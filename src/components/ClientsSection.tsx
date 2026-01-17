import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import ezbuzz from "../assets/Easebuzz_Logo.jpg";
import e2e from "../assets/66f39d4fdfb2bfc1091c408a_e2e-logo-white.webp"
import shopify from "../assets/60ccab9786c6e542b5601be6_5f0439b0f26a5acaf2f50e1a_shopify.png"
import phonepay from "../assets/PhonePe-Logo.wine.png"
import tata from "../assets/tata-comm-collaborates-with-amazon-to-establish-advanced-ai-ready-network-in-india.webp"
import paytm from "../assets/Paytm-Logo.516dcbea24a48dc1f0187700fbd0f6a48f9a18c3.png"
import razorpay from "../assets/Razorpay_logo.svg";

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
    <section className="py-12 sm:py-16 md:py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-neutral-500 uppercase tracking-widest px-2 sm:px-0">
          Trusted by Industry Leaders
        </h2>
      </div>
      <div className="flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={clients.map(client => ({
            quote: "",
            name: client.name,
            title: "",
            image: client.logo
          }))}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};

