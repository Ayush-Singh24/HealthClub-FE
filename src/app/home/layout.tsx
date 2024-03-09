import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/footer";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </section>
  );
}
