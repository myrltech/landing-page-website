import React from "react";
import RemoteTeamsLandingPageFive from "../remote-teams/RemoteTeamsLandingPageFive";
import RemoteTeamsLandingPageFoldThree from "../remote-teams/RemoteTeamsLandingPageFoldThree";
import RemoteTeamsLandingPageFoldTwo from "../remote-teams/RemoteTeamsLandingPageFoldTwo";
import FintifyLandingPageFoldFour from "./FintifyLandingPageFoldFour";
import FintifyLandingPageFoldOne from "./FintifyLandingPageFoldOne";
import FintifyLandingPageFoldSix from "./FintifyLandingPageFoldSix";

export default function FintifyLandingPageMain() {
  /*==============================================
                    return
  ===============================================*/
  return (
    <>
      <FintifyLandingPageFoldOne />
      <RemoteTeamsLandingPageFoldTwo
        imgPath="/imgs/desktop/case-studies-new/fintify/fintify-low-screen.png"
        imgClass="fintify-low-screen"
        imgName="fintify low screen"
        lowContainerClass="fintify-low-screen-section"
      />
      <RemoteTeamsLandingPageFoldThree
        imgPath="/imgs/desktop/case-studies-new/fintify/fintify-info-chart.png"
        imgClass="fintify-info-chart"
        imgName="fintify info chart"
        infoContainerClass="fintify-info-chart-section"
      />
      <FintifyLandingPageFoldFour />
      <RemoteTeamsLandingPageFive
        hiImg="/imgs/desktop/case-studies-new/fintify/fintify-hi-screen.png"
        hiImgName="fintify hi screen"
        hiImgClass="fintify-hi-screen"
        hiImgOuterClass="fintify-hi-screen-section"
        prototypeImgClass="fintify-prototype-screen"
        prototypeImgName="fintify prototype screen"
        prototypeImg="/imgs/desktop/case-studies-new/fintify/fintify-prototype-screen.png"
        prototypeImgOuterClass="fintify-prototype-screen-section"
      />
      <FintifyLandingPageFoldSix />
    </>
  );
}
