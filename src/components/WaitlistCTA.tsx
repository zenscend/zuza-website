"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <section
      id="waitlist"
      className="py-24 lg:py-32 border-t border-zuza-border bg-zuza-card relative overflow-hidden"
    >
      {/* Top glow line */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #facc15, transparent)" }}
      />
      <div
        className="absolute inset-x-0 top-[-30%] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 80% at 50% 0%, rgba(250,204,21,0.06) 0%, transparent 100%)",
        }}
      />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-zuza-yellow">
          Early Access
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white">
          Be First in Line
          <br />
          When We Launch
        </h2>
        <p className="text-lg mb-10 max-w-md mx-auto text-zuza-muted">
          Join hundreds of vendors already waiting to transform their businesses
          with Zuza. No spam, just your early access invite.
        </p>

        {status === "success" ? (
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-zuza-yellow-dim flex items-center justify-center">
              <Check size={28} color="#facc15" strokeWidth={2.5} />
            </div>
            <p className="font-bold text-lg text-white">You&apos;re on the list!</p>
            <p className="text-sm text-zuza-muted">
              Check your inbox — a confirmation email is on its way to{" "}
              <span className="text-white font-medium">{email}</span>.
            </p>
          </div>
        ) : (
          <>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === "loading"}
                placeholder="Enter your email address"
                className="flex-1 rounded-xl px-4 py-3.5 text-sm border border-zuza-border bg-zuza-surface text-white placeholder:text-zuza-subtle transition-colors focus:border-zuza-yellow focus:outline-none disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 font-bold px-6 py-3.5 rounded-xl bg-zuza-yellow hover:bg-zuza-yellow-hover text-black transition-colors text-sm whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Join Waiting List
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>

            {status === "error" && (
              <p className="mt-4 text-sm text-red-400">{errorMsg}</p>
            )}
          </>
        )}

        <p className="text-xs mt-6 text-zuza-faint">
          By joining you agree to receive product updates. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
