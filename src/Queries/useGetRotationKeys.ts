import { getChamps } from "@/server-actions/champAction";
import { useSuspenseQuery } from "@tanstack/react-query";
import queryKey from "./queryKey";

const useGetChamps = () => {
  return useSuspenseQuery({
    queryKey: queryKey.champ.champs,
    queryFn: () => getChamps(),
  });
};

export default useGetChamps;
