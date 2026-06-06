import Image from "next/image";

const footerLinks = {
  Product: ["Features", "How It Works", "Changelog"],
  // Company: ["About", "Blog", "Careers", "Press"],
  // Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-zuza-bg border-t border-zuza-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative w-9 h-9">
                <Image
                  src="/zuza-logo.svg"
                  alt="Zuza"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              {/* <span className="text-white font-bold text-lg">zuza</span> */}
            </div>

            <p className="text-sm leading-relaxed max-w-xs text-zuza-subtle">
              Empowering independent vendors across Africa with the tools and
              infrastructure to grow.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="font-semibold text-sm mb-4 text-white">{group}</p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-zuza-subtle hover:text-zuza-muted transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-zuza-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zuza-faint">
            © {new Date().getFullYear()} Zuza Technologies - Built in South Africa 🇿🇦
          </p>
          <a
            href="#waitlist"
            className="text-xs font-bold px-4 py-2 rounded-lg bg-zuza-yellow hover:bg-zuza-yellow-hover text-black transition-colors"
          >
            Join Waiting List
          </a>
        </div>
      </div>
    </footer>
  );
}
