import AppHeader from "@/components/app-header";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-svh flex flex-col bg-background relative">
      <AppHeader />
      <main>{children}</main>
    </div>
  );
}
