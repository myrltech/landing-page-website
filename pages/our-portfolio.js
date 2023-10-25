import React from "react";
import HeadTag from "../components/desktop/common/HeadTag";
import Footer from "../components/desktop/header-footer/Footer";
import Header from "../components/desktop/header-footer/Header";
import OurPortfolioMain from "../components/desktop/ourPortfolio/OurPortfolioMain";
import MobileFooter from "../components/mobile/header-footer/MobileFooter";
import MobileHeader from "../components/mobile/header-footer/MobileHeader";

export default function ourPortfolio() {
  return (
    <>
      <HeadTag
        title=" Myrl Tech"
        description="A platform to help funded startups and enterprises find the best tech partner agencies from across the globe to help augment their product tech teams to fuel the next stage of innovation."
      />
      <div className="our-product-main-section">
        <div className="d-none d-md-block">
          <Header activeLink="our products" />
        </div>{" "}
        <div className="d-block d-md-none">
          <MobileHeader activeMenu="Our Portfolio" />
        </div>
        <OurPortfolioMain />
        <div className="d-none d-md-block">
          <Footer />
        </div>
        <div className="d-block d-md-none">
          <MobileFooter />
        </div>
      </div>
    </>
  );
}
