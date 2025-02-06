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
        <h1 className="text-6xl font-bold text-bright-one ">Coming Soon</h1>
        <span className="bg-white w-[2px] h-10"></span>
        <h2 className="text-5xl font-bold text-bright-one ">قَريبًا</h2>
      </div>
      <div className="flex items-center justify-center gap-4 mt-6 font-medium">
        <p className="text-lg text-bright-two max-w-lg">
          We are working on something amazing. Stay tuned!
        </p>
        <span className="bg-white w-[2px] h-5"></span>
        <p className="text-lg text-bright-two max-w-lg">
          🚀 !نَحنُ نَعمَلُ عَلَى شَيءٍ رائِعٍ، فَانتَظِرُونَا بِشَوقٍ
        </p>
      </div>
    </div>
  );
}
