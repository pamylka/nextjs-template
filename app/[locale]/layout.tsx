'use client';

import { useParams } from 'next/navigation';
import './globals.css';
import { locales } from '@/locales/common';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { locale } = useParams();
  return (
    <html lang={locale as locales} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body>{children}</body>
    </html>
  );
}
