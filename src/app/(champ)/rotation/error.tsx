"use client";

import Link from "next/link";
import { useEffect } from "react";
import bg from "@/public/assets/images/bg/jhin3_error.jpg";
import Image from "next/image";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="fixed top-0 left-0 w-full h-svh min-w-[1220px] min-h-[685px]">
      <div className="absolute top-1/2 flex justify-end items-center gap-10 w-full h-[120px] z-50 text-subColor">
        <div className="flex flex-col gap-10 items-center justify-center w-full">
          <div className="flex flex-col items-center">
            <h2 className="text-xl">키 만료</h2>
            <p className="text-xs">최신 데이터를 불러올 수 없습니다.</p>
          </div>
          <Link href="/">메인으로 가기</Link>
        </div>
      </div>
      <Image src={bg} alt={"메인 배경사진"} layout="fill"></Image>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
    </div>
  );
}
