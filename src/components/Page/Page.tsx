import { PropsWithChildren } from "react";

interface PageProps {
  fullWidth?: boolean;
}
function Page({ children, fullWidth }: PropsWithChildren<PageProps>) {
  return (
    <main className="px-40 lg:px-48 py-6 lg:py-10 mx-auto max-w-screen-lg data-[full-width=true]:max-w-none flex flex-col grow w-full items-stretch">
      {children}
    </main>
  );
}

export default Page;
