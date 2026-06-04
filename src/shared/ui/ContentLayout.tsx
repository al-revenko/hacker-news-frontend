import { PropsWithChildren } from "react";

const ContentLayout = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  return (
    <div className={"mx-auto h-full w-full max-w-5xl px-2 " + className}>
      {children}
    </div>
  );
};

export default ContentLayout;
