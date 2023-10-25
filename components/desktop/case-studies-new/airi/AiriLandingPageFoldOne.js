import React from "react";
import PageTitle from "../../common/PageTitle";

export default function AiriLandingPageFoldOne() {
  return (
    <>
      <div className="d-none d-md-block">
        <div className="d-flex flex-nowrap justify-content-between align-items-center airi-fold-one-div">
          <div>
            <img
              src="/imgs/desktop/case-studies-new/airi/airi-logo.png"
              alt="airi"
              className="airi-logo"
            />
            <PageTitle title={"Airi"} extraClass="pt-40" />
            {/* <h2 className="font-72-NunitoSans-900 pt-40">Airi</h2> */}
            <h3 className="font-48-NunitoSans-600 pt-50">
              <span className="font-48-NunitoSans-800 color-white-21">01</span>{" "}
              Introduction
            </h3>
            <p className="font-24-NunitoSans-400 pt-35 remote-teams-para">
              An advanced A.I assistant for mental wellbeing, Airi understands
              you at a deeper level and helps you uncover deep triggers and
              buried emotions that can lead to breakdowns or episodes in the
              future. <br />
              <br />A friendly assistant that helps you improve, gradually but
              effectively.{" "}
            </p>
            <div className="our-product-card-btn our-product-card-btn--case-studies">
              <a
                href="http://airi.life/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <h5 className="color-white-66 product-card-font-24-NunitoSans-600">
                  Visit Website
                </h5>
              </a>
            </div>
          </div>
          <div>
            <img
              src="/imgs/desktop/case-studies-new/airi/airi-main-img.png"
              alt="airi main"
              className="airi-main-img"
            />
          </div>
        </div>
      </div>
      <div className="d-block d-md-none airi-fold-one-div">
        <img
          src="/imgs/desktop/case-studies-new/airi/airi-logo.png"
          alt="airi"
          className="airi-logo"
        />
        <PageTitle title={"Airi"} extraClass="pt-40 mv-pt-10" />
        <div className="mobile-text-center">
          <img
            src="/imgs/desktop/case-studies-new/airi/airi-main-img.png"
            alt="airi main"
            className="airi-main-img"
          />
        </div>
        <h3 className="font-48-NunitoSans-600 pt-50 mv-pt-20">
          <span className="font-48-NunitoSans-800 color-white-21">01</span>{" "}
          Introduction
        </h3>
        <p className="font-24-NunitoSans-400 pt-35 remote-teams-para mv-pt-10">
          An advanced A.I assistant for mental wellbeing, Airi understands you
          at a deeper level and helps you uncover deep triggers and buried
          emotions that can lead to breakdowns or episodes in the future. <br />
          <br />A friendly assistant that helps you improve, gradually but
          effectively.{" "}
        </p>
        <div className="our-product-card-btn our-product-card-btn--case-studies">
          <a href="http://airi.life/" rel="noopener noreferrer" target="_blank">
            <h5 className="color-white-66 product-card-font-24-NunitoSans-600">
              Visit Website
            </h5>
          </a>
        </div>
      </div>
    </>
  );
}
