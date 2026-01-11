import type { Metadata } from "next";
import "@/styles/style.css";

export const metadata: Metadata = {
  icons: "/developer-memoji.svg",
  title: "YuJin's Portfolio",
  description: "권유진(YuJin Kwon)의 포트폴리오 사이트입니다.",
  openGraph: {
    url: "https://portfolio-six-indol-86.vercel.app/",
    title: "YuJin's Portfolio",
    images: "/share-main-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
