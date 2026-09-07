import { contact } from "@/lib/sy-data";
import { SYMark } from "./primitives";

const socials = [
  { k: "GH", href: contact.github.href, label: "GitHub" },
  { k: "IN", href: contact.linkedin.href, label: "LinkedIn" },
  { k: "IG", href: contact.instagram.href, label: "Instagram" },
  { k: "WA", href: contact.whatsapp.href, label: "WhatsApp" },
  { k: "@", href: contact.email.href, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-end gap-4">
              <SYMark className="h-auto w-24 sm:w-28" />
            </div>
            <p className="mt-5 text-sm text-muted">Software, interfaces &amp; experiments.</p>
          </div>

          <div className="flex flex-col gap-5 md:items-end">
            <ul className="flex gap-3">
              {socials.map((s) => (
                <li key={s.k}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={s.label}
                    data-cursor="open"
                    className="flex h-9 w-9 items-center justify-center border border-line font-mono text-[11px] text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    {s.k}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6">
              <span className="mono-label flex items-center gap-2">
                <span className="status-dot" /> ONLINE
              </span>
              <span className="mono-label">© 2026 SY</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
