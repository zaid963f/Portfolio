import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-5 pb-20 pt-32 sm:px-8 lg:px-12">
      <section className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--primary)]">
            Get in touch
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-[var(--text-main)] sm:text-5xl lg:text-6xl">
            Let's work{" "}
            <span className="text-[var(--primary)]">together.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--text-muted)] sm:text-lg">
            Have a project in mind, a job opportunity, or simply want to
            connect? Feel free to reach out. I'm always open to new
            opportunities and interesting ideas.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">

          {/* Contact Info */}
          <div className="rounded-3xl bg-[var(--nav-background)] p-8 sm:p-10">
            <p className="text-sm font-medium text-[var(--nav-accent)]">
              Contact me
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--nav-text)]">
              Let's start a conversation.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--nav-muted)]">
              Whether you have a project, a job opportunity, or just want to
              talk about web development, you can reach me directly through
              email or messaging.
            </p>

            {/* Email */}
            <a
              href="mailto:your@email.com"
              className="group mt-10 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-200 hover:border-[var(--nav-accent)]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)] text-white">
                <Mail size={19} />
              </span>

              <div className="min-w-0">
                <p className="text-xs text-[var(--nav-muted)]">
                  Email
                </p>

                <p className="mt-1 truncate text-sm font-medium text-[var(--nav-text)] group-hover:text-[var(--nav-accent)]">
                  mzfotaena@gmail.com
                </p>
              </div>

              <ArrowUpRight
                size={17}
                className="ml-auto shrink-0 text-[var(--nav-muted)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--nav-accent)]"
              />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/+963938015141"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-3 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-200 hover:border-[var(--nav-accent)]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)] text-white">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[19px] w-[19px] fill-current"
                >
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.48 0 .13 5.35.13 11.92c0 2.1.55 4.15 1.59 5.95L0 24l6.3-1.65a11.9 11.9 0 0 0 5.74 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.45-8.42ZM12.05 21.78h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.23-.37a9.85 9.85 0 0 1-1.51-5.23C2.17 6.48 6.6 2.05 12.06 2.05c2.64 0 5.12 1.03 6.93 2.85a9.83 9.83 0 0 1 2.88 7c0 5.46-4.44 9.88-9.82 9.88Zm5.42-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.09 4.49.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                </svg>
              </span>

              <div>
                <p className="text-xs text-[var(--nav-muted)]">
                  WhatsApp
                </p>

                <p className="mt-1 text-sm font-medium text-[var(--nav-text)] group-hover:text-[var(--nav-accent)]">
                  Chat with me
                </p>
              </div>

              <ArrowUpRight
                size={17}
                className="ml-auto shrink-0 text-[var(--nav-muted)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--nav-accent)]"
              />
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/Zaid_FT"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-3 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-200 hover:border-[var(--nav-accent)]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)] text-white">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[19px] w-[19px] fill-current"
                >
                  <path d="M21.9 3.2 2.7 10.6c-1.31.53-1.3 1.25-.24 1.57l4.92 1.53 1.89 5.86c.23.64.12.9.78.9.52 0 .75-.24 1.03-.52l2.39-2.32 4.97 3.67c.91.5 1.57.24 1.8-.84l3.25-15.34c.34-1.33-.51-1.93-1.59-1.32ZM8.13 13.35l10.89-6.87c.54-.33 1.03-.15.62.21l-8.81 7.95-.34 3.65-1.36-4.94-1-.31Zm10.29 5.96-4.15-3.07 2.66-2.47c.13-.12.24-.22.39-.35l1.1 5.89Z" />
                </svg>
              </span>

              <div>
                <p className="text-xs text-[var(--nav-muted)]">
                  Telegram
                </p>

                <p className="mt-1 text-sm font-medium text-[var(--nav-text)] group-hover:text-[var(--nav-accent)]">
                  Message me
                </p>
              </div>

              <ArrowUpRight
                size={17}
                className="ml-auto shrink-0 text-[var(--nav-muted)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--nav-accent)]"
              />
            </a>
          </div>

          {/* Social Links */}
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-10">
            <p className="text-sm font-medium text-[var(--primary)]">
              Connect with me
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text-main)]">
              Find me online.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--text-muted)]">
              You can also find my work, projects, and professional profile
              through the links below.
            </p>

            <div className="mt-10 space-y-3">

              {/* GitHub */}
              <Link
                href="https://github.com/zaid963f"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4 transition-all duration-200 hover:border-[var(--primary)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--nav-background)] text-white">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[19px] w-[19px] fill-current"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-1.026-.014-1.862-2.782.604-3.369-1.187-3.369-1.187-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.607.069-.607 1.004.071 1.532 1.03 1.532 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.6 9.6 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.417-.012 2.747 0 .267.18.578.688.48A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
                  </svg>
                </span>

                <div>
                  <p className="text-sm font-medium text-[var(--text-main)]">
                    GitHub
                  </p>

                  <p className="text-xs text-[var(--text-muted)]">
                    View my projects
                  </p>
                </div>

                <ArrowUpRight
                  size={17}
                  className="ml-auto text-[var(--text-light)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--primary)]"
                />
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/zaid-fotaena-48a47631a"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4 transition-all duration-200 hover:border-[var(--primary)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--nav-background)] text-white">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[19px] w-[19px] fill-current"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.287ZM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123ZM3.56 20.452h3.558V8.999H3.56v11.453Z" />
                  </svg>
                </span>

                <div>
                  <p className="text-sm font-medium text-[var(--text-main)]">
                    LinkedIn
                  </p>

                  <p className="text-xs text-[var(--text-muted)]">
                    Connect professionally
                  </p>
                </div>

                <ArrowUpRight
                  size={17}
                  className="ml-auto text-[var(--text-light)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--primary)]"
                />
              </Link>

            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-10 border-t border-[var(--border)] pt-8">
          <p className="text-sm text-[var(--text-muted)]">
            I'm currently open to new opportunities and collaborations.
          </p>
        </div>

      </section>
    </main>
  );
}