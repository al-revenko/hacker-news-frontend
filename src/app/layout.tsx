import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./reset.css";
import RootProvider from "./RootProvider";

const roboto = localFont({
  src: "../../public/fonts/roboto.ttf",
});

export const metadata: Metadata = {
  title: "Hacker News",
  description: "Social news focusing on computer science and entrepreneurship",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.className} h-full antialiased`}>
      <RootProvider>
        <body className="min-h-full flex flex-col">{children}</body>
      </RootProvider>
    </html>
  );
}
