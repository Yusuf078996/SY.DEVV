import { useEffect, useRef, useState, type ReactNode } from "react";
import syLogo from "@/assets/sy-logo.png";

export function SYMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <img src={syLogo} alt="" aria-hidden="true" className={`object-contain ${className}`} />
  );
}

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, shown } as const;
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "p" | "h2";
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <As
      // @ts-expect-error polymorphic ref
      ref={ref}
      data-shown={shown}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </As>
  );
}

export function SectionHead({
  id,
  label,
  title,
  note,
}: {
  id: string;
  label: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="mb-14 flex flex-col gap-6 border-t border-line pt-6 md:flex-row md:items-end md:justify-between">
      <div>
        <span className="mono-label">{label}</span>
        <h2 id={id} className="mt-4 text-4xl font-medium sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </div>
      {note ? <p className="max-w-sm text-sm leading-relaxed text-muted">{note}</p> : null}
    </div>
  );
}

export function ProjectGlyph({ seed, className = "" }: { seed: string; className?: string }) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) % 9973;
  const rand = (n: number) => {
    h = (h * 1103515245 + 12345) % 2147483647;
    return (h / 2147483647) * n;
  };
  const lines = Array.from({ length: 7 }, () => ({
    x1: rand(200),
    y1: rand(140),
    x2: rand(200),
    y2: rand(140),
  }));
  const dots = Array.from({ length: 11 }, () => ({ cx: rand(200), cy: rand(140), r: 0.8 + rand(1.6) }));
  const rects = Array.from({ length: 3 }, () => ({
    x: rand(140),
    y: rand(90),
    w: 20 + rand(50),
    h: 14 + rand(40),
  }));

  return (
    <svg viewBox="0 0 200 140" className={className} preserveAspectRatio="none" aria-hidden="true">
      <g stroke="currentColor" strokeOpacity="0.14">
        {Array.from({ length: 9 }, (_, i) => (
          <line key={`v${i}`} x1={i * 25} y1="0" x2={i * 25} y2="140" />
        ))}
        {Array.from({ length: 6 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 28} x2="200" y2={i * 28} />
        ))}
      </g>
      {rects.map((r, i) => (
        <rect
          key={i}
          x={r.x}
          y={r.y}
          width={r.w}
          height={r.h}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.3"
        />
      ))}
      <g stroke="currentColor" strokeOpacity="0.5">
        {lines.map((l, i) => (
          <line key={i} {...l} />
        ))}
      </g>
      {dots.map((d, i) => (
        <circle key={i} {...d} fill="currentColor" fillOpacity={i % 3 === 0 ? 0.9 : 0.35} />
      ))}
    </svg>
  );
}
