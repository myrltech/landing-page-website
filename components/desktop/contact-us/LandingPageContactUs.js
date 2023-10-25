import React from "react";
import Footer from "../header-footer/Footer";
import Header from "../header-footer/Header";
import LandingPageContactForm from "./LandingPageContactForm";

export default function LandingPageContactUs() {
  return (
    <div className="contact-us-main-div">
      <Header activeLink={"contact-us"} />
      <div className="contact-us-main-section">
        <LandingPageContactForm />
        <h2 className="font-57-NunitoSans-400 text-center conatct-us-find-us-text">
          Find <span className="green-purple-gradient-text"> us in </span>
        </h2>
      </div>
      <Footer />
    </div>
  );
}
