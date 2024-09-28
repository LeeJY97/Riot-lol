import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Providers from "@/components/providers/RQProvider";
import { Suspense } from "react";

const fontPretendard = localFont({
  src: "./fonts/Pretendard-Medium.otf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "League of Legends",
  description: "롤 정보 확인 앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#071523]`}> */}
      <body className={`bg-[#071523] text-white ${fontPretendard.className}`}>
        <div className="flex items-center gap-10 w-full h-14 text-white bg-black p-4">
          <Link href="/">홈</Link>
          <Link href="/champs">챔피언</Link>
          <Link href="/rotation">로테이션</Link>
          <Link href="/items">아이템</Link>
        </div>
        <Suspense fallback={<>... 로딩</>}>
          <Providers>
            <div className="w-[100%] max-w-[1200px] mx-auto">{children}</div>
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
