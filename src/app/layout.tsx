import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import RootProvider from "./RootProvider";
import Header from "@widgets/header/Header";

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
      <body className="bg-secondary grid min-h-dvh w-full grid-rows-[auto_1fr_auto]">
        <RootProvider>
          <Header />
          <main>{children}</main>
          <footer></footer>
        </RootProvider>
      </body>
    </html>
  );
}
