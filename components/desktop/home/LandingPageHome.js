import React from "react";
import Footer from "../header-footer/Footer";
import Header from "../header-footer/Header";
import LandingPageHomeFoldOne from "./LandingPageHomeFoldOne";
import LandingPageHomeOurTechnologies from "./LandingPageHomeOurTechnologies";
import LandingPageTrustedCompines from "./LandingPageTrustedCompines";
import LandingPageWhyTheyTrust from "./LandingPageWhyTheyTrust";

export default function LandingPageHome() {
  return (
    <>
      <Header activeLink={"home"} />
      <LandingPageHomeFoldOne />
      <LandingPageTrustedCompines />
      <LandingPageWhyTheyTrust />
      <LandingPageHomeOurTechnologies />
      <Footer />
    </>
  );
}
