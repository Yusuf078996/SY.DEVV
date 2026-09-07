import { useState } from "react";
import { labItems } from "@/lib/sy-data";
import { Reveal, SectionHead } from "./primitives";

const tags = ["ALL", "EXPERIMENTS", "PROTOTYPES", "AI", "WEBGL", "UI", "AUTOMATION", "GAMES", "APIS"];

export function Lab() {
  const [tag, setTag] = useState("ALL");
  const shown = tag === "ALL" ? labItems : labItems.filter((i) => i.tag === tag);

  return (
    <section id="lab" aria-labelledby="lab-title" className="relative border-t border-line bg-surface">
      <div className="grid-lines absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-[1400px] px-5 py-28 sm:px-8 md:py-40">
        <SectionHead
          id="lab-title"
          label="03 / SY LAB"
          title="SY LAB"
          note="Unfinished things, prototypes and experiments kept for the ideas inside them."
        />

        <div className="mb-10 flex flex-wrap gap-x-5 gap-y-2">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              data-cursor="link"
              className={`mono-label transition-colors ${t === tag ? "text-accent" : "hover:text-foreground"}`}
            >
              {t}
            </button>
          ))}
        </div>

        <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {shown.map((item, i) => (
            <Reveal as="li" key={item.name} delay={i * 50}>
              <article className="group relative h-full min-h-[220px] bg-background p-6 transition-colors duration-500 hover:bg-accent-dark/40">
                <div className="flex items-start justify-between">
                  <span className="mono-label text-accent">{item.tag}</span>
                  <span className="mono-label">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-10 text-xl font-medium tracking-tight transition-transform duration-500 group-hover:-translate-y-1">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.note}</p>
                <span className="absolute inset-x-6 bottom-5 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
