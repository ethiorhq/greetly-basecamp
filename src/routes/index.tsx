import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import portraitAsset from "@/assets/arsalan-portrait.png.asset.json";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=923118099156&text&type=phone_number&app_absent=0";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Arsalan Khattak — Digital Marketing Specialist" },
      {
        name: "description",
        content:
          "Arsalan Khattak helps businesses grow online and generate more leads through SEO, Local SEO, and Social Media Marketing.",
      },
      { property: "og:title", content: "Arsalan Khattak — Digital Marketing Specialist" },
      {
        property: "og:description",
        content:
          "SEO, Local SEO, and Social Media Marketing that grow your online presence and generate real leads.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Arsalan Khattak — Digital Marketing Specialist" },
      {
        name: "twitter:description",
        content:
          "SEO, Local SEO, and Social Media Marketing that grow your online presence and generate real leads.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Ambient vignette + grid glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(1 0 0 / 0.04), transparent 60%), radial-gradient(ellipse 60% 50% at 100% 100%, oklch(0.96 0.24 115 / 0.06), transparent 70%)",
        }}
      />

      <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Portrait — first on mobile, right on desktop */}
          <div className="relative order-first flex items-end justify-center lg:order-last lg:col-span-5">
            {/* Yellow shoulder glow */}
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 h-[70%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(ellipse at center, oklch(0.96 0.24 115 / 0.35), oklch(0.96 0.24 115 / 0.08) 45%, transparent 70%)",
              }}
            />
            <img
              src={portraitAsset.url}
              alt="Arsalan Khattak, digital marketing specialist, in a black suit"
              width={1024}
              height={1536}
              className="relative z-10 h-auto w-full max-w-[420px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] lg:max-w-none lg:max-h-[85vh]"
              fetchPriority="high"
            />
          </div>

          {/* Text — second on mobile, left on desktop */}
          <div className="order-last lg:order-first lg:col-span-7">
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="h-px w-10 bg-primary"
              />
              <p className="font-sans text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
                Arsalan Khattak
              </p>
            </div>

            <h1
              style={{ fontFamily: "var(--font-display)" }}
              className="mt-6 text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
            >
              Digital Marketing
              <br />
              <span className="text-primary">Specialist.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Helping businesses grow their online presence and generate more
              leads through SEO, Local SEO, and Social Media Marketing.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_60px_-5px_var(--color-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Let's Talk
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <div className="hidden items-center gap-6 pl-2 text-xs uppercase tracking-[0.25em] text-muted-foreground sm:flex">
                <span>SEO</span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                <span>Local SEO</span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                <span>Social Media</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
