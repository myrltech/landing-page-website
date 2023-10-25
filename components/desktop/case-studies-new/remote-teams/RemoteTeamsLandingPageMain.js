import React from "react";
// import Header from "../../header-footer/Header";
import RemoteTeamsLadingPageSix from "./RemoteTeamsLadingPageSix";
import RemoteTeamsLandingPageFive from "./RemoteTeamsLandingPageFive";
import RemoteTeamsLandingPageFoldThree from "./RemoteTeamsLandingPageFoldThree";
import RemoteTeamsLandingPageFoldOne from "./RemoteTeamsLandingPageFoldOne";
import RemoteTeamsLandingPageFoldTwo from "./RemoteTeamsLandingPageFoldTwo";
import RemoteTeamsLandingPageFoldFour from "./RemoteTeamsLandingPageFoldFour";

export default function RemoteTeamsLandingPageMain() {
  return (
    <>
      {/* <Header /> */}
      <RemoteTeamsLandingPageFoldOne />
      <RemoteTeamsLandingPageFoldTwo
        imgPath="/imgs/desktop/case-studies-new/remote-teams/low-screen-img.png"
        imgName="remote teams low fidelity screens"
        imgClass="remote-teams-low-screen-img"
      />
      <RemoteTeamsLandingPageFoldThree
        imgPath="/imgs/desktop/case-studies-new/remote-teams/information-img.png"
        imgName="remote teams information architecture"
        imgClass="remote-teams-information-img"
      />
      <RemoteTeamsLandingPageFoldFour />
      <RemoteTeamsLandingPageFive
        hiImg="/imgs/desktop/case-studies-new/remote-teams/hi-screen-img.png"
        hiImgName="remote teams hi fidelity screens"
        hiImgClass="remote-teams-hi-screen-img"
        prototypeImg="/imgs/desktop/case-studies-new/remote-teams/prototype-img.png"
        prototypeImgName="remote teams prototype"
        prototypeImgClass="remote-teams-prototype-img"
      />
      <RemoteTeamsLadingPageSix />
    </>
  );
}
