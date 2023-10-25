import React from "react";
import LandingPageBlogMain from "../components/desktop/blog/LandingPageBlogMain";
import HeadTag from "../components/desktop/common/HeadTag";
import Footer from "../components/desktop/header-footer/Footer";
import Header from "../components/desktop/header-footer/Header";
import MobileFooter from "../components/mobile/header-footer/MobileFooter";
import MobileHeader from "../components/mobile/header-footer/MobileHeader";

const Blog = () => {
  return (
    <>
      <HeadTag
        title="Myrl Tech Home"
        description="A platform to help funded startups and enterprises find the best tech partner agencies from across the globe to help augment their product tech teams to fuel the next stage of innovation."
      />
      <div className="blog-outer-section">
        <div className="d-none d-md-block">
          <Header />
        </div>
        {/* <div className="d-block d-md-none">
          <MobileHeader />
        </div> */}
        <div className="d-none d-md-block">
          <LandingPageBlogMain />
          <Footer />
        </div>
        {/* <div className="d-block d-md-none">
          <MobileFooter />
        </div> */}
      </div>
    </>
  );
};

export default Blog;
