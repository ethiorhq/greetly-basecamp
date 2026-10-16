import { Link } from '@tanstack/react-router';
import { Linkedin, Facebook, Instagram, ArrowUpRight } from 'lucide-react';
import { brand, whatsappUrl } from '@/lib/brand';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { Button } from '@/components/ui/button';

export function SiteFooter() {
  const socialLinks = [
    { name: 'LinkedIn', href: brand.socials.LinkedIn, Icon: Linkedin },
    { name: 'Facebook', href: brand.socials.Facebook, Icon: Facebook },
    { name: 'Instagram', href: brand.socials.Instagram, Icon: Instagram },
    { name: 'WhatsApp', href: whatsappUrl(), Icon: WhatsAppIcon },
  ];
  return <footer className="border-t border-border bg-card"><div className="site-container py-12">
    <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center"><div><Link to="/" className="font-display text-2xl font-bold">{brand.name}<span className="text-primary">.</span></Link><p className="mt-2 text-sm text-muted-foreground">Smarter Campaigns. Stronger Results.</p></div>
    <nav aria-label="Social links" className="flex gap-3">{socialLinks.map(({name, href, Icon}) => <Button key={name} asChild variant="outline" size="icon" className="h-11 w-11 rounded-full border-border text-muted-foreground hover:border-primary hover:bg-secondary hover:text-primary"><a href={href} target="_blank" rel="noopener noreferrer" aria-label={name} title={name}><Icon className="h-4 w-4" /></a></Button>)}</nav></div>
    <div className="mt-10 flex flex-col justify-between gap-5 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center"><div className="flex flex-wrap items-center gap-x-3 gap-y-3"><span>© {new Date().getFullYear()} {brand.name}. All rights reserved.</span><span aria-hidden="true">·</span><Link to="/terms" className="hover:text-primary">Terms & Conditions</Link><span aria-hidden="true">·</span><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></div><p className="flex items-center gap-1">Built by <a href="https://ethior.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline">ETHIOR<ArrowUpRight className="h-3 w-3" /></a></p></div>
  </div></footer>;
}
