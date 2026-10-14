import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { whatsappUrl } from '@/lib/brand';
export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;
    const update = () => setVisible(hero.getBoundingClientRect().bottom <= 0);
    update(); window.addEventListener('scroll', update, { passive: true }); window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);
  return visible ? <Button asChild size="icon" className="floating-whatsapp fixed bottom-5 right-5 z-[80] h-14 w-14 rounded-full bg-whatsapp text-whatsapp-foreground shadow-whatsapp transition-transform hover:scale-108 hover:bg-whatsapp active:scale-108 sm:bottom-7 sm:right-7"><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" title="Chat on WhatsApp"><span aria-hidden="true" className="whatsapp-ring absolute inset-0 rounded-full bg-whatsapp" /><WhatsAppIcon className="relative h-7 w-7" /></a></Button> : null;
}
