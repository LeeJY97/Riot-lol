import { getChamps } from "@/server-actions/champAction";
import { useSuspenseQuery } from "@tanstack/react-query";
import queryKey from "./queryKey";

// 다 분리해보고, 합쳐도 봐보기
// 클라에서 useQuery쓰기
// 그게 아니라면 서버 fetch를 사용.(async를 붙일수있기때문ㅇ)
const useGetChamps = () => {
  return useSuspenseQuery({
    // useQuery쓰면 undefined가 나올수밖에 없음
    queryKey: queryKey.champ.champTable,
    queryFn: () => getChamps(),
  });
};

export default useGetChamps;
