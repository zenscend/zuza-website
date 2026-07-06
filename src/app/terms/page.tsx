import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Zuza",
  description:
    "Terms governing use of zuzatech.com, the Zuza early access waitlist, and the Zuza Founding Vendor Programme.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="pt-16 bg-zuza-bg">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-zuza-muted hover:text-white transition-colors mb-10"
            >
              <ArrowLeft size={16} />
              Back to home
            </Link>

            <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-zuza-yellow">
              Legal
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Terms of Service
            </h1>
            <p className="text-sm text-zuza-faint mb-16">
              Last updated: 6 July 2026
            </p>

            <div className="space-y-12 text-base leading-relaxed text-zuza-muted">
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">1. Overview</h2>
                <p>
                  These Terms of Service (&quot;Terms&quot;) are entered into between
                  Zuza Technologies (Pty) Ltd (&quot;Zuza&quot;, &quot;we&quot;, &quot;us&quot;) and anyone who
                  uses zuzatech.com, joins our early access waitlist, or participates
                  in the Zuza Founding Vendor Programme (the &quot;Programme&quot;). By using
                  the site or joining the waitlist, you agree to the sections below
                  that apply to you.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">2. Joining the Waitlist</h2>
                <p>
                  Joining our early access waitlist only requires an email address.
                  It does not enrol you in the Founding Vendor Programme or require
                  you to share any business information. We&apos;ll use your email to
                  send you early access updates about Zuza, and you can unsubscribe
                  at any time.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">3. The Founding Vendor Programme</h2>
                <p>
                  The Programme is a separate, opt-in pilot for vendors. Its purpose
                  is to help Zuza understand how food vendors purchase stock, manage
                  inventory, and grow their businesses, while we develop technology
                  that improves restocking, ordering, and supplier access. Vendors
                  who join the Programme do so voluntarily and separately confirm
                  their participation and business details with Zuza.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">4. Programme Benefits</h2>
                <p>Founding Vendors may receive:</p>
                <ul className="list-disc pl-5 space-y-1.5 marker:text-zuza-subtle">
                  <li>Access to the Zuza platform</li>
                  <li>Early access to new features</li>
                  <li>Business support</li>
                  <li>Stock recommendations</li>
                  <li>Supplier opportunities</li>
                  <li>Up to R2,500 worth of promotional stock incentives, subject to Programme rules and availability</li>
                </ul>
                <p>Participation does not guarantee future incentives or payments.</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">5. Founding Vendor Responsibilities</h2>
                <p>Vendors who join the Programme agree to:</p>
                <ul className="list-disc pl-5 space-y-1.5 marker:text-zuza-subtle">
                  <li>Provide accurate business information</li>
                  <li>Allow Zuza to understand normal purchasing patterns</li>
                  <li>Participate in interviews or surveys</li>
                  <li>Share honest feedback</li>
                  <li>Inform Zuza if their business details change</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">6. Data Collection &amp; Privacy</h2>
                <p>
                  For Founding Vendors, Zuza collects and analyses information such as
                  product purchases, sales information voluntarily shared, inventory
                  information, restocking behaviour, and other business operational
                  information, in order to improve Zuza&apos;s products and services.
                </p>
                <p>You understand that:</p>
                <ul className="list-disc pl-5 space-y-1.5 marker:text-zuza-subtle">
                  <li>Your participation is voluntary</li>
                  <li>You may withdraw your consent at any time</li>
                  <li>Your information will not be sold to third parties without your permission</li>
                  <li>Zuza may use aggregated and anonymised information for research and product improvement</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">7. Confidentiality</h2>
                <p>
                  Zuza agrees not to publicly disclose confidential business
                  information belonging to a vendor without permission, unless
                  required by law.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">8. No Employment Relationship</h2>
                <p>
                  Use of the site, joining the waitlist, or participating in the
                  Programme does not create an employment, partnership, agency, or
                  joint venture relationship between Zuza and you.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">9. Voluntary Participation &amp; Termination</h2>
                <p>
                  You may leave the waitlist or the Programme at any time by
                  notifying Zuza. Zuza may also remove a vendor from the Programme
                  if necessary.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">10. Limitation of Liability</h2>
                <p>
                  Zuza provides the Programme on a pilot basis and does not
                  guarantee increased profits, sales growth, stock availability, or
                  business success. Participation is voluntary.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">11. Governing Law</h2>
                <p>
                  These Terms are governed by the laws of the Republic of South
                  Africa.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
