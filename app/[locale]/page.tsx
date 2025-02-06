'use client';

import { locales } from '@/locales/common';
import homeLocale from '@/locales/homeLocale';
import { useParams } from 'next/navigation';

export default function Home() {
  const params = useParams();

  const locale = homeLocale[params.locale as locales];
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-l from-dark-one to-dark-two text-white text-center">
      <div className="flex items-center justify-center gap-4">
        <h1 className="text-6xl font-bold text-bright-one ">
          {locale.heading}
        </h1>
      </div>
      <div className="flex items-center justify-center gap-4 mt-6 font-medium">
        <p className="text-lg text-bright-two max-w-lg">{locale.paragraph} </p>
      </div>
      <div>
        <input name="emailOrPhone" placeholder={locale.emailOrPhone} />
        <input type="hidden" value={'product'} name="product" />
        <button>{locale.addToWaitlist}</button>
      </div>
    </div>
  );
}
