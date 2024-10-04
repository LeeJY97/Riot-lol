import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Providers from "@/components/providers/RQProvider";
import { Suspense } from "react";
import Image from "next/image";

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
    <html lang="en" className="cursor-element">
      {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#071523]`}> */}
      <body className={`bg-[#071523] text-white ${fontPretendard.className}`}>
        <div className="fixed z-50 top-0 left-0 flex items-center gap-10 w-full h-14 text-white bg-black p-4">
          <Link href="/">홈</Link>
          <Link href="/champs" prefetch>
            챔피언
          </Link>
          <Link href="/rotation">로테이션</Link>
          <Link href="/items">아이템</Link>
        </div>
        <Suspense fallback={<>... 로딩</>}>
          <Providers>
            <div className="w-[100%] flex justify-center mt-14">{children}</div>
          </Providers>
        </Suspense>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center hover-element fixed bottom-0 left-1/2">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">
            <Image
              aria-hidden
              src="https://nextjs.org/icons/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Blog
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">
            <Image
              aria-hidden
              src="https://nextjs.org/icons/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            GitHub
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">
            <Image
              aria-hidden
              src="https://nextjs.org/icons/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </body>
    </html>
  );
}
