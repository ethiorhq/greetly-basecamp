import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/LegalPage";

const title = "Privacy Policy | Arsalan Khattak";
const description =
  "How Arsalan Khattak collects, uses, and protects information submitted through this website's contact form, analytics, and third-party services.";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
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
      "This Privacy Policy explains how I collect, use, and protect information when you visit this website or contact me through it.",
    ],
  },
  {
    heading: "2. Information I Collect",
    paragraphs: [
      "When you use the contact form on this website, I collect the information you voluntarily submit, which may include your name, email address, and message content. If you contact me via WhatsApp, standard WhatsApp messaging data applies, governed by WhatsApp's own privacy policy.",
      "This website may also use analytics tools (such as Google Analytics) to understand general visitor behavior — such as pages visited and approximate location — which does not personally identify you.",
    ],
  },
  {
    heading: "3. How I Use Your Information",
    paragraphs: [
      "Information submitted through the contact form is used solely to respond to your inquiry and discuss potential services. I do not sell, rent, or share your personal information with third parties for marketing purposes.",
    ],
  },
  {
    heading: "4. Cookies & Analytics",
    paragraphs: [
      "This site may use cookies or similar tracking technologies through analytics services to understand how visitors use the site and improve it over time. You can disable cookies through your browser settings, though this may affect some site functionality.",
    ],
  },
  {
    heading: "5. Data Retention",
    paragraphs: [
      "Contact form submissions and related correspondence are retained only as long as necessary to respond to your inquiry or maintain a business relationship, after which they may be deleted.",
    ],
  },
  {
    heading: "6. Third-Party Services",
    paragraphs: [
      "This site may link to or integrate with third-party services (such as WhatsApp, LinkedIn, Facebook, or Instagram). These platforms have their own privacy policies, and I encourage you to review them separately.",
    ],
  },
  {
    heading: "7. Your Rights",
    paragraphs: [
      "You may request to know what information I hold about you, request corrections, or request deletion of your information at any time by contacting me directly.",
    ],
  },
  {
    heading: "8. Changes to This Policy",
    paragraphs: [
      'This Privacy Policy may be updated periodically. Changes will be reflected with an updated "Last updated" date at the top of this page.',
    ],
  },
  {
    heading: "9. Contact",
    paragraphs: [
      "For any privacy-related questions or requests, please reach out via the contact form on this website or through WhatsApp.",
    ],
  },
];

function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="04 Aug 2026"
      sections={SECTIONS}
    />
  );
}
