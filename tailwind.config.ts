import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#FFE600',
        'dark-one': '#333',
        'dark-two': '#161616',
        'bright-one': '#f5f5f5',
        'bright-two': '#d9d9d9',
        errRed: '#cc3333',
      },
    },
  },
  plugins: [],
} satisfies Config;
