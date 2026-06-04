// import { Footer, Header } from '@widgets/pageLayout';

import { Header } from "@/widgets/header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-secondary grid min-h-dvh w-full grid-rows-[auto_1fr_auto]">
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
