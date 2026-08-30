import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { EditorialCTA } from "@/components/layout/EditorialCTA";
import { INOWIX_PRODUCTS, type ProductSlug } from "@/data/inowix-content";
import { BuiltByInowixBadge } from "@/components/labs/BuiltByInowixBadge";

const productOrder: ProductSlug[] = ["com-ai", "beacon", "red-cli"];

const Products = () => {
  return (
    <PageShell>
      <PageHero
        label="Inowix Labs"
        title={
          <>
            <span className="block">Technology we</span>
            <span className="block text-primary">built ourselves.</span>
          </>
        }
        subtitle="Flagship products engineered by Inowix — AI-native platforms built for production, not demos."
      />

      <div>
        {productOrder.map((slug, i) => {
          const product = INOWIX_PRODUCTS[slug];
          const reversed = i % 2 === 1;
          return (
            <div
              key={slug}
              className={`relative flex flex-col lg:flex-row min-h-[50vh] border-b border-border/30 ${reversed ? "lg:flex-row-reverse" : ""}`}
              style={{ borderLeftColor: `${product.accent}25`, borderLeftWidth: 3 }}
            >
              <div className="flex-1 p-8 sm:p-12 lg:p-16 flex flex-col justify-center max-w-xl">
                <BuiltByInowixBadge className="mb-6 w-fit" />
                <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: product.accent }}>
                  {product.tagline}
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">{product.name}</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.features.slice(0, 4).map((f) => (
                    <span
                      key={f}
                      className="font-mono text-[9px] uppercase tracking-wider px-2.5 py-1 border rounded-sm"
                      style={{ borderColor: `${product.accent}35`, color: product.accent }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <Link
                  to={product.link}
                  className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all w-fit"
                  style={{ color: product.accent }}
                >
                  Explore {product.name} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              {product.screenshot && (
                <div className="flex-1 min-h-[240px] flex items-center justify-center p-8">
                  <div
                    className="w-full max-w-md aspect-video rounded-sm overflow-hidden border"
                    style={{ borderColor: `${product.accent}30`, boxShadow: `0 0 40px ${product.glow}` }}
                  >
                    <img src={product.screenshot} alt={product.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <EditorialCTA />
    </PageShell>
  );
};

export default Products;
