import React from "react";
import HeadTag from "../components/desktop/common/HeadTag";
import Footer from "../components/desktop/header-footer/Footer";
import Header from "../components/desktop/header-footer/Header";
import ResourcesMain from "../components/desktop/resources/resourcesMain";
import MobileFooter from "../components/mobile/header-footer/MobileFooter";
import MobileHeader from "../components/mobile/header-footer/MobileHeader";

const Resources = () => {
  return (
    <div className="resources-main-section">
      <HeadTag
        title=" Myrl Tech"
        description="A platform to help funded startups and enterprises find the best tech partner agencies from across the globe to help augment their product tech teams to fuel the next stage of innovation."
      />
      <div className="d-none d-md-block">
        <Header activeLink={"resources"} />
      </div>
      <div className="d-block d-md-none">
        <MobileHeader />
      </div>

      <ResourcesMain />
      <div className="d-none d-md-block">
        <Footer />
      </div>
      <div className="d-block d-md-none">
        <MobileFooter />
      </div>
    </div>
  );
};

export default Resources;
