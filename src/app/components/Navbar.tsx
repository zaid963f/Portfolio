"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Certificates", href: "/certificates" },
  { name: "Contact", href: "/contact" },
];

const githubUrl = "https://github.com/zaid963f";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed left-1/2 top-5 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[var(--nav-background)] shadow-[0_10px_35px_rgba(0,0,0,0.12)]">

        {/* Main Bar */}
        <div className="flex h-[68px] items-center justify-between px-5 sm:px-6">

          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="shrink-0 text-[17px] font-semibold tracking-tight text-[var(--nav-text)]"
          >
            Zaid{" "}
            <span className="text-[var(--nav-accent)]">
              Fotaena
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[13px] font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-[var(--nav-accent)]"
                      : "text-[var(--nav-muted)] hover:text-[var(--nav-text)]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* GitHub */}
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-lg border border-white/15 px-4 py-2 text-[13px] font-medium text-[var(--nav-text)] transition-all duration-200 hover:border-[var(--nav-accent)] hover:text-[var(--nav-accent)] md:flex"
          >
            GitHub
            <ArrowUpRight size={14} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-[var(--nav-text)] transition-colors duration-200 hover:border-[var(--nav-accent)] hover:text-[var(--nav-accent)] md:hidden"
          >
            {isOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen
              ? "max-h-[420px] border-t border-white/10 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-5 pb-5 pt-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block border-b border-white/10 py-3.5 text-[14px] font-medium transition-colors ${
                    isActive
                      ? "text-[var(--nav-accent)]"
                      : "text-[var(--nav-muted)] hover:text-[var(--nav-text)]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Mobile GitHub */}
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-[13px] font-medium text-[var(--nav-text)] transition-colors duration-200 hover:border-[var(--nav-accent)] hover:text-[var(--nav-accent)]"
            >
              GitHub
              <ArrowUpRight size={15} />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}