import React, { Fragment } from "react";
import {
  trustedCompaniesArrayOne,
  trustedCompaniesArrayThree,
  trustedCompaniesArrayTwo,
} from "./trustedCompanies";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function LandingPageTrustedCompines() {
  return (
    <div className="d-flex flex-nowrap align-center justify-content-between home-trusted-companines-main-div">
      <div className="trusted-company-card-carousel-colm">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={76}
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
        <div className="text-center pt-40 scroll-btn-section">
          <h5 className="font-24-NunitoSans-600">
            <img
              src={"./imgs/desktop/icons/white-left-arrow.svg"}
              alt=""
              className="home-left-arrow-img"
            />{" "}
            Swipe to see more
          </h5>
        </div>
      </div>
      <div className="col-5">
        <h2 className="font-72-NunitoSans-600 ">
          <span className="home-trusted-text"> Trusted by</span> the most
          <br />
          <span className="home-trusted-text-2"> coveted</span> companies <br />
          around the globe!
        </h2>
      </div>
    </div>
  );
}
