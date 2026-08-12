import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--nav-background)] px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">

        {/* Main Footer */}
        <div className="grid gap-8 md:grid-cols-3 md:items-center">

          {/* Name */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-[var(--nav-text)]"
            >
              Zaid{" "}
              <span className="text-[var(--nav-accent)]">
                Fotaena
              </span>
            </Link>

            <p className="mt-2 text-sm text-[var(--nav-muted)]">
              Front-End Developer
            </p>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <div className="space-y-2 text-sm">
              <p className="select-text text-[var(--nav-muted)]">
                <span className="text-[var(--nav-text)]">
                  Email:
                </span>{" "}
                mzfotaena@gmail.com
              </p>

              <p className="select-text text-[var(--nav-muted)]">
                <span className="text-[var(--nav-text)]">
                  Phone:
                </span>{" "}
                +963 938 015 141
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-3 md:justify-end">

            {/* GitHub */}
            <Link
              href="https://github.com/zaid963f"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-lg border border-white/10 px-3.5 py-2 text-sm text-[var(--nav-muted)] transition-colors duration-200 hover:border-[var(--nav-accent)] hover:text-[var(--nav-accent)]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[17px] w-[17px] fill-current"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-1.026-.014-1.862-2.782.604-3.369-1.187-3.369-1.187-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.607.069-.607 1.004.071 1.532 1.03 1.532 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.6 9.6 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.417-.012 2.747 0 .267.18.578.688.48A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
              </svg>

              GitHub

              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/zaid-fotaena-48a47631a"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-lg border border-white/10 px-3.5 py-2 text-sm text-[var(--nav-muted)] transition-colors duration-200 hover:border-[var(--nav-accent)] hover:text-[var(--nav-accent)]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[17px] w-[17px] fill-current"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.287ZM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123ZM3.56 20.452h3.558V8.999H3.56v11.453Z" />
              </svg>

              LinkedIn

              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col gap-2 text-center text-xs text-[var(--nav-muted)] sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © 2026 Zaid Fotaena. All rights reserved.
          </p>

          <p>
            Built with Next.js & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}