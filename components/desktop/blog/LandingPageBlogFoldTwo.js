import React from "react";
import BlogCard from "./BlogCard";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const dummyCardArray = [1, 2, 3, 4, 5];

const LandingPageBlogFoldTwo = () => {
  return (
    <div className="blog-fold-two-section">
      <h2 className="font-96-montserrat-800 blogs-article-title">
        TRENDING <br /> ARTICLES{" "}
      </h2>
      <div className="blog-fold-two-slider-section">
        <CarouselProvider
          naturalSlideWidth={120}
          naturalSlideHeight={110}
          totalSlides={dummyCardArray.length}
          interval={5000}
          isPlaying={true}
          visibleSlides={2.5}
        >
          <Slider>
            {dummyCardArray.map((data, key) => (
              <Slide key={key} index={key}>
                <BlogCard />
              </Slide>
            ))}
          </Slider>
          <div className="d-flex justify-content-center mt-50">
            <ButtonBack>
              <img
                src={"/imgs/desktop/blog/blog-slider-left-arrow.svg"}
                alt=" left arrow"
              />
            </ButtonBack>
            <ButtonNext>
              {" "}
              <img
                src={"/imgs/desktop/blog/blog-slider-right-arrow.svg"}
                alt=" right arrow"
              />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
      {/*===================================================
                        bottom
      ===================================================*/}
      <div className="blog-fold-two-bottom-section">
        <div className="blog-small-card blog-small-card--bottom-card">
          <h5 className="font-20-montserrat-500 pt-10 color-white-35 text-right">
            24.09.2021
          </h5>
          <h3 className="pt-10 font-32-montserrat-600 blog-small-card--bottom-card-title">
            Things to avoid in your first B2B meeting with your client
          </h3>
          <div className="d-flex  align-items-center pt-40">
            <h4 className="blog-small-card--reading-text"> 2 min read</h4>
            <h4 className="pl-30 font-20-montserrat-500 color-white-72 d-flex align-items-center">
              B2B Sales <span className="blog-small-card--tag-span" /> Quick
              Tips
            </h4>
          </div>
          <div className="text-right">
            <img
              src={"/imgs/desktop/blog/blog-arrow-icon.svg"}
              alt="blog arrow"
              className="blog-small-card--bottom-card-arrow"
            />
          </div>
        </div>
        <div className="blog-fold-two-img">
          <img
            src="/imgs/desktop/blog/blog-fold-two-img.png"
            alt="blog fold "
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPageBlogFoldTwo;
