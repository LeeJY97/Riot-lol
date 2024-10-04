import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
// import rift from "@/public/assets/images/bg/rift.webp";
import bg from "@/public/assets/images/bg/jhin2.jpg";
import champBg from "@/public/assets/images/bg/jhin.jpg";

export const metadata: Metadata = {
  title: "롤 정보 사이트",
  description: "리그 오브 레전드 정보 사이트",
};

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="fixed top-0 left-0 w-full h-svh min-w-[1220px]">
      <Image src={bg} alt={"dd"} layout="fill"></Image>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
    </div>
  );
}
