import React from "react";
// import Header from "../../header-footer/Header";
import RemoteTeamsLandingPageFive from "../remote-teams/RemoteTeamsLandingPageFive";
import RemoteTeamsLandingPageFoldThree from "../remote-teams/RemoteTeamsLandingPageFoldThree";
import RemoteTeamsLandingPageFoldTwo from "../remote-teams/RemoteTeamsLandingPageFoldTwo";
import DominateLandingPageFoldFour from "./DominateLandingPageFoldFour";
import DominateLandingPageFoldOne from "./DominateLandingPageFoldOne";
import DominateLanidingPageFoldSix from "./DominateLanidingPageFoldSix";

export default function DominateLandingPageMain() {
  /*==============================================
                    return
  ===============================================*/
  return (
    <>
      {/* <Header /> */}
      <DominateLandingPageFoldOne />
      <RemoteTeamsLandingPageFoldTwo
        imgPath="/imgs/desktop/case-studies-new/dominate/domiante-low-screen.png"
        imgName="dominate low fidelity screens"
        imgClass="dominate-low-screen-img"
      />
      <RemoteTeamsLandingPageFoldThree
        imgPath="/imgs/desktop/case-studies-new/dominate/dominate-info-chart.png"
        imgName="dominate information chart"
        imgClass="dominate-info-chart-img"
        infoContainerClass="dominate-info-chart-img-section"
      />
      <DominateLandingPageFoldFour />
      <RemoteTeamsLandingPageFive
        hiImg="/imgs/desktop/case-studies-new/dominate/dominate-high-screen.png"
        hiImgName="dominate hi screen"
        hiImgClass="dominate-hi-screen-img"
        hiImgOuterClass="dominate-hi-screen-img-section"
        prototypeImg="/imgs/desktop/case-studies-new/dominate/dominate-prototype.png"
        prototypeImgName="dominate prototype screen"
        prototypeImgClass="dominate-prototype-screen"
        prototypeImgOuterClass="dominate-prototype-screen-section"
      />
      <DominateLanidingPageFoldSix />
    </>
  );
}
