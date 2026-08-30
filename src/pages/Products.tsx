import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useProducts } from "@/hooks/useProducts";
import { Link } from "react-router-dom";
import { ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const accentMap: Record<string, string> = {
  'com-ai': 'border-inowix-com-ai/40 hover:shadow-[0_0_30px_hsl(var(--accent-com-ai)/0.1)]',
  'beacon': 'border-inowix-beacon/40 hover:shadow-[0_0_30px_hsl(var(--accent-beacon)/0.1)]',
  'red-cli': 'border-inowix-red-cli/40 hover:shadow-[0_0_30px_hsl(var(--accent-red-cli)/0.1)]',
};

const Products = () => {
  const { products, isLoading } = useProducts({ status: 'published' });

  return (
    <div className="min-h-screen bg-inowix-bg text-foreground">
      <Header />
      <main className="pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12 sm:mb-16">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Products</p>
            <h1 className="section-title mb-4">Technology we build</h1>
            <p className="lead max-w-2xl">
              Flagship products engineered by Inowix — AI-native platforms built for production.
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.slug}`}
                  className={cn(
                    "group block rounded-2xl border border-border/40 bg-inowix-surface/30 p-6 sm:p-8 transition-all duration-300 hover:bg-inowix-elevated/50",
                    accentMap[product.slug]
                  )}
                >
                  <div
                    className="w-3 h-3 rounded-full mb-6"
                    style={{ backgroundColor: product.accent_color || 'hsl(var(--primary))' }}
                  />
                  <h2 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h2>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                    {product.tagline}
                  </p>
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                    {product.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Explore product
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
