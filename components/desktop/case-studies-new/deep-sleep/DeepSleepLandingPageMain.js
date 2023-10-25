import React from "react";
import RemoteTeamsLandingPageFive from "../remote-teams/RemoteTeamsLandingPageFive";
import RemoteTeamsLandingPageFoldThree from "../remote-teams/RemoteTeamsLandingPageFoldThree";
import RemoteTeamsLandingPageFoldTwo from "../remote-teams/RemoteTeamsLandingPageFoldTwo";
import DeepSleepLandingPageFoldFour from "./DeepSleepLandingPageFoldFour";
import DeepSleepLandingPageFoldOne from "./DeepSleepLandingPageFoldOne";
import DeepSleepLandingPageFoldSix from "./DeepSleepLandingPageFoldSix";

export default function DeepSleepLandingPageMain() {
  /*==============================================
                    return
  ===============================================*/
  return (
    <>
      <DeepSleepLandingPageFoldOne />
      <RemoteTeamsLandingPageFoldTwo
        imgPath="/imgs/desktop/case-studies-new/deep-sleep/deep-sleep-low-screen.png"
        imgName="deep sleep low screen"
        imgClass="deep-sleep-low-screen"
        lowContainerClass="deep-sleep-low-screen-section"
      />
      <RemoteTeamsLandingPageFoldThree
        imgPath="/imgs/desktop/case-studies-new/deep-sleep/deep-sleep-info-chart.png"
        imgName="deep sleep info chart"
        imgClass="deep-sleep-info-chart"
        infoContainerClass="deep-sleep-info-chart-section"
      />
      <DeepSleepLandingPageFoldFour />
      <RemoteTeamsLandingPageFive
        hiImg="/imgs/desktop/case-studies-new/deep-sleep/deep-sleep-hi-screen.png"
        hiImgClass="deep-sleep-hi-screen"
        hiImgName="deep sleep hi screen"
        hiImgOuterClass="deep-sleep-hi-section"
        prototypeImg="/imgs/desktop/case-studies-new/deep-sleep/deep-sleep-prototype.png"
        prototypeImgName="deep sleep prototype"
        prototypeImgClass="deep-sleep-prototype-img"
        prototypeImgOuterClass="deep-sleep-prototype-section"
      />
      <DeepSleepLandingPageFoldSix />
    </>
  );
}
