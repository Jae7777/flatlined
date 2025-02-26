import { Fira_Code, Roboto_Slab, Tiny5 } from "next/font/google";


export const fira_code = Fira_Code({
  subsets: ["latin"],
  weight: ["500"],
});

export const ubuntu = Roboto_Slab({
  subsets: ["latin"],
  weight: ['400', '700'],
});

export const tiny5 = Tiny5({
  subsets: ["latin"],
  weight: ["400"],
})
