import React from "react";
import RemoteTeamsLandingPageFive from "../remote-teams/RemoteTeamsLandingPageFive";
import RemoteTeamsLandingPageFoldThree from "../remote-teams/RemoteTeamsLandingPageFoldThree";
import RemoteTeamsLandingPageFoldTwo from "../remote-teams/RemoteTeamsLandingPageFoldTwo";
import AquaplanLandingPageFoldFour from "./AquaplanLandingPageFoldFour";
import AquaplanLandingPageFoldOne from "./AquaplanLandingPageFoldOne";
import AquaplanLandingPageFoldSix from "./AquaplanLandingPageFoldSix";

export default function AquaplanLandingPageMain() {
  /*==============================================
                    return
  ===============================================*/
  return (
    <>
      <AquaplanLandingPageFoldOne />
      <RemoteTeamsLandingPageFoldTwo
        imgPath="/imgs/desktop/case-studies-new/aquaplan/aquaplan-low-screen.png"
        imgName="aquaplan low fidelity screens"
        imgClass="aquaplan-low-screen-img"
        lowContainerClass="aquaplan-low-screen-setion"
      />
      <RemoteTeamsLandingPageFoldThree
        imgPath="/imgs/desktop/case-studies-new/aquaplan/aquaplan-info-chart.png"
        imgName="aquaplan information chart"
        imgClass="aquaplan-info-chart-img"
        infoContainerClass="aquaplan-info-chart-img-section"
      />
      <AquaplanLandingPageFoldFour />
      <RemoteTeamsLandingPageFive
        hiImg="/imgs/desktop/case-studies-new/aquaplan/aquaplan-hi-screen.png"
        hiImgClass="aquaplan-hi-screen"
        hiImgName="aquaplan hi screen"
        hiImgOuterClass="aquaplan-hi-screen-section"
        prototypeImg="/imgs/desktop/case-studies-new/aquaplan/aquaplan-prototype.png"
        prototypeImgClass="aquaplan-prototype-img"
        prototypeImgName="aquaplan prototype"
        prototypeImgOuterClass="aquaplan-prototype-screen-section"
      />
      <AquaplanLandingPageFoldSix />
    </>
  );
}
