import Link from "next/link";
import React, { Fragment } from "react";

export default function LandingPageAboutUsFoldOne() {
  /*==================================================
              clientAgenciesArray
==================================================*/
  const clientAgenciesArray = [
    {
      name: " For Clients",
      para: "You want to innovate but may not always have the right team. Augment your team with experts across the globe.",
      imgPath: "./imgs/mobile/icons/about-us-client-icon.svg",
      imgClass: "mobile-client-icons",
      // linkPath: "/augment-client-landing-page",
    },
    {
      name: " For Agencies",
      para: "If you’re a tech services provider, you can find clients that your resources can collaborate with.",
      imgPath: "./imgs/mobile/icons/about-us-agency-icon.svg",
      imgClass: "mobile-agency-icons",
      // linkPath: "/augment-agency-landing-page",
    },
  ];

  /*==================================================
              renderClientAgenciesCard
==================================================*/

  const renderClientAgenciesCard = () => {
    return (
      <>
        {/*==================================
         *            desktop view
      =================================*/}
        <div className="d-none d-md-block">
          <div className="d-flex flex-nowrap align-items-start pt-100 ">
            <div className="col-6 about-fold-one-para-left-div">
              <Link href="/augment-client-landing-page">
                <a>
                  <span className="font-36-NunitoSans-600">For Clients</span>
                </a>
              </Link>
              <p className="font-36-NunitoSans-600 about-fold-one-para color-white-66 pt-25">
                You want to innovate but may not always
                <br /> have the right team. Augment your team with
                <br /> experts across the globe.
              </p>
            </div>
            <div className="col-6 about-fold-one-para-right-div">
              {/* <Link href="/augment-agency-landing-page"> */}
              {/* <a> */}
              <span className="font-36-NunitoSans-600">For Agencies</span>
              {/* </a> */}
              {/* </Link> */}
              <p className="font-36-NunitoSans-600 color-white-66 about-fold-one-para pt-25 ">
                If you’re a tech services provider, you can <br />
                find clients that your resources can
                <br /> collaborate with.{" "}
              </p>
            </div>
          </div>
        </div>{" "}
        {/*==================================
         *            mobile view
      =================================*/}
        <div className=" d-block d-md-none mv-pt-74 ">
          {/*=====   mobile card =============*/}
          {clientAgenciesArray.map((data, index) => (
            <Fragment key={index}>
              <div className="mobile-about-client-agenciency-card mobile-text-center">
                <div className="mobile-about-client-agenciency-card__img-section">
                  <img
                    src={data.imgPath}
                    alt={data.name}
                    className={data.imgClass}
                  />
                </div>
                {/* <Link href={data.linkPath}> */}
                {/* <a> */}
                <span className="mobile-font-18-Nunito-600">{data.name}</span>
                {/* </a> */}
                {/* </Link> */}
                <p className="mobile-font-14-Nunito-600 mv-pt-20 color-white-66 mobile-text-left">
                  {data.para}
                </p>
              </div>
            </Fragment>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="about-us-agument-div">
      <h1 className="font-72-NunitoSans-600 purple-green-gradient-text margin-auto mobile-font-32-Nunito-700 mobile-text-center">
        Augment.
      </h1>
      <p className="text-center font-48-NunitoSans-600 pt-20 mobile-text-left mobile-font-16-Nunito-600 mv-pt-83 mv-pl-20">
        A platform to find the right tech services provider for{" "}
        <br className="mv-opacity-0" />
        your needs.
      </p>
      {renderClientAgenciesCard()}
      <div className="text-center pt-90 mv-pt-55">
        {/* <Link href="/augment"> */}
        {/* <a> */}
        <div className="agument-btn gradient-btn margin-auto cursor-pointer">
          Explore Augment
        </div>
        {/* </a> */}
        {/* </Link> */}
      </div>
      <div className="d-flex flex-nowrap align-items-center about-us-fold-one-logo-para-section">
        <div className="col-md-4 col-sm-12 about-us-fold-one-logo-para-left-section text-right mobile-text-center">
          <img
            src={"./imgs/desktop/logo/myrl-tech-white-logo.svg"}
            alt="myrl tech"
            className="about-us-myrl-white-logo"
          />
        </div>
        <h2 className=" d-block d-md-none mobile-about-myrl-text mobile-font-28-Nunito-700">
          About Myrl Tech
        </h2>
        <div className="col-md-8  col-sm-12 about-us-fold-one-logo-para-right-section">
          <p className="font-36-NunitoSans-600 mobile-font-18-Nunito-600">
            Myrl Tech is an engineering-first company,{" "}
            <br className="mv-opacity-0" />
            focusing on innovation with cutting-edge{" "}
            <br className="mv-opacity-0" />
            technology at its core.
          </p>
          <p className="font-36-NunitoSans-600 pt-35 color-white-66 mobile-font-18-Nunito-600 mv-pt-22">
            We’re building an eco-system (and not just a{" "}
            <br className="mv-opacity-0" />
            platform) around engineering service providers{" "}
            <br className="mv-opacity-0" />
            and companies with engineering requirements.
          </p>
        </div>
      </div>
    </div>
  );
}
