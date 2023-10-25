import React from "react";
import { Fragment } from "react";
import Link from "next/link";
import LandingPageHomeOurTechnologies from "../home/LandingPageHomeOurTechnologies";
import ProductCard from "../ourPortfolio/ProductCard";

/*============================================       
            array
============================================= */
const whatNewArray = [
  {
    imgPath: "./imgs/desktop/home-new/what-new-img-1.svg",
    name: "Working with 2 NFT Startups!",
  },
  {
    imgPath: "./imgs/desktop/home-new/what-new-img-2.svg",
    name: "Working with 1 Ed-tech startup",
  },
  {
    imgPath: "./imgs/desktop/home-new/what-new-img-3.svg",
    name: "Working with  3 Health-tech startups.",
  },
  {
    imgPath: "./imgs/desktop/home-new/what-new-img-4.svg",
    // imgClass: "home-new-what-new-img-4",
    name: "Working with Honda North America (workshop job automation).",
  },
];

/*============================================       
            array
============================================= */
const servicesArray = [
  {
    id: 1,
    imgPath: "./imgs/desktop/home-new/home-services-icon-1.svg",

    imgClass: "home-services-icon-1",
    text: "Smart Contract and ICO Development",
  },
  {
    id: 2,
    imgPath: "./imgs/desktop/home-new/home-services-icon-2.svg",
    imgClass: "home-services-icon-2",
    text: "Crypto Exchange Development",
  },
  {
    id: 3,
    imgPath: "./imgs/desktop/home-new/home-services-icon-3.svg",
    imgClass: "home-services-icon-3",
    text: "Crypto Tracking and Trading Bots Development",
  },
  {
    id: 4,
    imgPath: "./imgs/desktop/home-new/home-services-icon-4.svg",
    imgClass: "home-services-icon-4",
    text: "Customized Blockchain Solutions",
  },
  {
    id: 5,
    imgPath: "./imgs/desktop/home-new/home-services-icon-5.svg",
    imgClass: "home-services-icon-5",
    text: "NFT Marketplace Development",
  },
];

/*============================================       
            array
============================================= */
const testArray = [
  {
    imgPath: "./imgs/desktop/home/testomonial/clutch.svg",
    imgClass: "clutch-img",
  },
  {
    imgPath: "./imgs/desktop/home/testomonial/winter.svg",
    imgClass: "winter-img",
  },
  {
    imgPath: "./imgs/desktop/home/testomonial/trustpilot.svg",
    imgClass: "trustpilot-img",
  },
  {
    imgPath: "./imgs/desktop/home/testomonial/capterra.svg",
    imgClass: "capterra-img",
  },
  {
    imgPath: "./imgs/desktop/home/testomonial/gartner.svg",
    imgClass: "gartner-img",
  },
];

export default function LandingPageHomeNewFoldTwo() {
  /*============================================       
            renderServicesWeProvide
============================================= */
  const renderServicesWeProvide = () => {
    return (
      <div className="home-new-services-section">
        {/* font-96-proxima-800  */}
        <div className="home-new-services-title">
          <h2 className="font-120-montserrat-700 mobile-font-44-montserrat-700">
            consultancy <br />
          </h2>
          <span className="font-48-montserrat-700 home-new-services-subtitle mobile-font-32-montserrat-800">
            our services
          </span>
        </div>
        {/*=================================              
                 card 1 & card 2
        =================================*/}

        <div className="d-flex flex-wrap justify-content-center home-new-services-card-section">
          {servicesArray.map((data, index) => (
            <Fragment key={index}>
              <div
                className={`col-4 text-center home-services-outer-card  ${
                  index === 2
                    ? "home-services-outer-card__2"
                    : index === 3
                    ? "home-services-outer-card__3"
                    : index === 4
                    ? "home-services-outer-card__4"
                    : ""
                }`}
              >
                <img
                  src={data.imgPath}
                  alt="home services"
                  className={data.imgClass}
                />
                <p className="font-28-montserrat-600 mobile-font-18-montserrat-600">
                  {data.text}
                </p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    );
  };

  const renderOurProducts = () => {
    return (
      <>
        {/*=====================================================================
                                    Our Products
      =======================================================================*/}
        <div className="d-flex flex-nowrap  home-new-our-product-text-section justify-content-between align-items-end">
          <h3 className="font-65-proxima-800 mobile-font-40-proxima-800">
            our <br />
            <span className="green-purple-gradient-text"> products</span>{" "}
          </h3>
          <p className="font-24-NunitoSans-600 d-none d-md-block color-white-66 ">
            We build products across industries and have a deep expertise in
            using the
            <br /> latest / cutting edge tech to enhance user experience. Here
            are three <br /> products that we’ve launched recently in North-Am.
          </p>
          <p className="d-block d-md-none mobile-ag-font-16-Nunito-600 mv-pt-32 color-white-66 mv-pr-12">
            We build products across industries and have a deep expertise in
            using the latest / cutting edge tech to enhance user experience.
            Here are three products that we’ve launched recently in North-Am.
          </p>
        </div>
        <div className="d-flex home-new-our-product-cards-section flex-nowrap">
          <div className="col-md-4 col-12 p-0">
            <div className="home-new-dominate-card mobile-new-dominate-card">
              <ProductCard
                imgPath="/imgs/desktop/home-new/dominate.png"
                imgClass="home-new-dominate-img"
                title="dominate"
                para="An AI-powered tool that makes high-ticket B2b sales a breeze. Built specifically around the needs of the most demanding tech agencies - if you run a tech agency businiess, this product will transform and significantly enhance the way you operate."
                webLink="https://www.dominate.ai/"
                extraClass="home-new-our-product-card"
                btnText="Visit Website"
              />
            </div>
          </div>
          <div className="col-md-4 col-12 p-0">
            <div className="home-new-remote-teams-card mobile-new-remote-teams-card">
              <ProductCard
                imgPath="/imgs/desktop/home-new/remote-teams.png"
                imgClass="home-new-remote-teams-img"
                title="Remote teams"
                para="Managing productivity of remote-working teams is a new-age / post-pandemic challenge and we’ve solved that effectively using tons of automation, chat bots and templated workflows. If your team builds software, you will love this."
                webLink="https://www.remote-teams.io/"
                extraClass="home-new-our-product-card"
                btnText="Visit Website"
              />
            </div>
          </div>
          <div className="col-md-4 col-12 p-0">
            <div className="home-new-airi-card mobile-new-airi-card">
              <ProductCard
                imgPath="/imgs/desktop/home-new/airi.png"
                imgClass="home-new-airi-img"
                title="Airi"
                para="Mental Wellbeing cannot be taken lightly, especially for us working in tech. Airi is an A.I assistant with advanced NLP and sentiment analysis capabilities and she helps you uncover deep-routed triggers and helps you to avoid them."
                webLink="http://airi.life/"
                extraClass="home-new-our-product-card"
                btnText="Visit Website"
              />
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div>
      {renderServicesWeProvide()}
      <LandingPageHomeOurTechnologies />
      {renderOurProducts()}
      <div className="home-new-about-methodologies-section">
        {/*=========================================================
                                   About us
            ======================================================== */}
        <div>
          <div className="home-new-about-section">
            <h2 className="font-72-proxima-800 home-new-abou-methodologies-text-1 mobile-font-40-proxima-800">
              <span>Who we are</span>
            </h2>
            {/*  */}
            <p className="font-36-NunitoSans-400 mobile-font-16-Nunito-600 pt-40 mv-pt-10">
              We’re just a small group of highly accomplished -{" "}
            </p>
            <ul className="home-new-abou-methodologies-list pt-50">
              <li className="font-36-proxima-700">
                <img
                  src={"/imgs/desktop/icons/gradient-square-icon.svg"}
                  alt="gradient"
                  className="home-new-about-gradient"
                />
                Senior Technical Experts
              </li>
              <li className="font-36-proxima-700 pt-40">
                <img
                  src={"/imgs/desktop/icons/gradient-square-icon.svg"}
                  alt="gradient"
                  className="home-new-about-gradient"
                />
                Independent product managers
              </li>
              <li className="font-36-proxima-700 pt-40">
                <img
                  src={"/imgs/desktop/icons/gradient-square-icon.svg"}
                  alt="gradient"
                  className="home-new-about-gradient"
                />
                UX Designers
              </li>
            </ul>
            <p className="font-36-NunitoSans-300 mobile-font-18-Nunito-300  mv-pr-12 pt-40 mv-pt-32">
              that love working with cutting-edge technologies and building
              products that scale to the moon.
            </p>
          </div>
        </div>
        <div>
          {/*=========================================================
                                   Our Methodologies
            ======================================================== */}
          <div className="home-new-methodologies-section">
            <h2 className="font-48-proxima-800 green-purple-gradient-text mobile-font-32-proxima-800">
              Our {/* Web3{" "} */}
              Methodologies
              {/* Bootcamps */}
            </h2>
            <p className="font-36-NunitoSans-400  pt-60 home-new-methodologies-section-para d-none d-md-block">
              We use
              <span className="font-36-NunitoSans-800 "> LEAN </span>
              methodologies to help our startup clients reach a deep
              product-market fit. At <br /> the same time we work with
              <span className="font-36-NunitoSans-700 "> AGILE, DevOps </span>
              and{" "}
              <span className="font-36-NunitoSans-700 ">
                Extreme Programming{" "}
              </span>
              methodologies to help our Enterprise clients.
            </p>
            <p className="d-block d-md-none mobile-font-22-Nunito-400  mv-pt-32 home-new-methodologies-section-para">
              We use
              <span className="font-36-NunitoSans-800 mobile-font-24-Nunito-700">
                {" "}
                LEAN{" "}
              </span>
              methodologies to help our startup clients reach a deep
              product-market fit. At the same time we work with
              <span className="font-36-NunitoSans-700 mobile-font-24-Nunito-700">
                {" "}
                AGILE, DevOps{" "}
              </span>
              and{" "}
              <span className="font-36-NunitoSans-700 mobile-font-24-Nunito-700">
                Extreme Programming{" "}
              </span>
              methodologies to help our Enterprise clients.
            </p>
          </div>
        </div>
      </div>

      {/*=========================================================
                            What’s new?
        ======================================================== */}
      <div className="home-new-what-new-section">
        <div>
          <h2 className="font-48-proxima-800 mobile-font-28-proxima-800 home-new-what-new-title">
            What we are working on
          </h2>
          <p className="font-36-NunitoSans-400 color-white-66 pt-10 mobile-font-18-Nunito-400 mv-pt-10">
            We update this section every month
          </p>
          <ul className="home-new-what-new-list-section pt-40">
            {whatNewArray.map((data, index) => (
              // font-24-proxima-600
              <li
                key={index}
                className="font-24-proxima-600 mobile-font-16-Nunito-600 pt-40 mv-pt-32"
              >
                <img
                  src={data.imgPath}
                  alt={data.name}
                  className="home-new-what-new-img"
                />{" "}
                <span>{data.name} </span>{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* ================================================================
                              card
      =================================================================== */}
      <div className="d-flex home-new-purple-card justify-content-between align-items-center">
        <h2 className="font-96-montserrat-700  d-none d-md-block">
          Let’s work <br />
          together
        </h2>
        <h2 className=" mobile-font-24-montserrat-700 d-block d-md-none">
          Let’s work together
        </h2>
        <Link href="/contact-us">
          <a>
            <div className="font-64-montserrat-700 home-new-purple-card__btn">
              <span>Contact us now</span>
            </div>
          </a>
        </Link>
      </div>
      <div className="d-flex align-items-center justify-content-between home-new-testomonial-section flex-nowrap">
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

      {/* <div className="home-new-what-new-main-img">
          <img
            src="/imgs/desktop/home-new/what-new-main-img.png"
            alt="home what's new"
          />
        </div> */}
    </div>
  );
}
