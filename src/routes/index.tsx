import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, TrendingUp, MapPin, Share2, Send, Linkedin, Instagram, Facebook, Award, ChevronDown, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import portraitAsset from "@/assets/arsalan-portrait.png.asset.json";
import certAsset from "@/assets/cert.png.asset.json";
import { SiteNav } from "@/components/SiteNav";

const WHATSAPP_PHONE = "923118099156";
const WHATSAPP_URL = `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text&type=phone_number&app_absent=0`;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => {
    const description =
      "My goal is to help businesses attract the right audience, build trust, and achieve long-term growth through proven digital marketing solutions.";
    const title = "Arsalan Khattak | Digital Marketing Specialist";
    const siteUrl = "https://arsalankhattak.com/";
    const personId = `${siteUrl}#person`;

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": personId,
          name: "Arsalan Khattak",
          jobTitle: "Digital Marketing Specialist",
          url: siteUrl,
          image: portraitAsset.url,
          sameAs: [
            "https://www.linkedin.com/in/arsalan-local-seo-specialist/",
            "https://www.facebook.com/arsalankhattaks",
          ],
        },
        {
          "@type": "Service",
          serviceType: "SEO",
          provider: { "@id": personId },
          description:
            "Rank higher on Google with technical fixes, keyword strategy, and content that pulls in the right traffic.",
        },
        {
          "@type": "Service",
          serviceType: "Local SEO",
          provider: { "@id": personId },
          description:
            "Optimize your Google Business Profile so nearby customers find you first when they're ready to buy.",
        },
        {
          "@type": "Service",
          serviceType: "Social Media Marketing",
          provider: { "@id": personId },
          description:
            "Build a magnetic brand presence with strategy, content, and engagement that turns followers into leads.",
        },
      ],
    };

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "/" },
        { property: "og:image", content: portraitAsset.url },
        { property: "og:image:alt", content: "Arsalan Khattak — Digital Marketing Specialist" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: portraitAsset.url },
      ],
      links: [{ rel: "canonical", href: "/" }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(structuredData),
        },
      ],
    };
  },
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <SiteNav />
      {/* Ambient vignette + grid glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(1 0 0 / 0.04), transparent 60%), radial-gradient(ellipse 60% 50% at 100% 100%, oklch(0.96 0.24 115 / 0.06), transparent 70%)",
        }}
      />

      <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-16 pt-32 sm:px-8 sm:pt-36 lg:px-12 lg:pt-40">
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
              width={618}
              height={824}
              className="relative z-10 h-auto w-full max-w-[320px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] sm:max-w-[380px] lg:max-w-none lg:max-h-[78vh]"
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

      <ServicesSection />

      <ResultsSection />

      <CertifiedExpertiseSection />

      <AboutSection />

      <FAQSection />

      <ContactSection />

      <SiteFooter />
    </main>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.134 1.585 5.939L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function SiteFooter() {
  const socials = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/arsalan-local-seo-specialist/", Icon: Linkedin },
    { name: "Facebook", href: "https://www.facebook.com/arsalankhattaks", Icon: Facebook },
    { name: "Instagram", href: "https://www.instagram.com/arsalankhattaks", Icon: Instagram },
    { name: "WhatsApp", href: WHATSAPP_URL, Icon: WhatsAppIcon },
  ];

  return (
    <footer className="relative border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 sm:px-8 lg:px-12 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p
            style={{ fontFamily: "var(--font-display)" }}
            className="text-lg font-semibold text-foreground"
          >
            Arsalan Khattak
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Digital Marketing Specialist — SEO, Local SEO & Social Media.
          </p>
        </div>

        <nav aria-label="Social links" className="flex items-center gap-3">
          {socials.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-200 hover:border-primary/60 hover:text-primary focus:outline-none focus-visible:border-primary/60 focus-visible:text-primary"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-border/40">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-5 sm:px-8 lg:flex-row lg:items-center lg:px-12">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
            <span>© 2026 Arsalan Khattak. All rights reserved.</span>
            <span aria-hidden="true" className="text-border">|</span>
            <Link to="/terms" className="transition-colors hover:text-primary">
              Terms &amp; Conditions
            </Link>
            <span aria-hidden="true" className="text-border">|</span>
            <Link to="/privacy" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            Built by{" "}
            <a
              href="https://ethior.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary transition-all duration-200 hover:underline hover:drop-shadow-[0_0_10px_var(--color-primary)]"
            >
              ETHIOR
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your name." })
    .max(80, { message: "Name is too long." }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email." })
    .max(120, { message: "Email is too long." }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Please write at least 10 characters." })
    .max(800, { message: "Message must be under 800 characters." }),
});

type ContactErrors = Partial<Record<"name" | "email" | "message", string>>;

function ContactSection() {
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const parsed = contactSchema.safeParse({
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
    });

    if (!parsed.success) {
      const next: ContactErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ContactErrors;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setStatus(null);
      return;
    }

    setErrors({});
    const { name, email, message } = parsed.data;
    const text = `Hi Arsalan, I'm ${name} (${email}).\n\n${message}`;
    const url = `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
      text,
    )}&type=phone_number&app_absent=0`;
    window.open(url, "_blank", "noopener,noreferrer");
    form.reset();
    setStatus("Opening WhatsApp…");
    window.setTimeout(() => setStatus(null), 4000);
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground/60 transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 focus:shadow-[0_0_30px_-8px_var(--color-primary)]";
  const labelClass =
    "block text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground";
  const errorClass = "mt-1 text-xs text-destructive";

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-4xl px-6 py-14 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-10 bg-primary" />
          <p className="font-sans text-xs font-medium uppercase tracking-[0.35em] text-primary">
            Contact
          </p>
          <span aria-hidden className="h-px w-10 bg-primary" />
        </div>

        <h2
          style={{ fontFamily: "var(--font-display)" }}
          className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          Ready to Grow Your{" "}
          <span className="text-primary">Business Online?</span>
        </h2>

        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Tell me about your business. I'll reply on WhatsApp.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="mx-auto mt-12 max-w-2xl space-y-6"
      >
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            maxLength={80}
            autoComplete="name"
            placeholder="Your full name"
            aria-invalid={errors.name ? "true" : undefined}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={`mt-2 ${inputClass}`}
          />
          {errors.name ? (
            <p id="contact-name-error" className={errorClass}>
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            maxLength={120}
            autoComplete="email"
            placeholder="you@company.com"
            aria-invalid={errors.email ? "true" : undefined}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={`mt-2 ${inputClass}`}
          />
          {errors.email ? (
            <p id="contact-email-error" className={errorClass}>
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-message" className={labelClass}>
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            maxLength={800}
            placeholder="What are you trying to grow?"
            aria-invalid={errors.message ? "true" : undefined}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            className={`mt-2 resize-y ${inputClass}`}
          />
          {errors.message ? (
            <p id="contact-message-error" className={errorClass}>
              {errors.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col-reverse items-stretch gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <p
            role="status"
            aria-live="polite"
            className={`text-sm ${status ? "text-primary" : "text-transparent"}`}
          >
            {status ?? "placeholder"}
          </p>
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_60px_-5px_var(--color-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Send Message
            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        <p className="text-xs text-muted-foreground">
          By submitting this form, you agree to our{" "}
          <Link to="/privacy" className="underline underline-offset-2 transition-colors hover:text-primary">
            Privacy Policy
          </Link>
          .
        </p>
      </form>

    </section>
  );
}

function CertifiedExpertiseSection() {
  return (
    <section
      id="certification"
      className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-10 bg-primary" />
          <p className="font-sans text-xs font-medium uppercase tracking-[0.35em] text-primary">
            Certification
          </p>
          <span aria-hidden className="h-px w-10 bg-primary" />
        </div>

        <h2
          style={{ fontFamily: "var(--font-display)" }}
          className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          Trained & Certified in{" "}
          <span className="text-primary">Local SEO</span>
        </h2>
      </div>

      <div className="mx-auto mt-12 flex max-w-xl flex-col items-center">
        <a
          href={certAsset.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View full-size Local SEO with AI certificate"
          className="group relative block w-full overflow-hidden rounded-2xl border border-border bg-card p-3 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_20px_60px_-20px_var(--color-primary)] focus:outline-none focus-visible:-translate-y-1 focus-visible:border-primary/60 focus-visible:shadow-[0_20px_60px_-20px_var(--color-primary)]"
        >
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={certAsset.url}
              alt="Local SEO with AI certificate from Skills Heaven, Sharjah UAE"
              width={800}
              height={600}
              className="w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-background/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                <Award className="h-4 w-4" />
                View Certificate
              </div>
            </div>
          </div>
        </a>

        <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground sm:text-base">
          <Award className="h-4 w-4 text-primary" />
          Local SEO with AI — Skills Heaven, Sharjah UAE
        </p>
      </div>
    </section>
  );
}

const STATS: { value: string; label: string }[] = [
  { value: "150+", label: "Rankings Improved" },
  { value: "3x", label: "Local Visibility Growth" },
  { value: "80%", label: "Avg. Engagement Lift" },
];

function AboutSection() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-10 bg-primary" />
          <p className="font-sans text-xs font-medium uppercase tracking-[0.35em] text-primary">
            About
          </p>
          <span aria-hidden className="h-px w-10 bg-primary" />
        </div>

        <h2
          style={{ fontFamily: "var(--font-display)" }}
          className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl"
        >
          My goal is to help businesses attract the right audience,
          build trust, and achieve{" "}
          <span className="text-primary">long-term growth</span> through
          proven digital marketing solutions.
        </h2>
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
        {STATS.map(({ value, label }) => (
          <div
            key={label}
            className="flex flex-col items-center text-center"
          >
            <div
              style={{ fontFamily: "var(--font-display)" }}
              className="text-5xl font-bold leading-none tracking-tight text-primary sm:text-6xl lg:text-7xl"
            >
              {value}
            </div>
            <p className="mt-3 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const FAQS: { question: string; answer: string }[] = [
  {
    question: "What's the difference between SEO and Local SEO, and which one do I need?",
    answer:
      "SEO covers your overall search visibility, while Local SEO focuses specifically on getting your business found by nearby customers on Google Maps and local search results. If you serve a specific city or area, Local SEO is where most of your ROI comes from.",
  },
  {
    question: "Do you only handle SEO, or can you manage my social media too?",
    answer:
      "I offer Social Media Marketing alongside SEO — building your brand presence, running campaigns, and turning followers into actual leads. Many clients combine both since search and social work best together.",
  },
  {
    question: "How does a project actually start once I reach out?",
    answer:
      "It starts with a free audit of your current online presence, followed by a custom strategy based on your goals and budget. From there, we agree on scope, timeline, and deliverables before any work begins.",
  },
  {
    question: "Do you require payment upfront?",
    answer:
      "Yes, I typically require an advance/partial payment before starting a project — this covers initial strategy and setup work. The remaining balance is structured around agreed milestones or monthly billing, depending on the project type.",
  },
  {
    question: "How do you measure and report results?",
    answer:
      "I track key metrics — rankings, organic traffic, leads, and engagement — and share regular reports so you can see exactly what's working. Growth in SEO takes time, but you'll always know where things stand.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section
      id="faq"
      className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-10 bg-primary" />
          <p className="font-sans text-xs font-medium uppercase tracking-[0.35em] text-primary">
            FAQ
          </p>
          <span aria-hidden className="h-px w-10 bg-primary" />
        </div>

        <h2
          style={{ fontFamily: "var(--font-display)" }}
          className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          Frequently Asked{" "}
          <span className="text-primary">Questions.</span>
        </h2>
      </div>

      <div className="mx-auto mt-12 max-w-3xl space-y-4 sm:mt-16">
        {FAQS.map(({ question, answer }, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={question}
              className={`rounded-2xl border bg-card transition-all duration-300 ease-out ${
                isOpen
                  ? "border-primary/60 shadow-[0_20px_60px_-20px_var(--color-primary)]"
                  : "border-border hover:border-primary/60"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:p-8"
              >
                <span
                  style={{ fontFamily: "var(--font-display)" }}
                  className={`text-base font-semibold leading-snug transition-colors duration-200 sm:text-lg ${
                    isOpen ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {question}
                </span>
                <span
                  className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    isOpen
                      ? "rotate-180 border-primary/60 bg-primary/10 text-primary"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  <ChevronDown className="h-4 w-4" />
                </span>
              </button>

              <div
                className="grid transition-[grid-template-rows] duration-300 ease-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground sm:px-8 sm:pb-8 sm:text-base">
                    {answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

type Service = {
  icon: LucideIcon;
  name: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    icon: TrendingUp,
    name: "SEO",
    description:
      "Rank higher on Google with technical fixes, keyword strategy, and content that pulls in the right traffic.",
  },
  {
    icon: MapPin,
    name: "Local SEO",
    description:
      "Optimize your Google Business Profile so nearby customers find you first when they're ready to buy.",
  },
  {
    icon: Share2,
    name: "Social Media Marketing",
    description:
      "Build a magnetic brand presence with strategy, content, and engagement that turns followers into leads.",
  },
];

function ServicesSection() {
  return (
    <section
      id="services"
      className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-10 bg-primary" />
          <p className="font-sans text-xs font-medium uppercase tracking-[0.35em] text-primary">
            Services
          </p>
          <span aria-hidden className="h-px w-10 bg-primary" />
        </div>

        <h2
          style={{ fontFamily: "var(--font-display)" }}
          className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          What I Do
        </h2>

        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Three focused services. One goal — more visibility, more leads.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
        {SERVICES.map(({ icon: Icon, name, description }) => (
          <article
            key={name}
            tabIndex={0}
            className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_20px_60px_-20px_var(--color-primary)] focus:outline-none focus-visible:-translate-y-1 focus-visible:border-primary/60 focus-visible:shadow-[0_20px_60px_-20px_var(--color-primary)]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20 group-focus-visible:bg-primary/20">
              <Icon className="h-6 w-6 text-primary" strokeWidth={2} />
            </div>

            <h3
              style={{ fontFamily: "var(--font-display)" }}
              className="mt-6 text-xl font-semibold text-foreground"
            >
              {name}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

type Result = {
  stat: string;
  label: string;
  description: string;
};

const RESULTS: Result[] = [
  {
    stat: "400 → 67,000+",
    label: "Monthly Organic Traffic",
    description:
      "Took a freelance client's website from 400 monthly visitors to over 67,000 through targeted SEO strategy and execution.",
  },
  {
    stat: "Meta Ads",
    label: "Paid Campaign Management",
    description:
      "Built and managed Meta advertising campaigns to drive qualified leads and measurable ROI.",
  },
  {
    stat: "10x Revenue",
    label: "Hairan Travel & Tour",
    description:
      "Delivered a full digital marketing strategy for Hairan Travel & Tour, growing their revenue 10x through SEO and social media marketing.",
  },
];

function ResultsSection() {
  return (
    <section
      id="results"
      className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-10 bg-primary" />
          <p className="font-sans text-xs font-medium uppercase tracking-[0.35em] text-primary">
            Social Proof
          </p>
          <span aria-hidden className="h-px w-10 bg-primary" />
        </div>

        <h2
          style={{ fontFamily: "var(--font-display)" }}
          className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          Results That <span className="text-primary">Speak.</span>
        </h2>

        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Real outcomes from real campaigns.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
        {RESULTS.map(({ stat, label, description }) => (
          <article
            key={label}
            className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_20px_60px_-20px_var(--color-primary)]"
          >
            <div
              style={{ fontFamily: "var(--font-display)" }}
              className="text-4xl font-bold leading-none tracking-tight text-primary sm:text-5xl"
            >
              {stat}
            </div>

            <h3
              style={{ fontFamily: "var(--font-display)" }}
              className="mt-4 text-lg font-semibold leading-snug text-foreground"
            >
              {label}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
