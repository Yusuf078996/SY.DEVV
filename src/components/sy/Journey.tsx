import { journey } from "@/lib/sy-data";
import { Reveal, SectionHead } from "./primitives";

export function Journey() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-title"
      className="mx-auto max-w-[1400px] px-5 py-28 sm:px-8 md:py-40"
    >
      <SectionHead
        id="journey-title"
        label="05 / JOURNEY"
        title="How the work got here."
        note="A progression, not a résumé."
      />

      <ol className="border-t border-line">
        {journey.map((j, i) => (
          <Reveal as="li" key={j.phase} delay={i * 40}>
            <div className="group grid gap-3 border-b border-line py-8 transition-colors hover:bg-surface md:grid-cols-[5rem_1fr_1.2fr] md:gap-10 md:px-4">
              <span className="mono-label transition-colors group-hover:text-accent">{j.phase}</span>
              <h3 className="text-2xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-1 md:text-3xl">
                {j.title}
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-muted">{j.body}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
