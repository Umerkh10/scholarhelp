import type { Metadata } from "next";
import { Montserrat} from "next/font/google";
import "./globals.css";
import Navbar from "./(Home)/_components/Navbar";
import Footer from "./(Home)/_components/Footer";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
