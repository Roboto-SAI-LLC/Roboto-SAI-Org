import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              About Roboto SAI
            </h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Roboto SAI is a founder-led organization committed to the long-term stewardship 
                of ethical AI development. We operate independently, free from the pressures of 
                venture capital timelines or shareholder expectations.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">
                Our Philosophy
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We believe that AI development has reached an inflection point. The decisions 
                made today will shape the relationship between humans and AI for generations. 
                That's why we take a deliberate, thoughtful approach—prioritizing safety and 
                ethics over speed and scale.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">
                What Drives Us
              </h2>
              <ul className="space-y-4 text-muted-foreground mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Ethical AI:</strong> Every system we build 
                    is designed with transparency and human oversight in mind.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Memory-Aware Systems:</strong> We research 
                    architectures that maintain context responsibly, without compromising privacy.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Human-Aligned Design:</strong> AI should 
                    augment human capability, not replace human judgment.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Donor-Exclusive Knowledge:</strong> Our research, 
                    insights, and findings are shared exclusively with supporters who help fund our mission.
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">
                Long-Term Stewardship
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We're not here to move fast and break things. We're here to move thoughtfully 
                and build things that last. Our commitment is to the long-term health of the 
                AI ecosystem, not quarterly growth targets.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-muted-foreground mb-4">
                Want to understand how we govern our work?
              </p>
              <Button asChild variant="outline">
                <Link to="/governance">
                  Read Our Governance Principles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
