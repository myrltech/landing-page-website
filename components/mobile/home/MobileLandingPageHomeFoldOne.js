import React, { Fragment } from "react";
import Link from "next/link";

/*====================================================
                howItWorksArray
===================================================*/
const howItWorksArray = [
  {
    imgPath: "/imgs/mobile/icons/gradient-pencil-with-circle-icon.svg",
    para: "Post your requirements for Product & Engineering Teams.",
    imgclass: "home-how-it-works-post-icon",
  },
  {
    imgPath: "/imgs/mobile/icons/gradient-star-with-check-icon.svg",
    para: "Top resource augmentation firms across the world access your requirements.",
    imgclass: "home-how-it-works-star-icon",
  },
  {
    imgPath: "/imgs/mobile/icons/gradient-circle-lines-icon.svg",
    para: "Connect with the best team for your specific requirements.",
    imgclass: "home-how-it-works-connect-icon",
  },
];

export default function MobileLandingPageHomeFoldOne() {
  /*====================================================
            
                           renderHowItWorks

    ===================================================*/
  const renderHowItWorks = () => {
    return (
      <div className="mobile-how-it-works-div">
        <h3 className="mobile-font-32-Nunito-700 mobile-text-center margin-auto title-line">
          How it works?
        </h3>
        <div className="mv-pt-47">
          {howItWorksArray.map((data, key) => (
            <Fragment key={key}>
              <div className="mobile-how-its-works-cards d-flex flex-nowrap align-items-center">
                <div className="mobile-how-its-works-cards--imgs-div">
                  <img
                    src={data.imgPath}
                    alt={data.para}
                    className={data.imgclass}
                  />
                </div>
                <div className="mobile-how-its-works-cards--para-div">
                  <p className="mobile-font-14-Nunito-400">{data.para}</p>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    );
  };
  /*====================================================
            
                           return

    ===================================================*/
  return (
    <div className="mobile-home-fold-one-main-div">
      <h2 className="mobile-font-28-Nunito-700 mobile-home-fold-one-agile-text">
        Find Agile Product
        <br /> Engineering Teams.
      </h2>
      <div className="mobile-home-fold-one-para-div">
        <p className="mobile-font-14-Nunito-600 mobile-home-fold-one-need-special-text">
          Need specialized product engineering teams to <br />
          fuel your next technological innovation?
        </p>
        <p className="mobile-font-12-Nunito-600 mv-pt-17">
          <span className="mobile-purple-green-gradient-text mobile-font-18-Nunito-600">
            Augment
          </span>{" "}
          by Myrl Tech is a platform that helps you
          <br /> explore the right teams for your requirements.
        </p>
      </div>
      <div className=" mv-pt-27">
        <Link href="/augment">
          <a>
            <div className="gradient-btn mobile-text-center  margin-auto">
              Explore Augment
            </div>
          </a>
        </Link>{" "}
      </div>
      {renderHowItWorks()}
    </div>
  );
}
