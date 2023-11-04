import "./globals.css";
import { Navbar } from "@/components/sitewide/Navbar";
import { Header } from "@/components/sitewide/Header";
import { inter, normalFont } from "./fonts";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Footer } from "@/components/sitewide/Footer";

export const metadata = {
  title: "Doxometrist's Hub",
  description: "Stringing together substack posts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${normalFont.className} bg-slate-800 text-slate-100 container mx-auto p-4`}
      >
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
