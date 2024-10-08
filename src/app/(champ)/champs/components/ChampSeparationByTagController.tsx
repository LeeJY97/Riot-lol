import { CHAMP_TAGS, ChampsSeparationByTag, champTagMapKr } from "@/types/Champs";
import React from "react";
import useMediaQuery from "@/components/ui/useMediaQuery";
import ChampSeparationByTagDesktop from "./desktop/ChampSeparationByTagDesktop";
import ChampSeparationByTagMobile from "./mobile/ChampSeparationByTagMobile";

type Props = {
  champsSeparationByTag: ChampsSeparationByTag;
};

const ChampSeparationByTagController = ({ champsSeparationByTag }: Props) => {
  const { isMobile, isTablet, isDesktop } = useMediaQuery();

  return (
    <>
      {!isMobile && (
        <ChampSeparationByTagDesktop
          champsSeparationByTag={champsSeparationByTag}></ChampSeparationByTagDesktop>
      )}
      {isMobile && <ChampSeparationByTagMobile champsSeparationByTag={champsSeparationByTag} />}
    </>
  );
};

export default ChampSeparationByTagController;
