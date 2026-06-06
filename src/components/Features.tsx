import { BarChart3, Box, Network, Smartphone, TrendingUp, Zap } from "lucide-react";

const features = [
  {
    icon: Box,
    title: "Smart Inventory Management",
    description:
      "Real-time stock visibility across all your locations. Get alerts before you run out and automate reorder triggers.",
  },
  {
    icon: Network,
    title: "Trusted Supplier Network",
    description:
      "Access a vetted network of suppliers and wholesalers. Compare prices, place bulk orders, and negotiate better deals.",
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    description:
      "Understand your sales trends, best-selling products, and customer behaviour with intuitive dashboards.",
  },
  {
    icon: Zap,
    title: "Streamlined Operations",
    description:
      "Eliminate manual paperwork. Manage orders, invoices, and deliveries from one centralised hub.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Run your business from anywhere. Optimized for low-bandwidth connections across the continent.",
  },
  {
    icon: TrendingUp,
    title: "Growth Tools",
    description:
      "Access financing options, business development resources, and a community of fellow vendors ready to grow.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 border-t border-zuza-border bg-zuza-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-zuza-yellow">
            Platform Features
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Everything You Need to Scale
          </h2>
          <p className="text-lg text-zuza-muted">
            One platform built for the challenges independent vendors face
            across Africa every day.
          </p>
        </div>

        {/* Grid with gap-px separator lines */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zuza-border">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="p-8 bg-zuza-card hover:bg-zuza-surface2 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 border border-zuza-yellow/15 bg-zuza-yellow-dim">
                  <Icon size={20} color="#facc15" />
                </div>
                <h3 className="font-bold mb-2.5 text-base text-white">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-zuza-subtle">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
