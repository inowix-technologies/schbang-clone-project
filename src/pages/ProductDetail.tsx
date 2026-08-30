import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useProduct } from "@/hooks/useProducts";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Loader2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { product, isLoading, error } = useProduct(slug || '');

  return (
    <div className="min-h-screen bg-inowix-bg text-foreground">
      <Header />
      <main className="pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            All Products
          </Link>

          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : error || !product ? (
            <div className="text-center py-20">
              <h1 className="text-2xl font-bold mb-4">Product not found</h1>
              <Button asChild variant="outline"><Link to="/products">Back to Products</Link></Button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <div
                  className="w-4 h-4 rounded-full mb-6"
                  style={{ backgroundColor: product.accent_color || 'hsl(var(--primary))' }}
                />
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  {product.tagline}
                </p>
                <h1 className="section-title mb-6">{product.name}</h1>
                <p className="lead">{product.description}</p>
              </div>

              {product.product_features && product.product_features.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-xl font-semibold mb-6">Features</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {product.product_features.map((f) => (
                      <div key={f.id} className="rounded-xl border border-border/40 bg-inowix-surface/30 p-5">
                        <h3 className="font-medium mb-2">{f.title}</h3>
                        {f.description && <p className="text-sm text-muted-foreground">{f.description}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {product.product_technologies && product.product_technologies.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-xl font-semibold mb-4">Technologies</h2>
                  <div className="flex flex-wrap gap-2">
                    {product.product_technologies.map((t) => (
                      <span key={t.id} className="font-mono text-xs px-3 py-1.5 rounded-full border border-border/40 bg-inowix-surface/50">
                        {t.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-4">
                <Button asChild>
                  <Link to="/contact-us">Start a Project</Link>
                </Button>
                {product.external_url && (
                  <Button asChild variant="outline">
                    <a href={product.external_url} target="_blank" rel="noopener noreferrer">
                      Visit Product <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
