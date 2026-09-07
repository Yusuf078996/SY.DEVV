import { useEffect, useState } from "react";
import { SYMark } from "./primitives";

const items = [
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "LAB", href: "#lab" },
  { label: "STACK", href: "#stack" },
  { label: "CONTACT", href: "#contact" },
];

export function Nav() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        compact
          ? "border-b border-line bg-background/72 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label="SY home" className="flex items-center gap-3 text-foreground">
          <SYMark className={compact ? "h-8 w-10" : "h-10 w-12"} />
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {items.map((i) => (
            <li key={i.href}>
              <a
                href={i.href}
                data-cursor="link"
                className="mono-label link-underline transition-colors hover:text-foreground"
              >
                {i.label}
              </a>
            </li>
          ))}
          <li className="flex items-center gap-2 border-l border-line pl-6">
            <span className="status-dot" />
            <span className="mono-label">AVAILABLE</span>
          </li>
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-50 flex h-9 items-center gap-2 border border-line px-3 md:hidden"
        >
          <span className="mono-label text-foreground">{open ? "CLOSE" : "MENU"}</span>
          <span className="flex flex-col gap-[3px]">
            <span
              className={`h-px w-4 bg-accent transition-transform duration-300 ${open ? "translate-y-[2px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-4 bg-accent transition-transform duration-300 ${open ? "-translate-y-[2px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-background transition-[opacity,transform] duration-500 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <div className="grid-lines absolute inset-0 opacity-40" />
        <ul className="relative flex h-full flex-col justify-center gap-2 px-6">
          {items.map((i, idx) => (
            <li key={i.href} className="border-b border-line">
              <a
                href={i.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between py-5"
              >
                <span className="text-4xl font-medium tracking-tight">{i.label}</span>
                <span className="mono-label">0{idx + 1}</span>
              </a>
            </li>
          ))}
          <li className="mt-8 flex items-center gap-2">
            <span className="status-dot" />
            <span className="mono-label">AVAILABLE FOR SELECTED PROJECTS</span>
          </li>
        </ul>
      </div>
    </header>
  );
}
