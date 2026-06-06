import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-zuza-bg flex items-center pt-16 overflow-hidden">
      {/* Subtle yellow radial glow top-right */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(250,204,21,0.05) 0%, transparent 65%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Copy */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full border border-zuza-yellow/20 bg-zuza-yellow-dim text-zuza-yellow">
              <span className="w-1.5 h-1.5 rounded-full bg-zuza-yellow animate-pulse" />
              Now accepting early vendors
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] tracking-tight text-white">
              Empowering Modern{" "}
              <span className="text-zuza-yellow">Vendors</span>
              <br />
              with Seamless Supply
              <br />
              Chain Solutions.
            </h1>

            <p className="text-lg leading-relaxed max-w-lg text-zuza-muted">
              Zuza connects independent vendors with the tools, inventory, and
              infrastructure they need to grow - backed by Africa&apos;s most
              trusted ecosystems.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center gap-2 font-bold px-6 py-3.5 rounded-xl bg-zuza-yellow hover:bg-zuza-yellow-hover text-black transition-colors text-base"
              >
                Join the Waiting List
                <ArrowRight size={18} />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 font-semibold px-6 py-3.5 rounded-xl border border-zuza-border hover:border-zuza-border2 text-white transition-colors text-base"
              >
                See how it works
              </a>
            </div>

            {/* Stats */}
            {/* <div className="flex items-center gap-8 pt-6 border-t border-zuza-border">
              {[
                { val: "500+", label: "Vendors on waitlist" },
                { val: "3+", label: "African markets" },
                { val: "R11k+", label: "In development" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-8">
                  {i > 0 && <div className="w-px h-8 bg-zuza-border" />}
                  <div>
                    <p className="text-2xl font-bold text-white">{stat.val}</p>
                    <p className="text-xs text-zuza-subtle">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right: Vendor photo + dashboard overlay */}
          <div className="relative lg:pl-4">
            {/* Main vendor image */}
            <div className="relative rounded-2xl overflow-hidden border border-zuza-border aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <Image
                src="/vendor-2.jpg"
                alt="Vendor using Zuza on mobile"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Dark gradient from bottom so overlays are readable */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(13,13,13,0.75) 0%, rgba(13,13,13,0.1) 50%, transparent 100%)",
                }}
              />

              {/* Dashboard KPI card — floating bottom-left inside image */}
              <div
                className="absolute bottom-4 left-4 right-4 rounded-xl border border-zuza-border p-3 flex items-center gap-3"
                style={{ background: "rgba(17,17,17,0.9)", backdropFilter: "blur(12px)" }}
              >
                <div className="grid grid-cols-3 gap-2 flex-1">
                  {[
                    { label: "Revenue", val: "R12,450", delta: "↑ 12%", up: true },
                    { label: "Orders", val: "84", delta: "↑ 8%", up: true },
                    { label: "Stock", val: "92%", delta: "↓ 3%", up: false },
                  ].map((kpi) => (
                    <div key={kpi.label} className="text-center">
                      <p className="text-[9px] text-zuza-subtle">{kpi.label}</p>
                      <p className="text-xs font-bold text-white">{kpi.val}</p>
                      <p className={`text-[9px] font-semibold ${kpi.up ? "text-zuza-yellow" : "text-zuza-muted"}`}>
                        {kpi.delta}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating notification — top-right of image */}
            <div
              className="absolute top-4 -right-3 lg:-right-6 rounded-xl px-4 py-3 shadow-2xl flex items-center gap-3 border border-zuza-border"
              style={{ background: "rgba(17,17,17,0.95)", backdropFilter: "blur(12px)" }}
            >
              <div className="w-8 h-8 rounded-lg bg-zuza-yellow-dim2 flex items-center justify-center shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-zuza-yellow" />
              </div>
              <div>
                <p className="text-xs text-zuza-subtle">New order received</p>
                <p className="text-sm font-bold text-white">+R1,240</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
