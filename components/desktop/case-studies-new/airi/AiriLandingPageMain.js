import React from "react";
// import Header from "../../header-footer/Header";
import RemoteTeamsLandingPageFive from "../remote-teams/RemoteTeamsLandingPageFive";
import RemoteTeamsLandingPageFoldThree from "../remote-teams/RemoteTeamsLandingPageFoldThree";
import RemoteTeamsLandingPageFoldTwo from "../remote-teams/RemoteTeamsLandingPageFoldTwo";
import AiriLandingPageFoldFour from "./AiriLandingPageFoldFour";
import AiriLandingPageFoldOne from "./AiriLandingPageFoldOne";
import AiriLandingPageFoldSix from "./AiriLandingPageFoldSix";

export default function AiriLandingPageMain() {
  /*==============================================
                    return
  ===============================================*/
  return (
    <>
      {/* <Header /> */}
      <AiriLandingPageFoldOne />
      <RemoteTeamsLandingPageFoldTwo
        imgPath="/imgs/desktop/case-studies-new/airi/airi-low-screen.png"
        imgClass="airi-low-screen"
        imgName="airi low screen"
        lowContainerClass="airi-low-screen-setion"
      />
      <RemoteTeamsLandingPageFoldThree
        imgName="airi information chart"
        imgPath="/imgs/desktop/case-studies-new/airi/airi-info-chart.png"
        imgClass="airi-info-chart"
        infoContainerClass="airi-info-chart-section"
      />
      <AiriLandingPageFoldFour />
      <RemoteTeamsLandingPageFive
        hiImg="/imgs/desktop/case-studies-new/airi/airi-hi-screen.png"
        hiImgName="airi hi screen"
        hiImgClass="airi-hi-screen"
        hiImgOuterClass="airi-hi-screen-section"
        prototypeImg="/imgs/desktop/case-studies-new/airi/airi-prototype.png"
        prototypeImgName="airi prototype"
        prototypeImgClass="airi-prototype-img"
        prototypeImgOuterClass="airi-prototype-img-section"
      />
      <AiriLandingPageFoldSix />
    </>
  );
}
