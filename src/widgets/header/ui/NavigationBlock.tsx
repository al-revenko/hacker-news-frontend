"use client";

import { usePathname } from "next/navigation";
import BackHomeLink from "./BackHomeLink";

export interface NavigationBlockProps {
  className?: string;
}

const NavigationBlock = ({ className }: NavigationBlockProps) => {
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  return (
    <nav className={className}>
      {!isHomePage && <BackHomeLink size="large" color="secondary" />}
    </nav>
  );
};

export default NavigationBlock;
