import React from "react";

export default function AiriLandingPageFoldFour() {
  return (
    <div className="airi-desgin-div">
      <h3 className="text-right mobile-text-right font-48-NunitoSans-600 remote-teams-fold-two-subtitle remote-teams-fold-two-subtitle--design">
        <span className="font-48-NunitoSans-800 color-white-21">04</span>Design
        System
      </h3>
      <div className="d-flex flex-nowrap mv-flex-wrap align-items-start remote-teams-design-inner-div">
        <div className="col-md-2 col-6 p-0">
          <h5 className="text-uppercase text-center mobile-text-left font-24-NunitoSans-700 remote-teams-design-inner-titles">
            colors
          </h5>
          <div className="d-flex flex-nowrap align-items-start pt-100 mv-pt-20">
            <div className="airi-design-color-one">
              <img
                src={
                  "/imgs/desktop/case-studies-new/airi/airi-design-color-one.png"
                }
                alt="airi color"
                className="airi-design-color-one"
              />
            </div>
            <div className="airi-design-color-two"></div>
          </div>
          <div className="d-flex flex-nowrap align-items-start mv-pt-5 pt-30">
            <div className="airi-design-color-three"></div>
            <div className="airi-design-color-four"></div>
          </div>
        </div>
        <div className="col-md-2 col-0"></div>
        <div className="col-md-4 col-6 p-0">
          <h5 className="text-uppercase font-24-NunitoSans-700 remote-teams-design-inner-titles">
            Fonts used
          </h5>
          <h2 className="pt-90 font-36-proxima-700 airi-font-list-text mv-pt-10">
            Heading 1
          </h2>
          <h3 className="font-24-proxima-700 pt-20 airi-font-list-text mv-pt-5">
            Heading 2
          </h3>
          <h4 className="font-18-proxima-700 pt-20 airi-font-list-text mv-pt-5">
            Heading 3
          </h4>
          <h4 className="font-16-proxima-700 pt-15 airi-font-list-text mv-pt-5">
            Heading 4
          </h4>
          <h5 className="font-14-proxima-700 pt-20 airi-font-list-text mv-pt-5">
            Heading 5
          </h5>
          <h6 className="font-12-proxima-400 pt-20 airi-font-list-text mv-pt-5">
            Body
          </h6>
        </div>
        <div className="col-md-4 col-6 p-0">
          <h5 className="text-uppercase font-24-NunitoSans-700 remote-teams-design-inner-titles mv-pt-20">
            Components
          </h5>
          <div className="d-flex flex-column">
            <img
              src={"/imgs/desktop/case-studies-new/airi/airi-design-com-1.png"}
              alt="airi btn"
              className="airi-design-com-1"
            />
            <img
              src={"/imgs/desktop/case-studies-new/airi/airi-design-com-2.png"}
              alt="airi navbar"
              className="airi-design-com-2"
            />

            <img
              src={"/imgs/desktop/case-studies-new/airi/airi-design-com-3.png"}
              alt="airi tabs"
              className="airi-design-com-3"
            />
            <img
              src={"/imgs/desktop/case-studies-new/airi/airi-design-com-4.png"}
              alt="airi option"
              className="airi-design-com-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
