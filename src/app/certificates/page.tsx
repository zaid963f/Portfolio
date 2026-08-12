import Image from "next/image";
import { ArrowUpRight, Award } from "lucide-react";

const featuredCertificates = [
  {
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta · Coursera",
    image: "/certificates/meta-professional.jpeg",
    link: "https://www.coursera.org/account/accomplishments/specialization/V3WM9J17S4KS?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
  },
  {
    title: "Front End Development Certification",
    issuer: "freeCodeCamp",
    image: "/certificates/freecodecamp.jpg",
    link: "https://www.freecodecamp.org/certification/zaid_fotaena/responsive-web-design",
  },
];

const courseCertificates = [
  {
    title: "Introduction to Front-End Development",
    issuer: "Meta · Coursera",
    image: "/certificates/meta-course-1.png",
    link: "https://www.coursera.org/account/accomplishments/verify/3Y1ZKM0AJ97P?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    title: "Programming with JavaScript",
    issuer: "Meta · Coursera",
    image: "/certificates/meta-course-2.png",
    link: "https://www.coursera.org/account/accomplishments/verify/HOWWKHIFQTCO?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    title: "Version Control",
    issuer: "Meta · Coursera",
    image: "/certificates/meta-course-3.png",
    link: "https://www.coursera.org/account/accomplishments/verify/0U16DFZOJXDI?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    title: "HTML and CSS in Depth",
    issuer: "Meta · Coursera",
    image: "/certificates/meta-course-4.png",
    link: "https://www.coursera.org/account/accomplishments/verify/M3ADMW7H9DTN?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    title: "React Basics",
    issuer: "Meta · Coursera",
    image: "/certificates/meta-course-5.png",
    link: "https://www.coursera.org/account/accomplishments/verify/7RXOOEB7FXTR?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    title: "Advanced React",
    issuer: "Meta · Coursera",
    image: "/certificates/meta-course-6.png",
    link: "https://www.coursera.org/account/accomplishments/verify/U7FL62TE6BET?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    title: "Principles of UX/UI Design",
    issuer: "Meta · Coursera",
    image: "/certificates/meta-course-7.png",
    link: "https://www.coursera.org/account/accomplishments/verify/7418A5VL4SWK?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    title: "Front-End Developer Capstone",
    issuer: "Meta · Coursera",
    image: "/certificates/meta-course-8.png",
    link: "https://www.coursera.org/account/accomplishments/verify/FD1WVS5T81A2?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    title: "Coding Interview Preparation",
    issuer: "Meta · Coursera",
    image: "/certificates/meta-course-9.png",
    link: "https://coursera.org/share/cde809d6c0d9a0920ecdf0d8ffefd1f3",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-[var(--background)] py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium tracking-wide text-[var(--primary)]">
            Certifications
          </p>

          <h2 className="text-3xl font-semibold tracking-[-0.035em] text-[var(--text-main)] sm:text-4xl lg:text-5xl">
            Learning & Certifications
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--text-muted)] sm:text-lg sm:leading-8">
            A collection of professional certifications and courses that
            represent my continuous learning and development in frontend
            technologies.
          </p>
        </div>

        {/* Featured Certifications */}
        <div className="mt-14 lg:mt-16">
          <div className="mb-7 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
              <Award size={18} />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[var(--text-main)]">
                Featured Certifications
              </h3>

              <p className="mt-0.5 text-sm text-[var(--text-muted)]">
                Professional certifications and major achievements
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {featuredCertificates.map((certificate) => (
              <a
                key={certificate.title}
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/30 hover:shadow-[0_15px_40px_rgba(0,0,0,0.07)]"
              >
                {/* Certificate Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-muted)]">
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />

                  <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[var(--text-main)] opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                {/* Info */}
                <div className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <h4 className="text-base font-semibold text-[var(--text-main)]">
                      {certificate.title}
                    </h4>

                    <p className="mt-1 text-sm text-[var(--text-muted)]">
                      {certificate.issuer}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-[var(--text-light)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--primary)]"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Course Certificates */}
        <div className="mt-20 lg:mt-24">
          <div className="mb-7">
            <h3 className="text-lg font-semibold text-[var(--text-main)]">
              Course Certificates
            </h3>

            <p className="mt-1 text-sm text-[var(--text-muted)]">
              Individual courses and specialized learning achievements
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {courseCertificates.map((certificate) => (
              <a
                key={certificate.title}
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/30 hover:shadow-[0_12px_35px_rgba(0,0,0,0.06)]"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-muted)]">
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/10">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--text-main)] opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100">
                      <ArrowUpRight size={17} />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h4 className="text-sm font-semibold leading-5 text-[var(--text-main)]">
                    {certificate.title}
                  </h4>

                  <p className="mt-2 text-xs text-[var(--text-muted)]">
                    {certificate.issuer}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-[var(--border)] pt-7">
          <p className="text-sm leading-6 text-[var(--text-light)]">
            Continuously learning and expanding my knowledge through practical
            projects and structured courses.
          </p>
        </div>
      </div>
    </section>
  );
}