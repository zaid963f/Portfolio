import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/app/components/animations/FadeIn";

const projects = [
  {
    title: "Nahdat Al-Sham Web Platform",
    category: "Web Platform",
    description:
      "A modern web Platform built for Nahdat Al-Sham, combining a responsive front-end with API integration and a Telegram bot to create a connected digital experience.",
    status: "Completed",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "API",
      "Telegram Bot",
    ],
    github: "#",
    live: "#",
  },
  {
    title: "Landing Page",
    category: "Front-End",
    description:
      "A modern and responsive landing page focused on clean visual design, smooth user experience, and a professional presentation of content.",
    status: "Completed",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Midad",
    category: "Task Management System",
    description:
      "A task management platform currently under development, designed to help users organize, manage, and track their tasks through a modern and intuitive interface.",
    status: "In Development",
    technologies: ["Next.js", "API", "React", "TypeScript", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-5 pb-20 pt-32 sm:px-8 lg:px-12">
      <section className="mx-auto max-w-6xl">

        {/* Header */}
        <FadeIn>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--primary)]">
              My work
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-[var(--text-main)] sm:text-5xl lg:text-6xl">
              Selected <span className="text-[var(--primary)]">projects.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--text-muted)] sm:text-lg">
              A collection of projects I've worked on, from modern web
              platforms and landing pages to full-scale applications.
            </p>
          </div>
        </FadeIn>

        {/* Projects */}
        <div className="mt-14 space-y-6">
          {projects.map((project, index) => (
            <FadeIn
              key={project.title}
              delay={index * 0.12}
            >
              <article
                className="group rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] sm:p-8"
              >
                <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

                  {/* Project Info */}
                  <div className="max-w-3xl">

                    {/* Category + Status */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-sm font-medium text-[var(--primary)]">
                        0{index + 1}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-[var(--text-light)]" />

                      <span className="text-sm text-[var(--text-muted)]">
                        {project.category}
                      </span>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          project.status === "In Development"
                            ? "bg-[var(--surface-muted)] text-[var(--text-muted)]"
                            : "bg-[var(--primary)]/10 text-[var(--primary)]"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="mt-5 text-2xl font-semibold tracking-tight text-[var(--text-main)] sm:text-3xl">
                      {project.title}
                    </h2>

                    {/* Description */}
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--text-muted)] sm:text-base">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-xs font-medium text-[var(--text-muted)]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex shrink-0 gap-3 lg:pt-1">

                    {/* GitHub */}
                    {project.github !== "#" && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--text-main)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
                        aria-label={`${project.title} GitHub`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-[18px] w-[18px] fill-current"
                        >
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-1.026-.014-1.862-2.782.604-3.369-1.187-3.369-1.187-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.607.069-.607 1.004.071 1.532 1.03 1.532 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.6 9.6 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.417-.012 2.747 0 .267.18.578.688.48A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
                        </svg>
                      </Link>
                    )}

                    {/* Live Project */}
                    {project.live !== "#" && (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-11 items-center gap-2 rounded-xl bg-[var(--primary)] px-4 text-sm font-medium text-white transition-colors hover:bg-[var(--primary-hover)]"
                      >
                        View Project
                        <ArrowUpRight size={16} />
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Bottom Note */}
        <FadeIn delay={0.4}>
          <div className="mt-12 border-t border-[var(--border)] pt-8">
            <p className="text-sm text-[var(--text-muted)]">
              More projects and experiments will be added as I continue
              building.
            </p>
          </div>
        </FadeIn>

      </section>
    </main>
  );
}