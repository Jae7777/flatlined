import type { Config } from "tailwindcss"
const colors = require('tailwindcss/colors');
const { fontFamily } = require("tailwindcss/defaultTheme")

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
      },
      backgroundImage: {
        'hero': "url('/hero.jpg')"
      },
      screens: {
        'xs': '540px'
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        
      },
      colors: {
        "fln-black": "#212531",
        "fln-white": "#E3E5ED",
        "fln-yellow": "#f7d967",
        "fln-lilac": "#da8ae5",
        "fln-gray": "#bfbfbf",
        "fln-orange": "#f6b080",
        "fln-blue": "#429dd7",
        'fln-purple': '#272030',
        'fln-vitra': '#3d5557',
        'fln-pale': '#f5d6c1',
        'fln-red': '#fc5163',
        'fln-gray-100': '#c7c2b8',
        'fln-gray-200': '#ad9f96',
        'fln-gray-300': '#585753',
        'fln-gray-400': '#595856',
        'fln-gray-950': '#1f1e20',
        'fln-yellow-300': '#ffed36',

      }
    },
  },
  plugins: [
    require("tailwindcss-animate"), 
    require('@tailwindcss/typography')
  ],
} satisfies Config

export default config