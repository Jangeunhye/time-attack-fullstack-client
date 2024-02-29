function Page({ children }: { children: React.ReactNode }) {
  return (
    <main className="px-30 lg:px-48 py-6 lg:py-10 mx-auto  flex flex-col grow w-full items-stretch ">
      {children}
    </main>
  );
}

export default Page;
