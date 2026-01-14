import { Shield, Eye, Lock, AlertTriangle } from "lucide-react";
import Layout from "@/components/layout/Layout";

const principles = [
  {
    icon: Shield,
    title: "Responsible AI Use",
    description:
      "All AI systems developed or deployed by Roboto SAI undergo rigorous ethical review. We prioritize safety and human oversight in every project.",
  },
  {
    icon: Lock,
    title: "No Sale of Personal Data",
    description:
      "We do not sell, trade, or monetize user data. Privacy is a fundamental right, not a product feature to be negotiated.",
  },
  {
    icon: Eye,
    title: "Transparency in Research",
    description:
      "Our research methods, findings, and limitations are documented openly. We believe the AI community benefits from honest, accessible knowledge sharing.",
  },
  {
    icon: AlertTriangle,
    title: "Clear Demo Labeling",
    description:
      "Educational demonstrations and research prototypes are always clearly labeled. Users should never be confused about what is production-ready versus experimental.",
  },
];

const Governance = () => {
  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ethics & Governance
            </h1>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Our governance principles are not aspirational statements—they are operational 
              commitments that guide every decision we make. We believe that ethical AI 
              development requires more than good intentions; it requires clear, enforceable standards.
            </p>

            <div className="space-y-8">
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="p-6 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <principle.icon className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {principle.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 rounded-lg border border-accent/30 bg-accent/5">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Our Commitment
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These principles are reviewed annually and updated as the AI landscape evolves. 
                We welcome feedback from the community and are committed to continuous improvement 
                in our ethical practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Governance;
