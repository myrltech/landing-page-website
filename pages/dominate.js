import React from "react";
import DominateLandingPageMain from "../components/desktop/case-studies-new/dominate/DominateLandingPageMain";
// import CaseStudiesFold from "../components/desktop/caseStudies/CaseStudiesFold";
import HeadTag from "../components/desktop/common/HeadTag";
// import Footer from "../components/desktop/header-footer/Footer";
import Header from "../components/desktop/header-footer/Header";
import MobileHeader from "../components/mobile/header-footer/MobileHeader";
// import Dominate from "../components/desktop/dominate/Dominate";

export default function dominate() {
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
        <DominateLandingPageMain />
        {/* <div className="d-none pt-105 d-md-block">
        <Footer />
      </div>
      <div className="d-block d-md-none">
        <MobileHeader />
      </div> */}
      </div>{" "}
    </>
  );
}
