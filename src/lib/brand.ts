import { z } from 'zod';

export const brand = {
  name: 'Huzaifa Bukhari',
  role: 'Performance Marketer | Meta Ads & Growth Strategy',
  siteUrl: 'https://huzaifabukhari.com',
  email: 'info@huzaifabukhari.com',
  phone: '923320218839',
  phoneDisplay: '+92 332 0218839',
  socials: {
    LinkedIn: 'https://www.linkedin.com/in/huzaifa-bukhari/',
    Facebook: 'https://www.facebook.com/huzaifa.bukhari.140384',
    Instagram: 'https://www.instagram.com/huz7109/?hl=en',
  },
};
export function whatsappUrl(text = '') {
  return `https://api.whatsapp.com/send/?phone=${brand.phone}&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;
}
export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name.').max(80, 'Name is too long.'),
  email: z.string().trim().email('Please enter a valid email.').max(120, 'Email is too long.'),
  message: z.string().trim().min(10, 'Please write at least 10 characters.').max(800, 'Message must be under 800 characters.'),
});
export function contactUrl(data: z.infer<typeof contactSchema>) {
  return whatsappUrl(`Hi Huzaifa, I'm ${data.name} (${data.email}).\n\n${data.message}`);
}
export const services = [
  { name: 'Meta Ads Management', detail: 'Facebook & Instagram', description: 'Plan and manage Facebook and Instagram advertising around your business goals.' },
  { name: 'Lead Generation Campaigns', detail: 'Connect with potential customers', description: 'Build campaigns designed to connect your business with relevant potential customers.' },
  { name: 'Audience Research & Targeting', detail: 'Understand who matters', description: 'Understand your customers and develop audience strategies that match your offer.' },
  { name: 'Campaign Optimization & Performance Tracking', detail: 'Measure. Learn. Refine.', description: 'Monitor key metrics and refine campaigns to improve advertising decisions.' },
  { name: 'Advertising Strategy & Creative Testing', detail: 'Creativity meets data', description: 'Develop campaign strategy and test creative approaches to learn what resonates.' },
];
