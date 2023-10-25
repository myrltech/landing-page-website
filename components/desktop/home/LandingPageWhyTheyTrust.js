import React, {
  Fragment,
  // useCallback,
  // useEffect,
  // useRef,
  // useState,
} from "react";
// import ScrollContainer from "react-indiana-drag-scroll";
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

export default function LandingPageWhyTheyTrust() {
  const renderCard = (data) => {
    return (
      <div className="home-why-they-trust-card">
        <div className="d-flex flex-nowrap align-items-center">
          <div className="home-why-they-trust-card--img-section">
            <img src={data.imgPath} alt="trusted company" />
          </div>
          <div className="home-why-they-trust-card--name-section">
            <h3 className="font-36-NunitoSans-600">{data.fName}</h3>
            <h5 className="font-24-NunitoSans-600 pt-10 color-white-66">
              {data.position}
            </h5>
          </div>
        </div>
        <p className="home-why-they-trust-card--para-section pt-44 font-20-NunitoSans-600">
          {data.desc}
        </p>{" "}
        {data.tags && (
          <p className="pt-44 font-20-NunitoSans-600">{data.tags}</p>
        )}
      </div>
    );
  };
  return (
    <div className="home-why-they-trusted-section">
      <h2 className="font-64-NunitoSans-600 home-why-do-they-text">
        Why do they trust us?
      </h2>
      <p className="font-24-NunitoSans-600 color-white-66">
        Here is what they have to say about us!
      </p>
      {/* <ScrollContainer
        className="home-why-they-trust-content-outer-div"
        horizontal={true}
        vertical={false}
        // ref={whyTrustRef}
      > */}{" "}
      <div className="home-why-they-trust-content-outer-div">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={50}
          totalSlides={2}
          isPlaying={true}
          interval={2000}
          playDirection={"forward"}
          step={1}
          infinite={true}
        >
          <Slider>
            <Slide index={0}>
              <div className="d-flex flex-nowrap align-items-start">
                {reviews.map((data, index) => (
                  <Fragment key={index}>
                    {index <= 2 && <> {renderCard(data)}</>}
                  </Fragment>
                ))}
              </div>{" "}
            </Slide>
            <Slide index={1}>
              {" "}
              <div className="d-flex flex-nowrap align-items-start">
                {reviews.map((data, index) => (
                  <Fragment key={index}>
                    {index <= 2 ? "" : <> {renderCard(data)}</>}
                  </Fragment>
                ))}
              </div>{" "}
            </Slide>
          </Slider>
          {/* </div> */}
          <div className="text-center">
            <DotGroup dotNumbers={true} className="slide_dotgroup" />
          </div>{" "}
        </CarouselProvider>
      </div>{" "}
      {/* </ScrollContainer> */}
    </div>
  );
}
