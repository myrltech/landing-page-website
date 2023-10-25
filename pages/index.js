import HeadTag from "../components/desktop/common/HeadTag";
import Footer from "../components/desktop/header-footer/Footer";
import Header from "../components/desktop/header-footer/Header";
import LandingPageHomeNew from "../components/desktop/home-new/LandingPageHomeNew";
import MobileFooter from "../components/mobile/header-footer/MobileFooter";
import MobileHeader from "../components/mobile/header-footer/MobileHeader";

export default function Home() {
  return (
    <>
      <HeadTag
        title="Myrl Tech Home"
        description="A platform to help funded startups and enterprises find the best tech partner agencies from across the globe to help augment their product tech teams to fuel the next stage of innovation."
      />
      <div className="home-main-outer-section">
        <div className="d-none d-md-block">
          <Header />
        </div>
        <div className="d-block d-md-none">
          <MobileHeader />
        </div>
        <LandingPageHomeNew />
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
