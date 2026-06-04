import { AppBar } from "@mui/material";
// import { LogoIcon } from "@shared/icons";
import LoadBar from "./ui/LoadBar";
import ContentLayout from "@/shared/ui/ContentLayout";

const Header = () => {
  return (
    <div className="h-17.5">
      <AppBar className="h-15 bg-primary text-fontAccent">
        <ContentLayout>
          <div className="grid grid-cols-[1fr_max-content_1fr] grid-rows-[60px] items-center">
            {/*<LogoIcon className="h-15 w-15" />*/}
          </div>
        </ContentLayout>
        <LoadBar />
      </AppBar>
    </div>
  );
};

export default Header;
