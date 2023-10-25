import React from "react";
import HeadTag from "../components/desktop/common/HeadTag";
import LandingPageContactUs from "../components/desktop/contact-us/LandingPageContactUs";
import MobileLandingPageContactUs from "../components/mobile/contact-us/MobileLandingPageContactUs";

export default function contactUs() {
  return (
    <>
      <HeadTag
        title="Myrl Tech"
        description="with expertise in reactjs development, react native development, mobile app development, software development, we can help enterprises with offshore development solutions for enterprises based in U.S, Canada, Australia, Europe"
      />
      <div className="d-none d-md-block">
        <LandingPageContactUs />
      </div>
      <div className="d-block d-md-none">
        {" "}
        {/* <h1 className="text-center pt-5">Coming Soon</h1> */}
        <MobileLandingPageContactUs />
      </div>
    </>
  );
}
