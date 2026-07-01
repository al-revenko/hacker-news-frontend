import { ContentLayout } from "@shared/ui";

export default function Container({ children }: React.PropsWithChildren) {
  return (
    <ContentLayout>
      <div className="w-full h-[80dvh] flex flex-col items-center justify-center gap-2 text-primary text-2xl">
        {children}
      </div>
    </ContentLayout>
  );
}
