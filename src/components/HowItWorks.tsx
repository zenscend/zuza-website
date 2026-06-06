const steps = [
  {
    number: "01",
    title: "Join the Waiting List",
    description:
      "Sign up in under 60 seconds. Tell us about your business size, location, and key challenges.",
  },
  {
    number: "02",
    title: "Get Early Access",
    description:
      "Our team onboards you personally — sets up your inventory, connects your suppliers, and configures your dashboard.",
  },
  {
    number: "03",
    title: "Start Growing",
    description:
      "Manage your entire supply chain from one place. Access market insights, place bulk orders, and watch your margins improve.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 border-t border-zuza-border bg-zuza-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-zuza-yellow">
            Getting Started
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Up and Running in Days,
            <br />
            Not Months
          </h2>
          <p className="text-lg text-zuza-muted">
            We handle the complexity so you can stay focused on your customers.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-0 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[2.25rem] left-[22%] right-[22%] h-px bg-zuza-border" />

          {steps.map((step, idx) => (
            <div key={step.number} className="relative lg:pr-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-[4.5rem] h-[4.5rem] rounded-full flex items-center justify-center border border-zuza-border bg-zuza-bg shrink-0 relative z-10">
                  <span className="font-bold text-base text-zuza-yellow">{step.number}</span>
                </div>
                {idx < 2 && (
                  <div className="lg:hidden flex-1 h-px bg-zuza-border" />
                )}
              </div>
              <h3 className="font-bold text-lg mb-3 text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-zuza-subtle">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
