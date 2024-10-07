import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
// import rift from "@/public/assets/images/bg/rift.webp";
import bg from "@/public/assets/images/bg/jhin2.jpg";

export const metadata: Metadata = {
  title: "롤 정보 사이트",
  description: "리그 오브 레전드 정보 사이트",
};

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="fixed top-0 left-0 w-full h-svh min-w-[1220px] min-h-[685px]">
      <div className="fixed bottom-2 flex justify-end items-center gap-10 w-full h-[120px] z-50 text-4xl text-subColor pr-10">
        <div className="flex justify-center items-center bg-black bg-opacity-60 p-2 w-[200px] rounded-sm">
          <a href="https://reactjy2.tistory.com" target="_blank">
            블로그
          </a>
        </div>
        <div className="flex justify-center items-center bg-black bg-opacity-80 p-2 w-[200px] rounded-sm">
          <a href="https://www.github.com/LeeJY97" target="_blank">
            깃허브
          </a>
        </div>
        {/* <span className="hover-element hover">기술블로그</span>
        <span className="hover-element">깃허브</span> */}
        {/* <div className="">
          <Image src={github} alt="" width={50} height={50} />
        </div>
        <div className="w-[30px] h-[30px]">
          <Image src={blog} alt="" width={30} height={30} />
        </div> */}
      </div>
      <Image src={bg} alt={"메인 배경사진"} layout="fill"></Image>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
    </div>
  );
}
