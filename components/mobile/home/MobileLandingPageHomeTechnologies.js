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
import {
  technologiesIconArrayOne,
  technologiesIconArrayTwo,
} from "./mobileTechnologies";

export default function MobileLandingPageHomeTechnologies() {
  /*====================================================
            
                        renderSlide

    ===================================================*/
  const renderSlide = (technologiesArray) => {
    return (
      <div className="d-flex flex-wrap align-items-center">
        {technologiesArray.map((data, index) => (
          <Fragment key={index}>
            <div className="col-4 mobile-text-center mv-pt-55">
              <img
                src={data.imgPath}
                alt="our technologoies"
                className={data.imgClass}
              />
            </div>
          </Fragment>
        ))}
      </div>
    );
  };

  /*====================================================
            
                           return

    ===================================================*/
  return (
    <div className="mobile-home-technologies-div">
      <div className="mobile-text-right">
        {/* title-line--technologies title-line mobile-home-technologies-title*/}
        <h2 className="mobile-font-32-Nunito-700 mobile-home-technologies-title mobile-text-right">
          {/* Technologies <br /> Our Partners <br />{" "} */}
          {/* <span className="green-purple-gradient-text">Specialize in</span> */}
          <span className="green-purple-gradient-text"> technologies</span>
          <br />
          <span className="font-64-NunitoSans-600"> we Specialize in</span>
        </h2>
      </div>
      <div className="mobile-home-tech-logo">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={150}
          totalSlides={2}
          interval={5000}
          isPlaying={true}
          playDirection={"forward"}
          step={1}
          infinite={true}
        >
          <Slider>
            <Slide index={1}>{renderSlide(technologiesIconArrayOne)}</Slide>
            <Slide index={2}>{renderSlide(technologiesIconArrayTwo)}</Slide>
          </Slider>
          <div className="text-center mv-pt-40">
            <DotGroup dotNumbers={true} className="slide_dotgroup" />
          </div>{" "}
        </CarouselProvider>
      </div>
    </div>
  );
}
