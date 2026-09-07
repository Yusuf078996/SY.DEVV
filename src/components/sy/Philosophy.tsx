import { Reveal } from "./primitives";

const traits = ["Functional", "Fast", "Responsive", "Visually intentional", "Easy to use", "Technically sound"];

export function Philosophy() {
  return (
    <section aria-labelledby="philosophy-title" className="relative border-y border-line bg-surface">
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-72 w-72 rounded-full opacity-[0.1] blur-[110px]"
        style={{ background: "#39ff88" }}
      />
      <div className="relative mx-auto max-w-[1400px] px-5 py-28 sm:px-8 md:py-40">
        <Reveal>
          <span className="mono-label">06 / PHILOSOPHY</span>
          <h2
            id="philosophy-title"
            className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-7xl md:text-8xl"
          >
            BUILD WITH
            <br />
            PURPOSE<span className="text-accent">.</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-14 max-w-3xl text-2xl leading-snug text-muted sm:text-3xl md:text-4xl">
            Good software should <span className="text-foreground">work beautifully</span>.
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {traits.map((t, i) => (
            <Reveal as="li" key={t} delay={i * 50}>
              <div className="group flex items-baseline justify-between gap-4 bg-background px-6 py-8">
                <span className="text-xl font-medium tracking-tight md:text-2xl">{t}</span>
                <span className="mono-label text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
