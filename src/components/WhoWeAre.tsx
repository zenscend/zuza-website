import { Check } from "lucide-react";
import Image from "next/image";

const points = [
  "Streamlined operations — less admin, more selling",
  "Smart stock management with real-time visibility",
  "Access to a network of trusted suppliers and partners",
  "Data-driven insights to grow your bottom line",
];

export default function WhoWeAre() {
  return (
    <section id="about" className="bg-zuza-bg py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Visual: vendor-1 photo */}
          <div className="relative order-last lg:order-first">
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-w-md mx-auto lg:mx-0 border border-zuza-border">
              <Image
                src="/vendor-1.jpg"
                alt="Local vendor at work"
                fill
                className="object-cover object-center"
              />
              {/* Subtle dark overlay at bottom */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(13,13,13,0.6) 0%, transparent 60%)",
                }}
              />
              {/* Yellow top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-zuza-yellow" />
            </div>

            {/* Floating stat card */}
            <div
              className="absolute bottom-8 -right-4 lg:-right-8 rounded-xl border border-zuza-border shadow-2xl px-5 py-4"
              style={{ background: "rgba(17,17,17,0.95)", backdropFilter: "blur(12px)" }}
            >
              <p className="text-xs text-zuza-subtle mb-1">Avg. time saved</p>
              <p className="text-2xl font-bold text-zuza-yellow">8 hrs</p>
              <p className="text-xs text-zuza-muted">per vendor / week</p>
            </div>

            {/* Second floating card — top left */}
            <div
              className="absolute top-8 -left-4 lg:-left-8 rounded-xl border border-zuza-border shadow-2xl px-4 py-3 flex items-center gap-3"
              style={{ background: "rgba(17,17,17,0.95)", backdropFilter: "blur(12px)" }}
            >
              <div className="w-8 h-8 rounded-lg bg-zuza-yellow-dim flex items-center justify-center shrink-0">
                <span className="text-zuza-yellow text-sm font-bold">↑</span>
              </div>
              <div>
                <p className="text-xs text-zuza-subtle">Avg. revenue uplift</p>
                <p className="text-sm font-bold text-white">+34%</p>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-zuza-yellow">
                Our Mission
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-white">
                Bridging the Gap for
                <br />
                Emerging Vendors
              </h2>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-zuza-muted">
              <p>
                At Zuza, we believe that local vendors are the backbone of our
                economy. However, fragmented supply chains and limited access to
                resources often stall growth.
              </p>
              <p>
                We built Zuza to change that. Our platform streamlines operations,
                optimizes stock management, and opens doors to new market
                opportunities - allowing vendors to focus on what they do best:
                serving their communities and growing their bottom line.
              </p>
            </div>

            <ul className="space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-zuza-yellow-dim2 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} color="#facc15" strokeWidth={3} />
                  </div>
                  <span className="text-sm text-zuza-muted">{point}</span>
                </li>
              ))}
            </ul>

            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 text-sm font-semibold text-zuza-yellow hover:text-zuza-yellow-hover transition-colors"
            >
              Join the waitlist today →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
