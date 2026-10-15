import { describe, it, expect } from 'vitest';
import { contactSchema, contactUrl, whatsappUrl } from './brand';
const valid = { name: 'Test User', email: 'test@example.com', message: 'Campaign goals & creative testing' };
describe('WhatsApp contact rules', () => {
 it('uses Huzaifa’s number for every constructed destination', () => { expect(new URL(whatsappUrl()).searchParams.get('phone')).toBe('923320218839'); expect(new URL(contactUrl(valid)).searchParams.get('phone')).toBe('923320218839'); });
 it('encodes a complete Huzaifa greeting without losing special characters', () => { const url = new URL(contactUrl(valid)); expect(url.searchParams.get('text')).toBe("Hi Huzaifa, I'm Test User (test@example.com).\n\nCampaign goals & creative testing"); });
 it('requires a 2–80 character name', () => { expect(contactSchema.safeParse({...valid,name:'A'}).success).toBe(false); expect(contactSchema.safeParse({...valid,name:'Ab'}).success).toBe(true); expect(contactSchema.safeParse({...valid,name:'A'.repeat(80)}).success).toBe(true); expect(contactSchema.safeParse({...valid,name:'A'.repeat(81)}).success).toBe(false); });
 it('requires a valid email no longer than 120 characters', () => { expect(contactSchema.safeParse({...valid,email:'invalid'}).success).toBe(false); expect(contactSchema.safeParse({...valid,email:'a'.repeat(108)+'@example.com'}).success).toBe(true); expect(contactSchema.safeParse({...valid,email:'a'.repeat(109)+'@example.com'}).success).toBe(false); });
 it('requires a 10–800 character message', () => { expect(contactSchema.safeParse({...valid,message:'a'.repeat(9)}).success).toBe(false); expect(contactSchema.safeParse({...valid,message:'a'.repeat(10)}).success).toBe(true); expect(contactSchema.safeParse({...valid,message:'a'.repeat(800)}).success).toBe(true); expect(contactSchema.safeParse({...valid,message:'a'.repeat(801)}).success).toBe(false); });
});
