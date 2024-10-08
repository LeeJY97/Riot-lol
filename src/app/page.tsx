import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
// import rift from "@/public/assets/images/bg/rift.webp";
import bg from "@/public/assets/images/bg/jhin2.jpg";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import queryKey from "@/Queries/queryKey";
import { getChamps } from "@/server-actions/champAction";

export const metadata: Metadata = {
  title: "롤 정보 사이트",
  description: "리그 오브 레전드 정보 사이트",
};

export default async function Home() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1 * 1000,
      },
    },
  });

  await queryClient.prefetchQuery({
    queryKey: queryKey.champ.champs,
    queryFn: () => getChamps(),
  });

  await queryClient.prefetchQuery({
    queryKey: queryKey.rotation.rotationKeys,
    queryFn: async () => {
      const rotationRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/rotation`);
      const rotationKeys = await rotationRes.json();
      return rotationKeys;
    },
  });

  return (
    // Hydration 적용 안되는 것 같음 ?
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="fixed top-0 left-0 w-full h-svh min-w-[1220px] min-h-[685px]">
        <section className="fixed bottom-2 flex justify-end items-center gap-10 w-full h-[120px] z-50 text-4xl text-subColor pr-10">
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
        </section>
        <Image src={bg} alt={"메인 배경사진"} layout="fill"></Image>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
      </main>
    </HydrationBoundary>
  );
}
