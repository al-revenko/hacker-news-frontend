import { AppBar } from "@mui/material";
import LoadBar from "./ui/LoadBar";
import ContentLayout from "@/shared/ui/ContentLayout";
import Image from "next/image";
import NavigationBlock from "./ui/NavigationBlock";

const Header = () => {
  return (
    <header className="h-17.5">
      <AppBar className="h-15 bg-primary text-fontAccent">
        <ContentLayout>
          <div className="grid grid-cols-[100px_1fr_100px] grid-rows-[60px] items-center">
            <NavigationBlock />
            <Image
              className="self-center justify-self-center"
              loading="eager"
              src="/logo.png"
              alt="logo"
              width={55}
              height={55}
            />
            <div></div>
          </div>
        </ContentLayout>
        <LoadBar isLoading={false} />
      </AppBar>
    </header>
  );
};

export default Header;
