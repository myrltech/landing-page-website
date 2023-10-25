import React, { Fragment } from "react";
import {
  technologiesIconArrayFive,
  technologiesIconArrayFour,
  technologiesIconArrayOne,
  technologiesIconArrayThree,
  technologiesIconArrayTwo,
  mobileArray,
} from "./technologiesIcon";

// const testArray = [
//   {
//     imgPath: "/imgs/desktop/home/testomonial/clutch.svg",
//     imgClass: "clutch-img",
//   },
//   {
//     imgPath: "/imgs/desktop/home/testomonial/winter.svg",
//     imgClass: "winter-img",
//   },
//   {
//     imgPath: "/imgs/desktop/home/testomonial/trustpilot.svg",
//     imgClass: "trustpilot-img",
//   },
//   {
//     imgPath: "/imgs/desktop/home/testomonial/capterra.svg",
//     imgClass: "capterra-img",
//   },
//   {
//     imgPath: "/imgs/desktop/home/testomonial/gartner.svg",
//     imgClass: "gartner-img",
//   },
// ];

export default function LandingPageHomeOurTechnologies() {
  /*============================================================

                             return

  ============================================================*/
  return (
    <div>
      <div className="home-our-technologies-div d-none d-md-block">
        <div className="d-flex flex-nowrap justify-content-between align-items-end">
          <div className="col-7">
            <div className="d-flex pt-90 flex-nowrap align-items-center">
              {technologiesIconArrayOne.map((data, index) => (
                <Fragment key={index}>
                  <img
                    src={data.imgPath}
                    alt="technology"
                    className={data.imgClass}
                  />
                </Fragment>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-72-proxima-700 text-right home-our-technologies-title">
              <span className="gradient-bg-text gradient-bg-text__technologies">
                {" "}
                technologies
              </span>
              <br />
              <span className="font-64-NunitoSans-600"> we Specialize in</span>
            </h2>
          </div>
        </div>
        <div className="d-flex pt-90 flex-nowrap align-items-center">
          {technologiesIconArrayTwo.map((data, index) => (
            <Fragment key={index}>
              <img
                src={data.imgPath}
                alt="technology"
                className={data.imgClass}
              />
            </Fragment>
          ))}
        </div>

        <div className="pt-90 d-flex flex-nowrap">
          {technologiesIconArrayThree.map((data, index) => (
            <Fragment key={index}>
              <img
                src={data.imgPath}
                alt="technology"
                className={data.imgClass}
              />
            </Fragment>
          ))}
        </div>
        <div className="pt-100 d-flex flex-nowrap">
          {technologiesIconArrayFour.map((data, index) => (
            <Fragment key={index}>
              <img
                src={data.imgPath}
                alt="technology"
                className={data.imgClass}
              />
            </Fragment>
          ))}
        </div>
        <div className="pt-100 d-flex flex-nowrap">
          {technologiesIconArrayFive.map((data, index) => (
            <Fragment key={index}>
              <img
                src={data.imgPath}
                alt="technology"
                className={data.imgClass}
              />
            </Fragment>
          ))}
        </div>
        {/* <div className="text-right d-flex pt-105 flex-column align-items-end">
      </div> */}
        {/* <div className="d-flex align-items-center justify-content-between pt-105 flex-nowrap">
        {testArray.map((data, index) => (
          <Fragment key={index}>
            <img
              src={data.imgPath}
              alt="testomonial"
              className={data.imgClass}
            />
          </Fragment>
        ))}
      </div> */}
      </div>
      <div className="d-block d-md-none home-our-technologies-div">
        <h2 className="mobile-font-50-NunitoSans-600  home-our-technologies-title">
          <span className="gradient-bg-text gradient-bg-text__technologies">
            {" "}
            technologies
          </span>
          <br />
          <span className="mobile-font-36-proxima-700"> we Specialize in</span>
        </h2>
        <div className="d-flex flex-wrap align-items-center mv-pt-32">
          {mobileArray.map((data, index) => (
            <Fragment key={index}>
              <img
                src={data.imgPath}
                alt="technology"
                className={data.imgClass}
              />
            </Fragment>
          ))}
        </div>
        <div className="d-flex justify-content-center">
          <button className="gradient-btn gradient-btn--see-all">
            See all
          </button>
        </div>
      </div>
    </div>
  );
}
