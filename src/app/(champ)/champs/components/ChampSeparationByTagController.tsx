import { CHAMP_TAGS, ChampsSeparationByTag, champTagMapKr } from "@/types/Champs";
import React, { useEffect, useState } from "react";
import useMediaQuery from "@/components/ui/useMediaQuery";
import ChampSeparationByTagDesktop from "./desktop/ChampSeparationByTagDesktop";
import ChampSeparationByTagMobile from "./mobile/ChampSeparationByTagMobile";

type Props = {
  champsSeparationByTag: ChampsSeparationByTag;
};

const ChampSeparationByTagController = ({ champsSeparationByTag }: Props) => {
  const { isMobile } = useMediaQuery();

  return (
    <>
      {isMobile && <ChampSeparationByTagMobile champsSeparationByTag={champsSeparationByTag} />}
      {!isMobile && (
        <ChampSeparationByTagDesktop
          champsSeparationByTag={champsSeparationByTag}></ChampSeparationByTagDesktop>
      )}
    </>
  );
};

export default ChampSeparationByTagController;
