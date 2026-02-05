import { Lock, FileText, Mail, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const benefits = [
  {
    icon: FileText,
    title: "Exclusive Research Access",
    description:
      "Get direct access to our research papers, findings, and technical documentation before anyone else.",
  },
  {
    icon: Mail,
    title: "Priority Updates",
    description:
      "Receive detailed newsletters and progress reports on our latest projects and breakthroughs.",
  },
  {
    icon: Star,
    title: "Early Access",
    description:
      "Be the first to test new tools, prototypes, and demonstrations developed by our team.",
  },
];

const DonorPortal = () => {
  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="h-10 w-10 text-accent" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Donor Portal
              </h1>
            </div>

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Thank you for your interest in supporting Roboto SAI. Our donor portal 
              provides exclusive access to research, insights, and early releases that 
              are not available to the public.
            </p>

            <div className="p-8 rounded-lg border border-accent/30 bg-accent/5 mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Donor Benefits
              </h2>
              <p className="text-muted-foreground mb-8">
                When you support Roboto SAI, you gain access to exclusive content and 
                become part of our mission to develop ethical, human-centered AI.
              </p>

              <div className="space-y-6">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="flex items-start gap-4 p-4 rounded-lg bg-background/50"
                  >
                    <benefit.icon className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-lg border border-border bg-card">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Become a Donor
              </h2>
              <p className="text-muted-foreground mb-6">
                Support our work and unlock access to exclusive research, updates, and 
                early releases. Every contribution helps us continue our mission.
              </p>
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/donate">
                  Support Roboto SAI
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-12 p-6 rounded-lg border border-border bg-muted/20">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Already a donor?</strong> Access to 
                exclusive content is provided via email after your donation is confirmed. 
                If you have any questions, please{" "}
                <Link to="/contact" className="text-accent hover:underline">
                  contact us
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DonorPortal;
