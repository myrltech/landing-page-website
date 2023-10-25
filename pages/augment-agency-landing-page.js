import React from "react";
// import AugmentAgencyLandingPage from "../components/desktop/augment-agency-landing-page/AugmentAgencyLandingPage";
import HeadTag from "../components/desktop/common/HeadTag";
// import Agency from "../components/mobile/agency/Agency";

export default function agumentAgencyLandingPage() {
  return (
    <>
      <HeadTag
        title=" Myrl Tech"
        description="A platform to help funded startups and enterprises find the best tech partner agencies from across the globe to help augment their product tech teams to fuel the next stage of innovation."
      />
      {/* <div className="d-none d-md-block augment-agency-landing-page-bg">
        <AugmentAgencyLandingPage />
      </div>
      <div className="d-block d-md-none">
        <Agency />
      </div> */}
    </>
  );
}
