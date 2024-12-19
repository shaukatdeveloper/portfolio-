import "./globals.css";
import { Header } from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shaukat Aziz | Web Developer",
  description: "Explore my portfolio to see my web development skills, UI/UX design expertise, and custom web solutions.",
  keywords: "web developer, custom websites, front-end development, UI/UX design, SEO, portfolio website",
  openGraph: {
    title: "Shaukat Aziz | Web Developer",
    description: "Explore my portfolio showcasing web development skills, UI/UX design expertise, and custom web solutions.",
    url: "https://shaukat.nextlyfly.online",
    images: ["@/images/one.svg"], // Corrected path to use public folder
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaukat Aziz | Web Developer",
    description: "Explore my portfolio showcasing web development skills.",
    images: ["/images/one.svg"], // Corrected path to use public folder
  },
  robots: {
    index: true, // Allow search engines to index the page
    follow: true, // Follow links
  },
  metadataBase: new URL("https://shaukat.nextlyfly.online"), // Add metadataBase
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* General meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Explore my portfolio to see my web development skills, UI/UX design expertise, and custom web solutions." />
        <meta name="keywords" content="web developer, custom websites, front-end development, UI/UX design, SEO, portfolio website" />

        {/* Open Graph (OG) meta tags */}
        <meta property="og:title" content="Shaukat Aziz | Web Developer" />
        <meta property="og:description" content="Explore my portfolio showcasing web development skills, UI/UX design expertise, and custom web solutions." />
        <meta property="og:image" content="/images/one.svg" />  {/* Corrected path */}
        <meta property="og:url" content="https://shaukat.nextlyfly.online" />
        <meta property="og:type" content="website" />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shaukat Aziz | Web Developer" />
        <meta name="twitter:description" content="Explore my portfolio showcasing web development skills." />
        <meta name="twitter:image" content="/images/one.svg" />  {/* Corrected path */}

        <title>Shaukat Aziz | Web Developer</title>
      </head>
      <body className="antialiased text-white/80">
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
        <Toaster />
      </body>
    </html>
  );
}
