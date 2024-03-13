import SideBar from "@/components/sidebar";
export default function FeedLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="max-w-[1309px] mx-auto flex">
      <SideBar />
      {children}
    </section>
  );
}
