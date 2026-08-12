import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-[var(--background)]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-12 pt-28 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20 lg:px-8 lg:pb-16 lg:pt-28">
        {/* Image - Mobile First */}
        <div className="order-1 mb-10 flex justify-center lg:order-2 lg:mb-0 lg:justify-end">
          <div className="relative h-[330px] w-[260px] overflow-hidden rounded-[1.75rem] bg-[var(--surface-muted)] sm:h-[400px] sm:w-[310px] lg:h-[560px] lg:w-full lg:max-w-[400px] lg:rounded-[2rem]">
            <Image
              src="/image/Full.JPG"
              alt="Zaid Fotaena"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="order-2 max-w-2xl text-center lg:order-1 lg:text-left">
          <p className="mb-3 text-sm font-medium tracking-wide text-[var(--primary)]">
            Front-End Developer
          </p>

          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-[var(--text-main)] sm:text-5xl lg:text-7xl">
            Zaid Fotaena
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[var(--text-muted)] sm:text-lg sm:leading-8 lg:mx-0">
                      I’m a Front-End Developer focused on building modern, responsive, and user-friendly web interfaces. I enjoy turning ideas and designs into functional digital experiences using React and Next.js,
                      while keeping the code clean, maintainable, and well-structured. I care about both the visual details and the overall user experience, from responsive layouts to smooth interactions and thoughtful component architecture.
          </p>

          {/* Actions */}
          <div className="mt-7 flex items-center justify-center gap-5 lg:mt-9 lg:justify-start">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--text-main)] px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[var(--primary)]"
            >
              View Projects
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="https://github.com/zaid963f"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--primary)]"
            >
              GitHub
            </Link>
          </div>

          {/* Technologies */}
          <div className="mt-10 hidden items-center gap-6 border-t border-[var(--border)] pt-6 lg:flex">
            <span className="text-xs text-[var(--text-light)]">
              Working with
            </span>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[var(--text-main)]">
              <span>React</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
