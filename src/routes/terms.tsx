import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { brand } from "@/lib/brand";
const title = "Terms & Conditions | Huzaifa Bukhari";
const description = "Terms for Huzaifa Bukhari\u2019s performance marketing website and services.";
export const Route = createFileRoute("/terms")({ component: Page, head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: `${brand.siteUrl}/terms` }] }) });
const sections: LegalSection[] = [
  {
    "heading": "1. Overview",
    "paragraphs": [
      "This website introduces Huzaifa Bukhari’s performance marketing services. Any engagement is subject to a separately agreed scope and terms."
    ]
  },
  {
    "heading": "2. Services",
    "paragraphs": [
      "Services include Meta Ads Management (Facebook & Instagram), Lead Generation Campaigns, Audience Research & Targeting, Campaign Optimization & Performance Tracking, and Advertising Strategy & Creative Testing."
    ]
  },
  {
    "heading": "3. Project Agreements",
    "paragraphs": [
      "Scope, deliverables, fees, payment arrangements and timelines must be agreed directly before work begins. This website does not publish fixed packages or payment requirements."
    ]
  },
  {
    "heading": "4. Advertising Outcomes",
    "paragraphs": [
      "Advertising outcomes depend on factors including the offer, audience, budget, market conditions and platform policies. Specific leads, sales or returns are not guaranteed."
    ]
  },
  {
    "heading": "5. Website Inquiries",
    "paragraphs": [
      "The contact form prepares a WhatsApp message. You must send that message in WhatsApp to make an inquiry. Preparing a draft does not create a service agreement."
    ]
  },
  {
    "heading": "6. Third-Party Platforms",
    "paragraphs": [
      "WhatsApp, Meta and linked social platforms operate under their own terms. Huzaifa Bukhari does not control those platforms."
    ]
  },
  {
    "heading": "7. Contact",
    "paragraphs": [
      "Questions about this website or proposed services can be sent to info@huzaifabukhari.com or through WhatsApp at +92 332 0218839."
    ]
  }
];
function Page() { return <LegalPage title="Terms & Conditions" lastUpdated="14 Oct 2026" sections={sections} />; }
