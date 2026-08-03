import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/LegalPage";

const title = "Terms & Conditions | Arsalan Khattak";
const description =
  "Terms & Conditions for the website and digital marketing services of Arsalan Khattak — scope, payments, results, liability and governing law.";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
});

const SECTIONS: LegalSection[] = [
  {
    heading: "1. Overview",
    paragraphs: [
      'These Terms & Conditions govern your use of this website and any digital marketing services provided by Arsalan Khattak ("I," "me," "my"). By contacting me through this website or engaging my services, you agree to these terms.',
    ],
  },
  {
    heading: "2. Services",
    paragraphs: [
      "I provide SEO, Local SEO, and Social Media Marketing services. The exact scope, deliverables, and timeline for any project are agreed upon separately with each client before work begins, typically following an initial audit and strategy discussion.",
    ],
  },
  {
    heading: "3. Payments",
    paragraphs: [
      "A partial or advance payment is generally required before work begins on a project, covering initial strategy and setup. Remaining balances are structured around agreed milestones or recurring billing, depending on the engagement. Payment terms for a specific project will be confirmed directly with the client before starting.",
    ],
  },
  {
    heading: "4. No Guaranteed Results",
    paragraphs: [
      "Digital marketing, SEO, and social media performance depend on many factors outside my direct control, including search engine algorithm changes, market competition, and platform policies. While I apply proven strategies and report results transparently, I cannot guarantee specific rankings, traffic numbers, or revenue outcomes.",
    ],
  },
  {
    heading: "5. Client Responsibilities",
    paragraphs: [
      "Clients are expected to provide timely access to relevant accounts (e.g. Google Business Profile, social media accounts, website access) and reasonably prompt feedback where needed, as delays on the client's side may affect project timelines and results.",
    ],
  },
  {
    heading: "6. Intellectual Property",
    paragraphs: [
      "Any strategy documents, reports, or custom content I create for a client become the client's property upon full payment, unless otherwise agreed in writing. I retain the right to reference completed projects (with client permission) as portfolio examples.",
    ],
  },
  {
    heading: "7. Limitation of Liability",
    paragraphs: [
      "I am not liable for indirect, incidental, or consequential damages arising from the use of my services, including but not limited to loss of revenue, data, or business opportunities, except where such liability cannot be excluded under applicable law.",
    ],
  },
  {
    heading: "8. Termination",
    paragraphs: [
      "Either party may terminate an ongoing engagement with reasonable written notice. Any work completed and payments due up to the termination date remain payable.",
    ],
  },
  {
    heading: "9. Changes to These Terms",
    paragraphs: [
      "These terms may be updated from time to time. Continued use of this website or my services after changes are posted constitutes acceptance of the updated terms.",
    ],
  },
  {
    heading: "10. Governing Law",
    paragraphs: [
      "These Terms & Conditions are governed by the laws of Pakistan.",
    ],
  },
  {
    heading: "11. Contact",
    paragraphs: [
      "For any questions about these terms, please reach out via the contact form on this website or through WhatsApp.",
    ],
  },
];

function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      lastUpdated="04 Aug 2026"
      sections={SECTIONS}
    />
  );
}
