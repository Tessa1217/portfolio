import type { Metadata } from "next";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/navbar";
import { ThemeProvider } from "@/contexts/theme-context";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-inter",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
});

import "@/styles/style.css";

export const metadata: Metadata = {
  icons: "/images/developer-memoji.svg",
  title: "YuJin's Portfolio",
  description: "권유진(YuJin Kwon)의 포트폴리오 사이트입니다.",
  openGraph: {
    url: "https://portfolio-six-indol-86.vercel.app/",
    title: "YuJin's Portfolio",
    images: "/images/share-main-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider>
          <AnimatePresence mode="wait">
            <div className="relative bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text min-h-screen">
              <Navbar />
              {children}
            </div>
          </AnimatePresence>
        </ThemeProvider>
      </body>
    </html>
  );
}
