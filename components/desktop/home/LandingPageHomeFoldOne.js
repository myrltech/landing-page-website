import React, { Fragment } from "react";
import Link from "next/link";

const howItWorks = [
  {
    para: "Post your requirements for Product & Engineering Teams.",
    imgPath: "/imgs/desktop/home/how-it-works-one.svg",
    imgClass: "how-it-works-img-one",
  },
  {
    para: "Discover top resource augmentation firms across the world that match your requirements.",
    imgPath: "/imgs/desktop/home/how-it-works-two.svg",
    imgClass: "how-it-works-img-two",
  },
  {
    para: "Connect with the most competent team and build your product.",
    imgPath: "/imgs/desktop/home/how-it-works-three.png",
    imgClass: "how-it-works-img-three",
  },
];

export default function LandingPageHomeFoldOne() {
  /*==============================================================

                           renderHowItWorks

   ===============================================================*/
  const renderHowItWorks = () => {
    return (
      <div className="text-center how-it-works-main-div">
        <h3 className="font-64-NunitoSans-600 margin-auto home-how-it-works-text">
          How it Works
        </h3>
        <p className="color-white-66 font-36-NunitoSans-400 pt-30">
          Need specialized product engineering teams to <br />
          fuel your next tech innovation?
        </p>
        <div className="how-it-works-content-div">
          {howItWorks.map((data, index) => (
            <Fragment key={index}>
              <div
                className={
                  index === 0
                    ? "d-flex flex-nowrap align-items-center"
                    : "d-flex flex-nowrap align-items-center how-it-works-content"
                }
              >
                <div className="text-right col-6 how-it-works-content-left-div">
                  <div>
                    <h2 className="font-144-NunitoSans-700-italic">
                      {index + 1}
                    </h2>
                    <p className="font-36-NunitoSans-400 how-it-works-content-para">
                      {data.para}
                    </p>
                  </div>
                </div>
                <div className="col-6 how-it-works-content-right-div animZoomInOut">
                  <img
                    src={data.imgPath}
                    alt="how it works"
                    className={data.imgClass}
                  />
                </div>
              </div>
            </Fragment>
          ))}
          <div className="how-it-works-line-circle-div d-flex flex-column ">
            <img
              src={"/imgs/desktop/home/how-it-works-line-circle.png"}
              alt=""
            />
            <span className="font-72-NunitoSans-600 purple-green-gradient-text">
              Augment.
            </span>
          </div>
        </div>
      </div>
    );
  };
  /*============================================================

                             return

  ============================================================*/
  return (
    <>
      <div className="d-flex align-items-center home-fold-one-main flex-nowrap">
        <div>
          <h2 className="font-68-NunitoSans-700">
            Find Agile Product <br />
            Engineering Teams.
          </h2>
          <p className="font-32-NunitoSans-600 mt-50 color-white-66">
            <span className="font-48-NunitoSans-600 purple-green-gradient-text ">
              {" "}
              Augment{" "}
            </span>
            by Myrl Tech is a platform that helps
            <br /> you disover the right experts to help build your products.
          </p>
          <Link href="/augment">
            <a>
              <h4 className="agument-btn mt-50 home-explore-btn">
                Explore Augment
              </h4>
            </a>
          </Link>{" "}
        </div>
        <div className="animZoomInOut">
          <img
            src={"/imgs/desktop/home/home-fold-one-new.png"}
            alt=""
            className="home-fold-one-img"
          />
        </div>
      </div>
      {renderHowItWorks()}
    </>
  );
}
