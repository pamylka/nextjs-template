'use client';

import { locales } from '@/locales/common';
import homeLocale from '@/locales/homeLocale';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import logoBackground from '@/public/logo.svg';
import logo from '@/public/main_logo.svg';
import facebook from '@/public/facebook.svg';
import youtube from '@/public/youtube.svg';
import whatsapp from '@/public/whatsapp.svg';
import email from '@/public/email.svg';
import globe from '@/public/globe.svg';
import Link from 'next/link';

export default function Home() {
  const params = useParams();
  const localeKey = params.locale as locales;
  const defaultLocale = homeLocale[localeKey] || homeLocale['en'];
  const [locale] = useState(defaultLocale);

  return (
    <>
      <div
        className="relative min-h-screen flex flex-col items-center text-white text-center py-[37px] bg-gradient-to-r from-dark-one to-dark-two"
        style={{
          backgroundImage: `linear-gradient(to right, #333, rgb(51 51 51 / 0)), url(${logoBackground.src})`,
          backgroundSize: 'contain',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Logo */}
        <Image
          src={logo}
          alt="Logo"
          width={50}
          height={50}
          className="mb-4"
          priority
        />

        {/* Heading & Subheading */}
        <div className="flex flex-col items-center justify-center gap-4 mt-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {locale.heading}
          </h1>
          <p className="text-lg md:text-xl text-gray-300">{locale.paragraph}</p>
        </div>

        {/* Email Input & Button */}
        <form className="mt-6 flex items-center gap-2 bg-gray-900 rounded-full px-4 py-2">
          <input
            type="email"
            placeholder="email or phone number"
            className="bg-transparent text-white text-lg px-4 py-2 outline-none w-64 placeholder-gray-400 focus:ring-2 focus:ring-yellow-500"
            aria-label="Email or phone number"
          />
          <button
            type="submit"
            className="bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500"
          >
            {locale.buttonText}
          </button>
        </form>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-6">
          {[email, whatsapp, youtube, facebook].map((icon, index) => (
            <button
              key={index}
              className="cursor-pointer hover:opacity-80"
              aria-label={icon.src}
            >
              <Image
                src={icon}
                alt={icon.src}
                width={30}
                height={30}
                unoptimized
              />
            </button>
          ))}
        </div>

        {/* Language Selector */}
        <div className="flex items-center gap-2 mt-4 text-white">
          <Image
            src={globe}
            alt="Language"
            width={24}
            height={24}
            unoptimized
          />
          <Link
            href={locale.language}
            className="text-lg font-medium uppercase hover:underline hover:text-primary-color"
          >
            {locale.language}
          </Link>
        </div>
      </div>
    </>
  );
}
