import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Blog",
  description: "I write about my thoughts sometimes.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
