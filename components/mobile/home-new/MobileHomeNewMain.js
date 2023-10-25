import React from "react";
import MobileFooter from "../header-footer/MobileFooter";
import MobileHeader from "../header-footer/MobileHeader";
import MobileLandingPageHomeFoldTrusted from "../home/MobileLandingPageHomeFoldTrusted";
import MobileLandingPageHomeTechnologies from "../home/MobileLandingPageHomeTechnologies";
import MobileHomeNewFoldOne from "./MobileHomeNewFoldOne";
import MobileHomeNewFoldTwo from "./MobileHomeNewFoldTwo";

export default function MobileHomeNewMain() {
  return (
    <div className="mobile-home-new-main-section">
      <MobileHeader activeMenu="Home" />
      <MobileHomeNewFoldOne />
      <MobileHomeNewFoldTwo />
      <MobileLandingPageHomeTechnologies />
      <MobileLandingPageHomeFoldTrusted />
      <MobileFooter />
    </div>
  );
}
