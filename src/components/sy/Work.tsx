import { useEffect, useState } from "react";
import { projects, type Project } from "@/lib/sy-data";
import { Reveal, SectionHead } from "./primitives";

function validExternalUrl(url?: string) {
  if (!url) return undefined;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" || parsed.protocol === "http:" ? url : undefined;
  } catch {
    return undefined;
  }
}

function CaseStudy({ project, onClose }: { project: Project; onClose: () => void }) {
  const liveUrl = validExternalUrl(project.live);
  const sourceUrl = validExternalUrl(project.source);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [onClose]);

  const block = (label: string, body: string) => (
    <div className="min-w-0 border-t border-line pt-4">
      <span className="mono-label">{label}</span>
      <p className="mt-2 break-words text-sm leading-relaxed text-muted">{body}</p>
    </div>
  );

  const listBlock = (label: string, items: string[]) => (
    <div className="border-t border-line pt-4">
      <span className="mono-label">{label}</span>
      <ul className="mt-3 space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm text-muted">
            <span className="text-accent">·</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  const techStack = [
    { label: "Programming languages", items: project.techStack.languages },
    { label: "Frameworks", items: project.techStack.frameworks },
    { label: "Libraries", items: project.techStack.libraries },
    { label: "Tools & technologies", items: project.techStack.tools },
  ].filter((group) => group.items.length > 0);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} case study`}
      className="fixed inset-0 z-[90] overflow-y-auto bg-background/96 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-[1100px] px-5 py-8 sm:px-8">
        <div className="sticky top-0 z-10 -mx-5 flex items-center justify-between border-b border-line bg-background/85 px-5 py-4 backdrop-blur-xl sm:-mx-8 sm:px-8">
          <span className="mono-label text-accent">CASE STUDY / {project.index}</span>
          <button onClick={onClose} className="mono-label text-foreground hover:text-accent">
            CLOSE ✕
          </button>
        </div>

        <div className="mt-10 grid gap-8 sm:mt-14 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="min-w-0">
            <h2 className="break-words text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">{project.name}</h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{project.tagline}</p>
          </div>
          <div className="flex flex-col gap-4 border-t border-line pt-4 md:border-t-0 md:pt-0">
            <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
              <span className="mono-label shrink-0">CATEGORY</span>
              <span className="text-right text-sm text-muted">{project.category}</span>
            </div>
            <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
              <span className="mono-label shrink-0">STATUS</span>
              <span className="text-right text-sm text-accent">{project.status}</span>
            </div>
            <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
              <span className="mono-label shrink-0">ROLE</span>
              <span className="text-right text-sm text-muted">{project.role}</span>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-x-10 gap-y-10 sm:mt-14 md:grid-cols-2 lg:gap-x-14">
          {block("WHAT I BUILT", project.whatIBuilt)}
          {block("WHAT IT DOES", project.whatItDoes)}
          {block("PURPOSE / PROBLEM SOLVED", project.purpose)}
          {listBlock("KEY FEATURES", project.keyFeatures)}
          {block("MY ROLE / CONTRIBUTION", project.role)}

          <div className="border-t border-line pt-4">
            <span className="mono-label">TECH STACK</span>
            <div className="mt-4 space-y-4">
              {techStack.map((group) => (
                <div key={group.label}>
                  <span className="text-[11px] uppercase tracking-wider text-muted/70">{group.label}</span>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="border border-line px-2 py-1 font-mono text-[11px] text-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-6 border-t border-line pt-6">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              data-cursor="open"
              className="mono-label text-foreground link-underline"
            >
              VISIT LIVE PROJECT ↗
            </a>
          ) : null}
          {sourceUrl ? (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noreferrer noopener"
              data-cursor="open"
              className="mono-label text-foreground link-underline"
            >
              SOURCE CODE ↗
            </a>
          ) : null}
        </div>
        <div className="h-20" />
      </div>
    </div>
  );
}

function Row({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <Reveal as="li">
      <button
        onClick={onOpen}
        data-cursor="view"
        className="group relative block w-full border-t border-line py-8 text-left transition-colors hover:bg-surface"
      >
        <div className="grid items-center gap-x-6 gap-y-4 px-1 lg:grid-cols-[4rem_minmax(0,1.1fr)_minmax(0,1fr)_10rem] lg:px-4">
          <span className="mono-label transition-colors group-hover:text-accent">{project.index}</span>

          <div className="min-w-0">
            <span className="block break-words text-2xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-1 sm:text-3xl lg:text-4xl">
              {project.name}
            </span>
          </div>

          <span className="min-w-0 max-w-sm text-sm leading-relaxed text-muted opacity-70 transition-opacity duration-500 group-hover:opacity-100">
            {project.tagline}
          </span>

          <span className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 lg:justify-end">
            <span className="mono-label whitespace-nowrap transition-colors group-hover:text-foreground">PROJECT DETAILS</span>
            <span className="mono-label flex items-center gap-1.5 whitespace-nowrap text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="status-dot" />
              VIEW
            </span>
          </span>
        </div>
      </button>
    </Reveal>
  );
}

export function Work() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="work" aria-labelledby="work-title" className="mx-auto max-w-[1400px] px-5 py-28 sm:px-8 md:py-40">
      <SectionHead
        id="work-title"
        label="01 / WORK"
        title="Fourteen things I built."
        note="Brands, platforms, utilities and games. Open any one for the full case study."
      />

      <ul className="border-b border-line">
        {projects.map((p) => (
          <Row key={p.id} project={p} onOpen={() => setOpen(p)} />
        ))}
      </ul>

      {open ? <CaseStudy project={open} onClose={() => setOpen(null)} /> : null}
    </section>
  );
}
