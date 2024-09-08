import { Fira_Code, Roboto_Slab } from "next/font/google";


export const fira_code = Fira_Code({
  subsets: ["latin"],
  weight: ["500"],
});

export const ubuntu = Roboto_Slab({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: "--font-poppins",
});