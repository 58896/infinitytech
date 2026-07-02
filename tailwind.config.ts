import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00c6ff',
        secondary: '#0072ff',
        accent: '#7b2ff7',
        accent2: '#ff4da6',
        dark: '#111827',
        dark2: '#1e2736',
        teal: '#00b4b4',
        gold: '#ffa000',
        'brand-green': '#00c864',
      },
      fontFamily: {
        cairo: ['var(--font-cairo)', 'sans-serif'],
        fira: ['var(--font-fira)', 'sans-serif'],
      },
      maxWidth: {
        nav: '1000px',
        content: '1300px',
        article: '780px',
      },
      animation: {
        'scroll-rtl': 'scrollRTL 50s linear infinite',
        'scroll-testimonials': 'scrollTestimonials 40s linear infinite',
        float: 'float 10s ease-in-out infinite',
      },
      keyframes: {
        scrollRTL: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(50%)' },
        },
        scrollTestimonials: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0.4' },
          '50%': { transform: 'translateY(-30px) scale(1.1)', opacity: '0.8' },
        },
      },
    },
  },
  plugins: [typography],
}

export default config
