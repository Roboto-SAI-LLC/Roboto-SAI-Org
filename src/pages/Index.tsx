import { Link } from "react-router-dom";
import { ArrowRight, Shield, Brain, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Roboto <span className="text-accent">SAI</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              An independent organization advancing ethical, human-centered AI systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="outline" className="group">
                <Link to="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/donate">Support the Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              We believe AI should serve humanity—not the other way around. Roboto SAI is 
              dedicated to building AI systems that prioritize ethics, transparency, and 
              genuine human benefit over profit or hype.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 border-t border-border bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
            What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors">
              <Shield className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Ethical AI Development
              </h3>
              <p className="text-muted-foreground">
                Building AI systems with transparency, accountability, and human oversight at their core.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors">
              <Brain className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Memory-Aware Systems
              </h3>
              <p className="text-muted-foreground">
                Researching AI architectures that understand context and maintain coherent, responsible memory.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors">
              <Users className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Human-Aligned Design
              </h3>
              <p className="text-muted-foreground">
                Creating AI that genuinely serves human needs, not artificial metrics or engagement loops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ethics Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Ethics & Transparency
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We operate with full transparency. Our governance principles guide every decision 
              we make, and we believe the AI community deserves honest, thoughtful leadership.
            </p>
            <Button asChild variant="outline">
              <Link to="/governance">
                Read Our Governance Principles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 border-t border-border bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Support Our Work
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Roboto SAI is independently operated and community-supported. Your contributions 
              help sustain our research, infrastructure, and public-facing tools.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/donate">Make a Donation</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
