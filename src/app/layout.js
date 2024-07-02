import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import MenuOverlay from "@/components/menuOverlay/menuoverlay";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bits & Pieces - Event Management Company in dubai",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {children}
          <MenuOverlay/>
          <Header/>
      </body>
    </html>
  );
}