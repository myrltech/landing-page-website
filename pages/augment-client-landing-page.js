import React from "react";
// import AugmentClientLandingPage from "../components/desktop/augment-client-landing-page/AugmentClientLandingPage";
import HeadTag from "../components/desktop/common/HeadTag";
// import AugmentClientLandingPageMobile from "../components/mobile/augment-client-landing-page/AugmentClientLandingPageMobile";
// import Client from "../components/mobile/client/MobileClient";

export default function augmentClientLandingPage() {
  return (
    <>
      <HeadTag
        title=" Myrl Tech"
        description="A platform to help funded startups and enterprises find the best tech partner agencies from across the globe to help augment their product tech teams to fuel the next stage of innovation."
      />
      {/* <div className="d-none d-md-block augment-client-landing-page-bg">
        <AugmentClientLandingPage />
      </div>
      <div className="d-block d-md-none">
        <AugmentClientLandingPageMobile />
        {/* <Client /> 
      </div> */}
    </>
  );
}
