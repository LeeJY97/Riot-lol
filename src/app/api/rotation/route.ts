import Rotation from "@/types/Rotation";

// be 역할을 하기 위해 있음
export async function GET(request: Request): Promise<Response> {
  const apiKey = process.env.RIOT_API_KEY;

  const res = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      method: "GET",
      headers: {
        "X-Riot-Token": apiKey || "",
        "Content-Type": "application/json",
      },
      cache: "no-store", //이거 빼고 테스트
    }
  );

  console.log("apiKey", apiKey);

  if (!res.ok) {
    throw new Error("로테이션 API 에러");
  }

  const data = await res.json();

  console.log("data", data);

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
