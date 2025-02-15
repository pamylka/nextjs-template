import { Locale } from './common';

export type homeLocaleType = {
  heading: string;
  paragraph: string;
  emailOrPhone: string;
  addToWaitlist: string;
  language: string;
};

const homeLocale: Locale<homeLocaleType> = {
  ar: {
    heading: 'نَحنُ نَعمَلُ عَلَى شَيءٍ رائِعٍ، فَانتَظِرُونَا بِشَوقٍ! 🚀',
    paragraph: 'ضع بريدك الإلكتروني/رقم الهاتف حتى تكون أول من يعلم حين نطلقه!',
    emailOrPhone: 'البريد الإلكتروني أو الهاتف',
    addToWaitlist: 'انضم لقائمة الانتظار',
    language: 'en',
  },
  en: {
    heading: 'Something great is coming soon! 🚀',
    paragraph:
      'Register your email/phone number to be the first to know when we launch!',
    emailOrPhone: 'email or phone number',
    addToWaitlist: 'Add to waitlist',
    language: 'ar',
  },
};

export default homeLocale;
