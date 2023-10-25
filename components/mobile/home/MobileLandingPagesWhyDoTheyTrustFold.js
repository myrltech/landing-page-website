import React, { Fragment } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  DotGroup,
  // ButtonBack,
  // ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { reviews } from "../../../store/data/companyReview";

// /*====================================================
//                   dummyData
//  ===================================================*/
// const dummyData = [
//   {
//     para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cu",
//   },
//   {
//     para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea .",
//   },
//   {
//     para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cu",
//   },
//   {
//     para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cu",
//   },
//   {
//     para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cu",
//   },
// ];

export default function MobileLandingPagesWhyDoTheyTrustFold() {
  /*====================================================
            
                        renderCard

    ===================================================*/
  const renderCard = (data) => {
    return (
      <div className="home-why-they-trust-card">
        <div className="d-flex flex-nowrap align-items-center">
          <div className="home-why-they-trust-card--img-section">
            <img src={data.imgPath} alt="trusted company" />
          </div>
          <div className="home-why-they-trust-card--name-section">
            <h3 className="mobile-font-16-Nunito-600">{data.fName}</h3>
            <h5 className="mobile-font-12-Nunito-600 color-white-66">
              {data.position}
            </h5>
          </div>
        </div>
        <p className="home-why-they-trust-card--para-section mv-pt-22 mobile-font-11-Nunito-600">
          {data.desc}
        </p>{" "}
        {data.tags && (
          <p className="home-why-they-trust-card--para-section mv-pt-22 mobile-font-11-Nunito-600">
            {data.tags}
          </p>
        )}
      </div>
    );
  };
  /*====================================================
            
                        return

    ===================================================*/
  return (
    <div className="mobile-home-why-they-trust">
      <h2 className="mobile-font-32-Nunito-700 title-line title-line--why-they-trust">
        Why do they Trust Us?
      </h2>
      <div className="mv-pt-47">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={5}
          interval={5000}
          isPlaying={true}
          playDirection={"forward"}
          step={1}
          infinite={true}
        >
          <Slider>
            {reviews.map((data, index) => (
              <Fragment key={index}>
                <Slide index={index}>{renderCard(data)}</Slide>
              </Fragment>
            ))}
          </Slider>
          <div className="mobile-text-center">
            <DotGroup dotNumbers={true} className="slide_dotgroup" />
          </div>{" "}
        </CarouselProvider>
      </div>
    </div>
  );
}
