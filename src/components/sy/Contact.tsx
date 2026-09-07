import { useState, type FormEvent } from "react";
import { contact } from "@/lib/sy-data";
import { Reveal } from "./primitives";

const rows = [
  { k: "WHATSAPP", ...contact.whatsapp, external: true },
  { k: "PHONE", ...contact.phone, external: false },
  { k: "EMAIL", ...contact.email, external: false },
  { k: "GITHUB", ...contact.github, external: true },
  { k: "LINKEDIN", ...contact.linkedin, external: true },
  { k: "INSTAGRAM", ...contact.instagram, external: true },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xgaenrrg", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Form submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mx-auto max-w-[1400px] px-5 py-28 sm:px-8 md:py-40"
    >
      <Reveal>
        <span className="mono-label">07 / CONTACT</span>
        <h2
          id="contact-title"
          className="mt-6 text-5xl font-semibold leading-[0.92] tracking-[-0.05em] sm:text-7xl md:text-[7.5rem]"
        >
          Have an idea?
          <br />
          <span className="text-accent">Let&apos;s build it.</span>
        </h2>
      </Reveal>

      <ul className="mt-20 border-t border-line">
        {rows.map((r, i) => (
          <Reveal as="li" key={r.k} delay={i * 40}>
            <a
              href={r.href}
              {...(r.external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
              data-cursor={r.external ? "open" : "link"}
              className="group flex flex-col gap-1 border-b border-line py-6 transition-colors hover:bg-surface md:flex-row md:items-baseline md:justify-between md:px-4"
            >
              <span className="mono-label transition-colors group-hover:text-accent">{r.k}</span>
              <span className="flex items-center gap-3 text-xl font-medium tracking-tight transition-transform duration-500 group-hover:-translate-x-1 md:text-2xl">
                {r.label}
                <span className="text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {r.external ? "↗" : "→"}
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </ul>

      <form
        action="https://formspree.io/f/xgaenrrg"
        method="POST"
        onSubmit={handleSubmit}
        className="mt-20 grid gap-6 border-t border-line pt-8"
      >
        <label className="grid gap-2">
          <span className="mono-label">NAME</span>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            className="border-b border-line bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-muted focus:border-accent"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2">
          <span className="mono-label">EMAIL</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="border-b border-line bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-muted focus:border-accent"
            placeholder="you@example.com"
          />
        </label>
        <label className="grid gap-2">
          <span className="mono-label">MESSAGE</span>
          <textarea
            name="message"
            required
            rows={5}
            className="resize-y border-b border-line bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-muted focus:border-accent"
            placeholder="Tell me about the idea"
          />
        </label>
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={status === "sending"}
            className="mono-label border border-accent px-5 py-3 text-accent transition-colors hover:bg-accent hover:text-background disabled:cursor-wait disabled:opacity-60"
          >
            {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
          </button>
          <p aria-live="polite" className="mono-label text-muted">
            {status === "success"
              ? "MESSAGE SENT"
              : status === "error"
                ? "COULD NOT SEND. TRY AGAIN."
                : ""}
          </p>
        </div>
      </form>
    </section>
  );
}
