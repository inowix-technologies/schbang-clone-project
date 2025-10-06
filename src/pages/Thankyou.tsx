import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { MailCheck, Briefcase, ArrowLeft } from "lucide-react";

const ThankYou = () => {
  const location = useLocation();
  const firstName =
    (location.state && (location.state as any).firstName) || "There";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-6 py-20">
          <div className="w-24 h-24 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <MailCheck className="w-12 h-12 text-green-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Thank You, {firstName}!
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Your vision is in good hands. We've received your project details and our team is already
            reviewing them. Expect a custom strategy <span className="text-primary font-semibold">within 24 hours</span>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/work">
              <Button size="lg" variant="outline" className="rounded-full px-8 w-full sm:w-auto">
                <Briefcase className="w-5 h-5 mr-2" />
                Explore Our Work
              </Button>
            </Link>
            <Link to="/marketing">
              <Button size="lg" className="rounded-full px-8 w-full sm:w-auto">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Submit Another Request
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
