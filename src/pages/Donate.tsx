import { Heart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const Donate = () => {
  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="h-16 w-16 text-accent mx-auto mb-8" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Support Roboto SAI
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Roboto SAI is independently operated and supported by the community. 
              Donations help sustain research, infrastructure, and public-facing tools 
              that advance ethical AI development.
            </p>

            <div className="p-8 rounded-lg border border-border bg-card mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Your Support Makes a Difference
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Every contribution, regardless of size, helps us maintain our independence 
                and continue our mission of building AI that truly serves humanity.
              </p>
              
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto"
              >
                <a
                  href="https://www.buymeacoffee.com/RobotoSAI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donate via Buy Me a Coffee
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card/50">
              <p className="text-sm text-muted-foreground">
                Donations are voluntary and non-refundable. No goods or services are 
                exchanged. Roboto SAI is not a registered nonprofit, and contributions 
                may not be tax-deductible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
