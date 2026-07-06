import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zuza-bg border-t border-zuza-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 max-w-xs space-y-4">
          <div className="flex items-center gap-2">
            <div className="relative w-9 h-9">
              <Image
                src="/zuza-logo.svg"
                alt="Zuza"
                fill
                sizes="36px"
                className="object-contain"
                unoptimized
              />
            </div>
          </div>

          <p className="text-sm leading-relaxed text-zuza-subtle">
            Empowering independent vendors across Africa with the tools and
            infrastructure to grow.
          </p>
        </div>

        <div className="border-t border-zuza-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <p className="text-xs text-zuza-faint">
              © {new Date().getFullYear()} Zuza Technologies - Built in South Africa 🇿🇦
            </p>
            <Link
              href="/terms"
              className="text-xs text-zuza-subtle hover:text-zuza-muted transition-colors"
            >
              Terms of Service
            </Link>
          </div>
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
