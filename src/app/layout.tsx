import type { Metadata } from "next";
import { Montserrat} from "next/font/google";
import "./globals.css";
import Footer from "./(Home)/_components/Footer";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar2 from "./(Home)/_components/Navbar2";


const inter = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  title: "Taking My Classes Online",
  description: "taking my classes online",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={inter.className}>

      <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
        <Navbar2/>
        {/* <Navbar/> */}
        {children}
        <Footer/>
        </ThemeProvider>
        
        </body>
    </html>
  );
}
