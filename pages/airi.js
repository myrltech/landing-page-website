import React from "react";
import AiriLandingPageMain from "../components/desktop/case-studies-new/airi/AiriLandingPageMain";
import HeadTag from "../components/desktop/common/HeadTag";
import Header from "../components/desktop/header-footer/Header";
import MobileHeader from "../components/mobile/header-footer/MobileHeader";

export default function airi() {
  return (
    <>
      <HeadTag
        title=" Myrl Tech"
        description="A platform to help funded startups and enterprises find the best tech partner agencies from across the globe to help augment their product tech teams to fuel the next stage of innovation."
      />
      <div className="case-studies-bg">
        <div className="d-none d-md-block">
          <Header />
        </div>
        <div className="d-block d-md-none">
          <MobileHeader />
        </div>
        <AiriLandingPageMain />
      </div>
    </>
  );
}
