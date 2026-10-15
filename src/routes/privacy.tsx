import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { brand } from "@/lib/brand";
const title = "Privacy Policy | Huzaifa Bukhari";
const description = "Privacy information for Huzaifa Bukhari\u2019s WhatsApp contact flow and website.";
export const Route = createFileRoute("/privacy")({ component: Page, head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: `${brand.siteUrl}/privacy` }] }) });
const sections: LegalSection[] = [
  {
    "heading": "1. Overview",
    "paragraphs": [
      "This page describes the website contact flow for Huzaifa Bukhari and the information involved when you choose to get in touch."
    ]
  },
  {
    "heading": "2. Contact Form",
    "paragraphs": [
      "The form uses your name, email address and message to prepare a WhatsApp draft in your browser. The website does not save form submissions in an application database or send them by email. Your text is included in the WhatsApp link when you open the draft."
    ]
  },
  {
    "heading": "3. WhatsApp and Email",
    "paragraphs": [
      "You decide whether to send the draft in WhatsApp. Messages sent through WhatsApp or directly by email are used to respond to your inquiry and discuss potential services. WhatsApp’s own privacy policy applies to its service."
    ]
  },
  {
    "heading": "4. Analytics and Hosting",
    "paragraphs": [
      "No Google Analytics tracking has been configured for this website. The hosting provider may process technical request information to deliver and protect the site. If additional analytics are introduced, this policy should be reviewed and any required consent implemented."
    ]
  },
  {
    "heading": "5. Third-Party Links",
    "paragraphs": [
      "Links to LinkedIn, Facebook, Instagram, WhatsApp and ETHIOR take you to other websites with their own privacy practices. Review their policies before sharing information."
    ]
  },
  {
    "heading": "6. Privacy Requests",
    "paragraphs": [
      "For questions about correspondence or requests concerning your information, contact info@huzaifabukhari.com or WhatsApp +92 332 0218839. Any service-specific information handling should be agreed directly before a project begins."
    ]
  }
];
function Page() { return <LegalPage title="Privacy Policy" lastUpdated="14 Oct 2026" sections={sections} />; }
