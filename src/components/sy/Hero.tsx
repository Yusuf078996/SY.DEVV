import { useEffect, useRef, useState } from "react";
import { SYMark } from "./primitives";

function Field() {
  const canvas = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const c = canvas.current;
    if (!c) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const pointer = { x: -999, y: -999 };
    let pts: { x: number; y: number }[] = [];

    const build = () => {
      const rect = c.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      c.width = w * dpr;
      c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const gap = w < 640 ? 46 : 34;
      pts = [];
      for (let x = gap / 2; x < w; x += gap) {
        for (let y = gap / 2; y < h; y += gap) pts.push({ x, y });
      }
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        const d = Math.hypot(dx, dy);
        const near = Math.max(0, 1 - d / 190);
        const wob = Math.sin(t / 1600 + p.x * 0.01 + p.y * 0.014) * 1.6;
        const px = p.x + (dx / (d || 1)) * near * 12 + wob;
        const py = p.y + (dy / (d || 1)) * near * 12;
        const r = 0.7 + near * 1.7;
        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fillStyle =
          near > 0.35
            ? `rgba(57,255,136,${0.25 + near * 0.6})`
            : `rgba(241,243,241,${0.09 + near * 0.2})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    const move = (e: PointerEvent) => {
      const rect = c.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };

    build();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", build);
    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", build);
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return <canvas ref={canvas} aria-hidden="true" className="absolute inset-0 h-full w-full" />;
}

export function Hero() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: PointerEvent) =>
      setCoords({ x: Math.round(e.clientX), y: Math.round(e.clientY) });
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden border-b border-line">
      <div className="grid-lines absolute inset-0 opacity-60" />
      <Field />
      <div
        aria-hidden="true"
        className="absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full opacity-[0.13] blur-[120px]"
        style={{ background: "#39ff88" }}
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-between px-5 pb-10 pt-32 sm:px-8 md:pt-40">
        <div className="max-w-4xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="status-dot" />
            <span className="mono-label text-accent">AVAILABLE FOR SELECTED PROJECTS</span>
          </div>

          <h1 className="sr-only">
            SY — Yusuf Suleiman
          </h1>
          <SYMark className="h-auto w-[min(68vw,25rem)] drop-shadow-[0_0_40px_rgba(57,255,136,0.08)] sm:w-[min(48vw,31rem)]" />

          <p className="mono-label mt-6 text-foreground">Software Engineer · Creative Developer</p>

          <p className="mt-10 max-w-2xl text-xl leading-relaxed text-muted sm:text-2xl md:text-[1.75rem]">
            I build digital experiences, web applications, and software that turn ideas into{" "}
            <span className="text-foreground">usable products</span>.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              data-cursor="link"
              className="group relative inline-flex items-center gap-3 border border-accent px-6 py-3 text-sm tracking-tight text-accent transition-colors hover:bg-accent-dark"
            >
              Selected work
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              data-cursor="link"
              className="mono-label link-underline hover:text-foreground"
            >
              START A PROJECT
            </a>
          </div>
        </div>

        <div className="mono-label mt-16 grid grid-cols-2 gap-4 border-t border-line pt-5 md:grid-cols-4">
          <span>NIGERIA · WAT</span>
          <span>14 PROJECTS · 8 LAB ENTRIES</span>
          <span className="hidden md:inline">FULL-STACK / INTERFACE</span>
          <span className="text-right md:text-left">
            X:{String(coords.x).padStart(4, "0")} Y:{String(coords.y).padStart(4, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
