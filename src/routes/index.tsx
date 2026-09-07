import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/sy/Nav";
import { Hero } from "@/components/sy/Hero";
import { Work } from "@/components/sy/Work";
import { About } from "@/components/sy/About";
import { Lab } from "@/components/sy/Lab";
import { Stack } from "@/components/sy/Stack";
import { Journey } from "@/components/sy/Journey";
import { Philosophy } from "@/components/sy/Philosophy";
import { Contact } from "@/components/sy/Contact";
import { Footer } from "@/components/sy/Footer";
import { Cursor } from "@/components/sy/Cursor";

const title = "SY — Yusuf Suleiman | Software Engineer & Creative Developer";
const description =
  "SY is Yusuf Suleiman's personal developer portfolio, showcasing web applications, software projects, experiments, and digital experiences.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Yusuf Suleiman",
          alternateName: "SY",
          jobTitle: "Software Engineer & Creative Developer",
          address: { "@type": "PostalAddress", addressCountry: "NG" },
          email: "mailto:yusufsul123000@gmail.com",
          sameAs: [
            "https://github.com/Yusuf078996",
            "https://www.linkedin.com/in/yusuf-suleiman-51b158370",
            "https://www.instagram.com/dev._.dude/",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Lab />
        <Stack />
        <Journey />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
