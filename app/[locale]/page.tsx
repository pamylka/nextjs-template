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
  const locale = homeLocale[localeKey] || homeLocale['en'];
  const [submitted, setSubmitted] = useState(false);

  const formUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSe6pjmiunSySDDDn6_aQzxsdI_m3O2259kisKyQNx7H9jHVEQ/formResponse';
  const entryId = 'entry.72372189';

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch(formUrl, {
      method: 'POST',
      body: formData,
      mode: 'no-cors',
    }).then(() => setSubmitted(true));
  };

  return (
    <>
      <div
        className="relative min-h-screen flex flex-col items-center justify-between
         text-white text-center py-10 sm:py-12 md:py-16
         bg-gradient-to-r from-dark-one to-dark-two"
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
        <div className="flex flex-col items-center justify-center gap-4 mt-8 md:mt-10 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {locale.heading}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">
            {locale.paragraph}
          </p>
        </div>

        {/* Email Input & Button */}
        <div className="mt-12 w-full xl:max-w-xl px-4">
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:grid grid-cols-6 gap-2 md:gap-5 py-2"
            >
              <input
                required
                name={entryId}
                type="email"
                placeholder="email or phone number"
                className="bg-white text-black rounded-xl col-span-4 md:text-lg px-4 py-2 md:py-4 outline-none placeholder-gray-400 focus:ring-2 focus:ring-primary-color placeholder:text-xs md:placeholder:text-lg"
                aria-label="Email or phone number"
              />
              <button
                type="submit"
                className="bg-primary-color text-black font-thin text-xs md:text-base md:font-medium col-span-2 p-2 md:p-4 rounded-xl hover:bg-opacity-70 focus:ring-2 focus:ring-primary-color"
              >
                {locale.addToWaitlist}
              </button>
            </form>
          ) : (
            <p className="text-primary-color text-lg">
              {locale.thanksForSubscribing}
            </p>
          )}
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-6 flex-wrap justify-center">
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
        <Link
          href={locale.language}
          className="flex items-center text-white gap-2 mt-4 hover:opacity-75 hover:underline"
        >
          <Image
            src={globe}
            alt="Language"
            width={24}
            height={24}
            unoptimized
          />
          <span className="text-sm sm:text-lg font-medium uppercase ">
            {locale.language === 'en' ? 'عر' : 'en'}
          </span>
        </Link>
      </div>
    </>
  );
}
