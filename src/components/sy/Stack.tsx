import { useState } from "react";
import { stack, type Tech } from "@/lib/sy-data";
import { Reveal, SectionHead } from "./primitives";

const groups: Tech["category"][] = ["Frontend", "Backend", "Database", "Tools & Infrastructure"];

export function Stack() {
  const [active, setActive] = useState<Tech>(stack[3]!);

  return (
    <section id="stack" aria-labelledby="stack-title" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-[1400px] px-5 py-28 sm:px-8 md:py-40">
        <SectionHead
          id="stack-title"
          label="04 / STACK"
          title="The tools, and what they are for."
          note="Hover or select a technology to read how it is actually used."
        />

        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
          <div className="space-y-10">
            {groups.map((g, gi) => (
              <Reveal key={g} delay={gi * 60}>
                <div className="border-t border-line pt-4">
                  <span className="mono-label">{g}</span>
                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                    {stack
                      .filter((t) => t.category === g)
                      .map((t) => (
                        <button
                          key={t.name}
                          onMouseEnter={() => setActive(t)}
                          onFocus={() => setActive(t)}
                          onClick={() => setActive(t)}
                          data-cursor="link"
                          className={`text-2xl font-medium tracking-tight transition-colors duration-300 sm:text-3xl ${
                            active.name === t.name
                              ? "text-accent"
                              : "text-muted hover:text-foreground"
                          }`}
                        >
                          {t.name}
                        </button>
                      ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="sticky top-28 border border-line bg-background p-6 md:p-8">
              <span className="mono-label text-accent">SELECTED</span>
              <dl className="mt-6 space-y-6">
                <div>
                  <dt className="mono-label">TECHNOLOGY</dt>
                  <dd className="mt-1 text-3xl font-medium tracking-tight">{active.name}</dd>
                </div>
                <div>
                  <dt className="mono-label">CATEGORY</dt>
                  <dd className="mt-1 text-sm">{active.category}</dd>
                </div>
                <div>
                  <dt className="mono-label">USE</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted">{active.use}</dd>
                </div>
                <div>
                  <dt className="mono-label">PROJECTS</dt>
                  <dd className="mt-2 flex items-center gap-3">
                    <span className="font-mono text-sm text-accent">
                      {String(active.projects).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-line-strong">
                      <span
                        className="block h-px bg-accent transition-all duration-500"
                        style={{ width: `${(active.projects / 14) * 100}%` }}
                      />
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
