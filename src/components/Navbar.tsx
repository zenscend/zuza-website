"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  // { label: "Features", href: "#features" },
  { label: "Team", href: "#team" },
  {label: "Join", href:'#waitlist'}
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zuza-bg border-b border-zuza-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <div className="relative w-10 h-10">
            <Image
              src="/zuza-logo.svg"
              alt="Zuza"
              fill
              sizes="40px"
              className="object-contain"
              unoptimized
            />
          </div>
          {/* <span className="text-white font-bold text-xl tracking-tight">zuza</span> */}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zuza-muted hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://app.zuzatech.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-zuza-muted hover:text-white transition-colors"
          >
            Sign in
          </a>
          <a
            href="#waitlist"
            className="text-sm font-bold px-5 py-2 rounded-lg bg-zuza-yellow hover:bg-zuza-yellow-hover text-black transition-colors"
          >
            Join Waiting List
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-zuza-muted hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-zuza-bg border-t border-zuza-border px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-zuza-muted hover:text-white py-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={() => setOpen(false)}
            className="block w-full bg-zuza-yellow hover:bg-zuza-yellow-hover text-black text-sm font-bold px-4 py-3 rounded-lg text-center transition-colors mt-2"
          >
            Join Waiting List
          </a>
        </div>
      )}
    </header>
  );
}
