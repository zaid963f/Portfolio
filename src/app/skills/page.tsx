import {
  Code2,
  Layout,
  Palette,
  GitBranch,
  Globe,
  Layers3,
} from "lucide-react";
import FadeIn from "@/app/components/animations/FadeIn";

const skills = [
  {
    icon: Code2,
    title: "HTML & CSS",
    description:
      "Building semantic, responsive, and well-structured interfaces with modern HTML and CSS.",
    technologies: ["HTML5", "CSS3", "Responsive Design"],
  },
  {
    icon: Code2,
    title: "JavaScript",
    description:
      "Developing interactive interfaces and handling application logic using modern JavaScript.",
    technologies: ["ES6+", "DOM", "Async / Await"],
  },
  {
    icon: Layers3,
    title: "React",
    description:
      "Creating reusable components and dynamic user interfaces with a component-based approach.",
    technologies: ["React", "Components", "Hooks"],
  },
  {
    icon: Globe,
    title: "Next.js",
    description:
      "Building modern web applications with structured routing, reusable components, and optimized performance.",
    technologies: ["Next.js", "App Router", "Server Components"],
  },
  {
    icon: Palette,
    title: "Tailwind CSS",
    description:
      "Designing clean and responsive interfaces with a utility-first styling approach.",
    technologies: ["Tailwind CSS", "Responsive UI", "Design Systems"],
  },
  {
    icon: Layout,
    title: "UI Implementation",
    description:
      "Turning designs and ideas into polished, responsive interfaces with attention to visual details.",
    technologies: ["Figma", "UI Design", "UX"],
  },
  {
    icon: GitBranch,
    title: "Git & GitHub",
    description:
      "Managing source code, tracking changes, and maintaining projects using modern version control workflows.",
    technologies: ["Git", "GitHub", "Version Control"],
  },
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] pt-28">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">

        {/* Header */}
        <FadeIn>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium tracking-wide text-[var(--primary)]">
              Skills & Expertise
            </p>

            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-[var(--text-main)] sm:text-5xl lg:text-6xl">
              Technologies I use to turn ideas into{" "}
              <span className="text-[var(--primary)]">
                digital experiences.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--text-muted)] sm:text-lg sm:leading-8">
              My focus is on building modern, responsive, and user-friendly web
              interfaces while keeping the code clean, reusable, and
              maintainable.
            </p>
          </div>
        </FadeIn>

        {/* Skills */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <FadeIn
                key={skill.title}
                delay={index * 0.08}
              >
                <article className="group relative h-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/30 hover:shadow-[0_15px_40px_rgba(15,143,104,0.08)]">

                  {/* Number */}
                  <span className="absolute right-6 top-6 text-xs font-medium text-[var(--text-light)]">
                    0{index + 1}
                  </span>

                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--surface-muted)] text-[var(--primary)] transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  {/* Content */}
                  <h2 className="mt-7 text-xl font-semibold tracking-tight text-[var(--text-main)]">
                    {skill.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                    {skill.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {skill.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--text-muted)]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Hover line */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--primary)] transition-all duration-300 group-hover:w-full" />
                </article>
              </FadeIn>
            );
          })}
        </div>

        {/* Bottom statement */}
        <FadeIn delay={0.35}>
          <div className="mt-20 border-t border-[var(--border)] pt-8">
            <p className="max-w-2xl text-sm leading-6 text-[var(--text-light)]">
              I believe good frontend development is not only about writing
              code, but also about creating experiences that are simple,
              accessible, and enjoyable to use.
            </p>
          </div>
        </FadeIn>

      </div>
    </main>
  );
}