import React from "react";
import DeepSleepLandingPageMain from "../components/desktop/case-studies-new/deep-sleep/DeepSleepLandingPageMain";
import HeadTag from "../components/desktop/common/HeadTag";
import Header from "../components/desktop/header-footer/Header";
import MobileHeader from "../components/mobile/header-footer/MobileHeader";

export default function deepSleep() {
  return (
    <>
      <HeadTag
        title=" Myrl Tech"
        description="A platform to help funded startups and enterprises find the best tech partner agencies from across the globe to help augment their product tech teams to fuel the next stage of innovation."
      />
      <div className="d-none d-md-block">
        <Header />
      </div>
      <div className="d-block d-md-none">
        <MobileHeader />
      </div>
      <DeepSleepLandingPageMain />
    </>
  );
}
