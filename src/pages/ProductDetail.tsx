import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { EditorialCTA } from "@/components/layout/EditorialCTA";
import { INOWIX_PRODUCTS, type ProductSlug } from "@/data/inowix-content";
import { ComAiDemo } from "@/components/labs/ComAiDemo";
import { BeaconDemo } from "@/components/labs/BeaconDemo";
import { RedCliDemo } from "@/components/labs/RedCliDemo";
import { ArchitectureFlowStrip } from "@/components/labs/ArchitectureFlowStrip";
import { Button } from "@/components/ui/button";

const DEMO_MAP: Partial<Record<ProductSlug, React.ReactNode>> = {
  "com-ai": <ComAiDemo />,
  beacon: <BeaconDemo />,
  "red-cli": <RedCliDemo />,
};

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug && slug in INOWIX_PRODUCTS ? INOWIX_PRODUCTS[slug as ProductSlug] : null;

  if (!product) {
    return (
      <PageShell>
        <div className="max-w-[1600px] mx-auto px-4 pt-32 pb-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Button asChild variant="outline" className="rounded-sm">
            <Link to="/products">All Products</Link>
          </Button>
        </div>
      </PageShell>
    );
  }

  const demo = slug ? DEMO_MAP[slug as ProductSlug] : null;

  return (
    <PageShell>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 pt-28 sm:pt-32">
        <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          All Products
        </Link>
      </div>

      {demo ? (
        demo
      ) : (
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 pb-16">
          <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: product.accent }}>
            {product.tagline}
          </p>
          <h1 className="section-title mb-6">{product.name}</h1>
          <p className="lead mb-8">{product.description}</p>
          <ArchitectureFlowStrip steps={product.architecture} accent={product.accent} />
        </div>
      )}

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 pb-12 flex gap-4">
        <Button asChild className="rounded-sm">
          <Link to="/contact-us">Start a Project</Link>
        </Button>
      </div>

      <EditorialCTA />
    </PageShell>
  );
};

export default ProductDetail;
