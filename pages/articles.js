import React from "react";
import LandingPageArticles from "../components/desktop/articles/LandingPageArticles";
import HeadTag from "../components/desktop/common/HeadTag";
import Footer from "../components/desktop/header-footer/Footer";
import Header from "../components/desktop/header-footer/Header";
import MobileFooter from "../components/mobile/header-footer/MobileFooter";
import MobileHeader from "../components/mobile/header-footer/MobileHeader";

const articles = () => {
  return (
    <>
      <HeadTag
        title="Myrl Tech Home"
        description="A platform to help funded startups and enterprises find the best tech partner agencies from across the globe to help augment their product tech teams to fuel the next stage of innovation."
      />
      <div className="articles-fold-one-outer-section">
        <div className="d-none d-md-block">
          <Header />
        </div>
        {/* <div className="d-block d-md-none">
          <MobileHeader />
        </div> */}
        <div className="d-none d-md-block">
          <LandingPageArticles />
          <Footer />
        </div>
        {/* <div className="d-block d-md-none">
          <MobileFooter />
        </div> */}
      </div>
    </>
  );
};

export default articles;
