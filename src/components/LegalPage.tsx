import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { Link } from "@tanstack/react-router";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

export function LegalPage({
  title,
  lastUpdated,
  sections,
}: {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}) {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteNav />

      <main className="mx-auto max-w-[720px] px-6 pb-20 pt-32 sm:px-8 sm:pt-36">
        <h1
          style={{ fontFamily: "var(--font-display)" }}
          className="text-4xl font-bold tracking-normal text-foreground sm:text-5xl"
        >
          {title}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: {lastUpdated}
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2
                style={{ fontFamily: "var(--font-display)" }}
                className="text-xl font-semibold tracking-normal text-foreground"
              >
                {section.heading}
              </h2>
              <div className="mt-3 space-y-4">
                {section.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed text-muted-foreground"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 border-t border-border/60 pt-8">
          <Link
            to="/"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            ← Back to home
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
