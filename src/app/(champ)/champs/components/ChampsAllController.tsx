import React from "react";
import { Champ, ChampCustomImage } from "@/types/Champs";
import useMediaQuery from "@/components/ui/useMediaQuery";
import ChampsAllDesktop from "./desktop/ChampsAllDesktop";
import ChampsAllMobile from "./mobile/ChampsAllMobile";

type Props = {
  champs: (Champ & ChampCustomImage)[];
};

const ChampsAllController = ({ champs }: Props) => {
  const { isMobile, isTablet, isDesktop } = useMediaQuery();

  return (
    <>
      {!isMobile && <ChampsAllDesktop champs={champs} />}
      {isMobile && <ChampsAllMobile champs={champs} />}
    </>
  );
};

export default ChampsAllController;
