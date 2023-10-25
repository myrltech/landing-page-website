import React from "react";
import RemoteTeamsLandingPageFive from "../remote-teams/RemoteTeamsLandingPageFive";
import RemoteTeamsLandingPageFoldThree from "../remote-teams/RemoteTeamsLandingPageFoldThree";
import RemoteTeamsLandingPageFoldTwo from "../remote-teams/RemoteTeamsLandingPageFoldTwo";
import RecruitxLandingPageFoldFour from "./RecruitxLandingPageFoldFour";
import RecruitxLandingPageFoldOne from "./RecruitxLandingPageFoldOne";
import RecruitxLandingPageFoldSix from "./RecruitxLandingPageFoldSix";

export default function RecruitxLandingPageMain() {
  return (
    <>
      <RecruitxLandingPageFoldOne />
      <RemoteTeamsLandingPageFoldTwo
        imgPath="./imgs/desktop/case-studies-new/recruitx/recruitx-low-screen.png"
        imgClass="recruitx-low-screen"
        imgName="recruitx low screen"
        lowContainerClass="aquaplan-low-screen-setion"
      />
      <RemoteTeamsLandingPageFoldThree
        imgPath="./imgs/desktop/case-studies-new/recruitx/recruitx-info-chart.png"
        imgClass="recruitx-info-chart"
        imgName="recruitx information chart"
        infoContainerClass="recruitx-info-chart-section"
      />
      <RecruitxLandingPageFoldFour />
      <RemoteTeamsLandingPageFive
        hiImgClass="recruitx-hi-screen"
        hiImgName="recruitx hi screen"
        hiImg="./imgs/desktop/case-studies-new/recruitx/recruitx-hi-screen.png"
        hiImgOuterClass="recruitx-hi-screen-outer"
        prototypeImgClass="recruitx-prototype-img"
        prototypeImgName="recruitx prototype"
        prototypeImg="./imgs/desktop/case-studies-new/recruitx/recruitx-prototype.png"
        prototypeImgOuterClass="recruitx-prototype-img-section"
      />
      <RecruitxLandingPageFoldSix />
    </>
  );
}
