import React from "react";
import MobileFooter from "../header-footer/MobileFooter";
import MobileHeader from "../header-footer/MobileHeader";
import MobileLandingPageHomeFoldOne from "./MobileLandingPageHomeFoldOne";
import MobileLandingPageHomeFoldTrusted from "./MobileLandingPageHomeFoldTrusted";
import MobileLandingPageHomeTechnologies from "./MobileLandingPageHomeTechnologies";
import MobileLandingPagesWhyDoTheyTrustFold from "./MobileLandingPagesWhyDoTheyTrustFold";

export default function MobileLandingPageHome() {
  return (
    <>
      <div className="mobile-home-bg">
        <MobileHeader activeMenu={"Home"} />
        <MobileLandingPageHomeFoldOne />
        <MobileLandingPageHomeFoldTrusted />
        <MobileLandingPagesWhyDoTheyTrustFold />
        <MobileLandingPageHomeTechnologies />
        <MobileFooter />
      </div>
    </>
  );
}
