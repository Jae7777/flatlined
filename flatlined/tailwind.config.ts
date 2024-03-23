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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        'null-1':          '#28262E',
        'background':             '#171922',
        'null-3':             '#252531',
        'null-sidebar-head':  '#24242E',
        'null-sidebar-body':  '#20202A',
        'offwhite':       '#f5f5f5',
        'alabaster':      '#F0F5F1',
        'cyberyellow':    '#f7d967',
        'cybercyan':      '#3db3d0',
        'cyberred':       '#c24347',
        'cyberviolet':    '#aa5a9c',
        'cyberblue':      '#1e588d',
        'cyberdarkblue':  '#191338',
        'cyber-1':        '#f8d991',
        'cyber-2':        '#f6b080',
        'cyber-3':        '#f58b60',
        'cyber-4':        '#e1664c',
        'cyber-5':        '#774c3e',
        'cyber-6':        '#091d23',
        'cyber-7':        '#8E4330',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config