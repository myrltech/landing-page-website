import React from "react";
import MobileFooter from "../../mobile/header-footer/MobileFooter";
import MobileHeader from "../../mobile/header-footer/MobileHeader";
import Footer from "../header-footer/Footer";
import Header from "../header-footer/Header";
import LandingPageAboutUsFoldOne from "./LandingPageAboutUsFoldOne";
import LandingPageAboutUsProductTeams from "./LandingPageAboutUsProductTeams";

export default function LandingPageAboutUS() {
  return (
    <>
      <div className="about-us-main-section">
        {/*==================================
         *            desktop view
         =================================*/}
        <div className="d-none d-md-block">
          <Header activeLink="aboutUs" />
        </div>{" "}
        {/*==================================
         *            mobile view
         =================================*/}{" "}
        <div className="d-block d-md-none">
          <MobileHeader activeMenu={"About Us"} />
        </div>
        <LandingPageAboutUsFoldOne />
        <LandingPageAboutUsProductTeams />
        {/*==================================
         *            desktop view
         =================================*/}
        <div className="d-none d-md-block">
          <Footer />
        </div>
        {/*==================================
         *            mobile view
         =================================*/}
        <div className="d-block d-md-none">
          <MobileFooter />
        </div>
      </div>
    </>
  );
}
