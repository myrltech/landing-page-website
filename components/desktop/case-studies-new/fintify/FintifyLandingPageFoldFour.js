import React from "react";

export default function FintifyLandingPageFoldFour() {
  return (
    <div className="fintify-desgin-div">
      <h3 className="text-right mobile-text-right font-48-NunitoSans-600 remote-teams-fold-two-subtitle remote-teams-fold-two-subtitle--design">
        <span className="font-48-NunitoSans-800 color-white-21">04</span>Design
        System
      </h3>
      <div className="d-flex flex-nowrap mv-flex-wrap align-items-start remote-teams-design-inner-div">
        <div className="col-md-2 col-6 p-0">
          <h5 className="text-uppercase mobile-text-left text-center font-24-NunitoSans-700 remote-teams-design-inner-titles">
            colors
          </h5>
          <div className="d-flex flex-nowrap align-items-start mv-pt-20 pt-100">
            <div className="fintify-design-color-one"></div>
            <div className="fintify-design-color-two"></div>
          </div>
          <div className="d-flex flex-nowrap align-items-start mv-pt-5 pt-30">
            <div className="fintify-design-color-three"></div>
            <div className="fintify-design-color-four"></div>
          </div>
        </div>
        <div className="col-md-2 col-0"></div>
        <div className="col-md-4 col-6 p-0">
          <h5 className="text-uppercase font-24-NunitoSans-700  remote-teams-design-inner-titles">
            Fonts used
          </h5>
          <h6 className="pt-100 font-48-quicksand-400 fintify-design-font-text1 mv-pt-20">
            Heading 1
          </h6>
          <h6 className="pt-10 font-28-helvetica-700 mv-pt-5">Heading 2</h6>
          <h6 className="pt-20 font-18-helvetica-700 mv-pt-5 fintify-design-font-text3">
            Heading 3
          </h6>
          <h6 className="pt-30  font-16-helvetica-400 mv-pt-5 fintify-design-font-text4">
            Captions
          </h6>
          <h6 className="pt-20 font-14-helvetica-400 mv-pt-5">Text</h6>
        </div>
        <div className="col-md-4 col-6 p-0">
          <h5 className="text-uppercase font-24-NunitoSans-700 remote-teams-design-inner-titles">
            Components
          </h5>
          <div className="pt-60 mv-pt-20">
            <img
              src={"/imgs/desktop/case-studies-new/fintify/design-tab-img.png"}
              alt="fintify tab"
              className="fintify-design-tab-img"
            />
          </div>
          <div className="fintify-design-component-2"></div>
          <div className="fintify-design-component-3">
            <img
              src={"/imgs/desktop/case-studies-new/fintify/fintify-navbar.png"}
              alt="fintify navbar"
              className="fintify-navbar-img"
            />
          </div>
          <div className="fintify-design-component-4"></div>
        </div>
      </div>
    </div>
  );
}
