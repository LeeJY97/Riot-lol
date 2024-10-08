import React from "react";
import { Champ, ChampCustomImage } from "@/types/Champs";
import useMediaQuery from "@/components/ui/useMediaQuery";
import ChampsAllDesktop from "./desktop/ChampsAllDesktop";
import ChampsAllMobile from "./mobile/ChampsAllMobile";

type Props = {
  champs: (Champ & ChampCustomImage)[];
};

const ChampsAllController = ({ champs }: Props) => {
  const { isMobile, isDesktop } = useMediaQuery();

  return (
    <>
      {isMobile && <ChampsAllMobile champs={champs} />}
      {!isMobile && <ChampsAllDesktop champs={champs} />}
      {/* <ChampsAllMobile champs={champs} /> */}
      {/* <ChampsAllDesktop champs={champs} /> */}
    </>
  );
};

export default ChampsAllController;
