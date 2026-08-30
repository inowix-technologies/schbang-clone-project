import { Link } from "react-router-dom";
import { ArrowRight, Loader2 } from "lucide-react";
import { useProducts } from "@/hooks/useProducts";
import { cn } from "@/lib/utils";

const accentStyles: Record<string, string> = {
  'com-ai': 'group-hover:border-inowix-com-ai/30',
  'beacon': 'group-hover:border-inowix-beacon/30',
  'red-cli': 'group-hover:border-inowix-red-cli/30',
};

export const ProductsSection = () => {
  const { products, isLoading } = useProducts({ status: 'published', featured: true });

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-inowix-bg border-t border-border/40 relative" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">Products</p>
            <h2 className="section-title">Technology we build</h2>
          </div>
          <Link to="/products" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
            View all products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {products.slice(0, 3).map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.slug}`}
                className={cn(
                  "group block rounded-2xl border border-border/40 bg-inowix-surface/20 p-6 sm:p-8 transition-all duration-300 hover:bg-inowix-surface/40",
                  accentStyles[product.slug]
                )}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full mb-5"
                  style={{ backgroundColor: product.accent_color || 'hsl(var(--primary))' }}
                />
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground mb-4">
                  {product.tagline}
                </p>
                <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
