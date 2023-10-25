import React from "react";
import { Fragment } from "react";
import { trustedCompaniesArrayOne } from "./companiesLogo";

export default function LandingPageHomeNewFoldThree() {
  /*============================================       
            return
============================================= */
  return (
    <>
      <div className="home-new-trusted-company-section d-flex justify-content-start align-items-center">
        <h2 className="font-32-montserrat-600 trusted-by-title mobile-font-36-montserrat-800">
          Trusted by{" "}
        </h2>
        {/*============================================       
                trustedCompaniesArrayOne
       ============================================= */}
        <div className="d-flex flex-nowrap align-items-center home-new-trusted-company-row-one">
          {trustedCompaniesArrayOne.map((data, index) => (
            <Fragment key={index}>
              <img
                src={data.imgPath}
                alt="trusted company"
                className={data.imgClass}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
