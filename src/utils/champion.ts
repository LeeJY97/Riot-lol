import { CHAMP_DEFAULT_IMAGE_BASE_URL } from "@/constant/urls";

export const getDefaultImage = (champId: string): string => {
  return `${CHAMP_DEFAULT_IMAGE_BASE_URL}/${champId}_0.jpg`;
};
