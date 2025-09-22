const clients = [
  { name: "Xiaomi", logo: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=120&h=60&fit=crop" },
  { name: "Jio", logo: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=120&h=60&fit=crop" },
  { name: "Fevicol", logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&h=60&fit=crop" },
  { name: "Domino's", logo: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=120&h=60&fit=crop" },
  { name: "Tata Communications", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop" },
  { name: "PayTM", logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=120&h=60&fit=crop" },
  { name: "Hershey's", logo: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=120&h=60&fit=crop" },
  { name: "Johnson & Johnson", logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=120&h=60&fit=crop" },
  { name: "Cipla", logo: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=120&h=60&fit=crop" },
  { name: "Garnier", logo: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=120&h=60&fit=crop" },
  { name: "Britannia", logo: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=120&h=60&fit=crop" },
  { name: "Prime Video", logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=120&h=60&fit=crop" }
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
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};