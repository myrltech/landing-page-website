import React from "react";
import LandingPageHomeNewFoldOne from "./LandingPageHomeNewFoldOne";
import LandingPageHomeNewFoldTwo from "./LandingPageHomeNewFoldTwo";

export default function LandingPageHomeNew() {
  return (
    <>
      <div className="home-new-main-section">
        <LandingPageHomeNewFoldOne />
        <LandingPageHomeNewFoldTwo />
      </div>
      {/* <LandingPageHomeOurTechnologies /> */}
      {/* <LandingPageHomeNewFoldThree /> */}
    </>
  );
}
