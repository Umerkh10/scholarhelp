
import type { Metadata } from "next";
import { Montserrat} from "next/font/google";
import "./globals.css";
import Footer from "./(Home)/_components/Footer";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar2 from "./(Home)/_components/Navbar2";
import Head from "next/head";
import { headers } from "next/headers";



  
  // Get the headers from the incoming request
  const headersList = headers();
  
  // Get protocol and host from headers or fallback
  const protocol = headersList.get('x-forwarded-proto') || 'http';
  const host = headersList.get('host') || process.env.NEXT_PUBLIC_SITE_URL ;

  // Construct the full canonical URL
  const canonicalUrl = `${protocol}://${host}`;
  console.log('Protocol:', protocol);
  console.log('Host:', host);
  console.log('Canonical URL:', canonicalUrl);

const inter = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

<Head>
<link rel="canonical" href={canonicalUrl} />
<meta name="google-site-verification" content="[YOUR_VERIFICATION_CODE]" />
<meta property="og:site" content="https://takingmyclassesonline.com/" />
<meta name="author" content="https://takingmyclassesonline.com/" />
<meta name="language" content="English" />
<meta name="expires" http-equiv="Expires" content="[EXPIRATION_DATE]" />
<meta name="copyright" content="Copyright 2024 @ Taking My Classes Online" />
<meta property="og:image" content="[OG_IMAGE_URL]" />
<meta property="og:locale" content="en" />
<meta property="og:type" content="article" />
<meta property="og:url" content="https://www.takingmyclassesonline.com/" />
<meta property="article:publisher" content="https://www.facebook.com/pages/" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:description" content="Pay Someone to Take My Online Class for Me in USA! Having a dedicated team who can assist you in every single step for online class takers and A+ Grade Guaranteed!" />
<meta name="twitter:image" content="https://www.takingmyclassesonline.com/images/og_TMCO.jpg?v=1" />
<meta name="twitter:title" content="A+ Grade Guaranteed: Take My Online Class For Me in USA" />
<meta name="twitter:site" content="[TWITTER_ACCOUNT]" />
<meta name="twitter:creator" content="[TWITTER_ACCOUNT]" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<meta name="p:domain_verify" content="[DOMAIN_VERIFICATION_CODE]" />
<link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
<meta name="theme-color" content="#4947ea" />
<meta name="mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<meta name="apple-mobile-web-app-title" content="Taking My Classes Online" />
<link rel="alternate" hrefLang="x-default" href="https://www.takingmyclassesonline.com/" />

</Head>


export const metadata: Metadata = {
  title: {
    template: '%s | A+ Grade Guaranteed: Taking My Classes Online For Me in USA',
    default: 'A+ Grade Guaranteed: Taking My Classes Online For Me in USA',
  },
  description: "Pay Someone to Taking My Classes Online for Me in USA! Having a dedicated team who can assist you in every single step for online class takers and A+ Grade Guaranteed!",
  
  
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


    <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Organization",
              "name": "Academic Writing Services For Students By Professionals",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "12"
              },
              "brand": {
                "@type": "EducationalOrganization",
                "name": "Taking My Classes Online"
              },
              "url": "https://takingmyclassesonline.com/",
              "logo": "" 
            }),
          }}
        />
      </Head>


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
        {children}
        <Footer/>
        </ThemeProvider>
        
        </body>
    </html>
  );
}
