import type { Config } from "tailwindcss";

const colors = require('tailwindcss/colors');

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'hero': "url('/hero.jpg')"
      },
      screens: {
        'xs': '540px'
      },
      colors: {
        'null-1':          '#28262E',
        'null-body':             '#171922',
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
  plugins: [],
};
export default config;
