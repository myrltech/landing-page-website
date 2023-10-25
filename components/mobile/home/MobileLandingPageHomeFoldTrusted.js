import React, { Fragment } from "react";
import {
  trustedCompaniesArrayOne,
  trustedCompaniesArrayThree,
  trustedCompaniesArrayTwo,
} from "../../desktop/home/trustedCompanies";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const testArray = [
  {
    imgPath: "/imgs/mobile/home-new/testomonial/clutch.svg",
    imgClass: "clutch-img",
  },
  {
    imgPath: "/imgs/mobile/home-new/testomonial/winter.svg",
    imgClass: "winter-img",
  },
  {
    imgPath: "/imgs/mobile/home-new/testomonial/trustpilot.svg",
    imgClass: "trustpilot-img",
  },
  {
    imgPath: "/imgs/mobile/home-new/testomonial/capterra.svg",
    imgClass: "capterra-img",
  },
  {
    imgPath: "/imgs/mobile/home-new/testomonial/gartner.svg",
    imgClass: "gartner-img",
  },
];

export default function MobileLandingPageHomeFoldTrusted() {
  return (
    <div className="mobile-trusted-title-icon-div">
      <h2 className="text-left mobile-font-32-Nunito-700">
        Trusted by
        <br />
        {/* <span className="title-line title-line--truted1 green-purple-gradient-text"> */}{" "}
        <span className="green-purple-gradient-text">
          the top coveted
          {/* </span> */}
          <br />{" "}
          {/* <span className="title-line title-line--truted2 green-purple-gradient-text"> */}{" "}
          companies
          {/* </span> */}
        </span>
      </h2>

      <div className="trusted-company-card-carousel-colm">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={88}
          totalSlides={3}
          isPlaying={true}
          interval={2700}
          playDirection={"forward"}
          step={1}
          infinite={true}
        >
          <Slider>
            <Slide index={0}>
              <div className="d-flex flex-wrap trusted-company-card-slide">
                {trustedCompaniesArrayOne.map((data, index) => (
                  <Fragment key={index}>
                    {data.isInvisibleCard ? (
                      <div className="trusted-company-invisible-card flex-shrink-0"></div>
                    ) : (
                      <div className="trusted-company-card flex-shrink-0">
                        <img
                          src={data.imgPath}
                          alt="trusted comoany"
                          className={data.imgClass}
                        />
                      </div>
                    )}
                  </Fragment>
                ))}
              </div>
            </Slide>
            <Slide index={1}>
              <div className="d-flex flex-wrap trusted-company-card-slide">
                {trustedCompaniesArrayTwo.map((data, index) => (
                  <Fragment key={index}>
                    {data.isInvisibleCard ? (
                      <div className="trusted-company-invisible-card flex-shrink-0"></div>
                    ) : (
                      <div className="trusted-company-card flex-shrink-0">
                        <img
                          src={data.imgPath}
                          alt="trusted comoany"
                          className={data.imgClass}
                        />
                      </div>
                    )}
                  </Fragment>
                ))}
              </div>
            </Slide>
            <Slide index={2}>
              <div className="d-flex flex-wrap trusted-company-card-slide">
                {trustedCompaniesArrayThree.map((data, index) => (
                  <Fragment key={index}>
                    {data.isInvisibleCard ? (
                      <div className="trusted-company-invisible-card flex-shrink-0"></div>
                    ) : (
                      <div className="trusted-company-card flex-shrink-0">
                        <img
                          src={data.imgPath}
                          alt="trusted comoany"
                          className={data.imgClass}
                        />
                      </div>
                    )}
                  </Fragment>
                ))}
              </div>
            </Slide>
          </Slider>
        </CarouselProvider>
      </div>

      {/* <h5 className="mobile-font-16-Nunito-600 mobile-text-center mv-pt-47">
        <img
          src={"/imgs/desktop/icons/white-left-arrow.svg"}
          alt=""
          className="home-left-arrow-img"
        />{" "}
        Swipe to see more
      </h5> */}
      <div className="d-flex align-items-center justify-content-between flex-nowrap">
        {testArray.map((data, index) => (
          <Fragment key={index}>
            <img
              src={data.imgPath}
              alt="testomonial"
              className={data.imgClass}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
