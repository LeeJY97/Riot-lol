import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "롤 정보 사이트",
  description: "리그 오브 레전드 정보 사이트",
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex">
        <Link href="/champs" prefetch>
          <div className="w-40 h-40">챔프 목록</div>
        </Link>
        <div className="w-40 h-40">로테이션</div>
        <div className="w-40 h-40">아이템</div>
      </div>
    </div>
  );
}
