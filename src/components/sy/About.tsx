import { Reveal, SectionHead } from "./primitives";

const meta = [
  { k: "NAME", v: "Yusuf Suleiman" },
  { k: "IDENTITY", v: "SY" },
  { k: "FIELD", v: "Software Engineering / Web Development" },
  { k: "LOCATION", v: "Nigeria" },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-[1400px] px-5 py-28 sm:px-8 md:py-40">
      <SectionHead
        id="about-title"
        label="02 / ABOUT"
        title="Engineering + design, in the same head."
        note="A software engineering student building websites, web applications, digital products and experimental software."
      />

      <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
        <Reveal>
          <blockquote className="text-3xl font-medium leading-[1.15] sm:text-4xl md:text-5xl">
            I enjoy taking an idea that exists only in someone&apos;s head and turning it into
            something people can <span className="text-accent">actually interact with</span>.
          </blockquote>
        </Reveal>

        <div className="space-y-10">
          <Reveal delay={80}>
            <div className="space-y-5 text-base leading-relaxed text-muted">
              <p>
                I work across engineering and design, which means the interface and the system
                underneath it get decided together instead of one being bolted onto the other.
              </p>
              <p>
                Writing the code is the middle of the job. Around it sits user experience, interface
                design, performance, architecture, product thinking, branding, deployment, and
                whether the thing actually holds up when a real person opens it on a slow phone.
              </p>
              <p>
                Most of what I build starts as my own idea — a brand, a platform, a small tool I
                wanted to exist. That is where NAPEPGO, VONZALE and ACYNOVA came from.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <dl className="divide-y divide-line border-y border-line">
              {meta.map((m) => (
                <div key={m.k} className="group flex items-baseline justify-between gap-6 py-4">
                  <dt className="mono-label transition-colors group-hover:text-accent">{m.k}</dt>
                  <dd className="text-right text-sm text-foreground">{m.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
