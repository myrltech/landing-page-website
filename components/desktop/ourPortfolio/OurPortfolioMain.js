import React from "react";
import ProductCard from "./ProductCard";

export default function OurPortfolioMain() {
  /*==============================================================
                        renderOurProduct
  ==============================================================*/
  const renderOurProduct = () => {
    return (
      <div className="our-protfolio-products-section">
        <h3 className="font-72-proxima-800">
          our<span className="green-purple-gradient-text"> products</span>{" "}
        </h3>
        <div className="d-none d-md-block">
          <p className="color-white-66 font-24-NunitoSans-600 pt-20 mv-pt-20">
            {/* We build products across industries and have a deep expertise in
            using the latest / cutting edge tech to <br />
            enhance user experience. Here are three products that we’ve launched
            recently in North-Am.{" "} */}
            Apart from building tech products for our clients, we also build,
            own
            <br />
            and operate our own SAAS products. Below are three such products
            that
            <br />
            we&apos;ve launched in North America
          </p>
        </div>
        <div className="d-block d-md-none">
          <p className="color-white-66 font-24-NunitoSans-600 pt-20 mv-pt-20 our-protfolio-products-para">
            {/* We build products across industries and have <br /> a deep expertise
            in using the latest / cutting edge <br /> tech to enhance user
            experience. Here are three products <br />
            that we’ve launched recently in North-Am. */}
            Apart from building tech products for our clients, we also <br />
            build, own and operate our own SAAS products. Below are <br />
            three such products that we&apos;ve launched in North America <br />{" "}
            <br />
          </p>
        </div>
        <div className="d-flex align-items-stretch flex-nowrap">
          <div className="col-4 p-0 ">
            <div className="our-products-dominate-card">
              <ProductCard
                imgPath="/imgs/desktop/our-portfolio/dominate.png"
                imgClass="our-portfolio-dominate-img"
                title="dominate"
                link={"/dominate"}
                // para="An AI-powered sales team management SAAS solution that predicts revenue, lead conversion probability, sales team effectiveness by taking into account hundreds of signals ranging from conversations to market conditions, to help organizations focus their effort better."
                para="An AI-powered tool that makes high-ticket B2b sales a breeze. Built specifically around the needs of the most demanding tech agencies - if you run a tech agency businiess, this product will transform and significantly enhance the way you operate."
              />
            </div>{" "}
          </div>
          <div className="col-4 p-0">
            <div className="our-products-remote-team-card">
              <ProductCard
                imgPath="/imgs/desktop/our-portfolio/remote-teams.png"
                imgClass="our-portfolio-remote-team-img"
                title="Remote teams"
                link={"/remote-teams"}
                // para="Officially called remote-teams, Throtl is a highly effective AI-enabled project and teams management software to reduce communication overheads and avoid management oversights."
                para="Managing productivity of remote-working teams is a new-age / post-pandemic challenge and we’ve solved that effectively using tons of automation, chat bots and templated workflows. If your team builds software, you will love this."
              />
            </div>{" "}
          </div>
          <div className="col-4 p-0">
            <div className="our-products-airi-section">
              <ProductCard
                imgPath="/imgs/desktop/our-portfolio/airi.png"
                imgClass="our-portfolio-airi-img"
                title="airi"
                link={"/airi"}
                para="Mental Wellbeing cannot be taken lightly, especially for us working in tech. Airi is an A.I assistant with advanced NLP and sentiment analysis capabilities and she helps you uncover deep-routed triggers and helps you to avoid them."
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  /*==============================================================
                        renderClientProject
  ==============================================================*/
  const renderClientProject = () => {
    return (
      <div className="our-protfolio-projects-section">
        <h3 className="font-72-proxima-800">
          <span className="green-purple-gradient-text">clients </span>Projects{" "}
        </h3>
        <div className="d-none d-md-block">
          <p className="color-white-66 font-24-NunitoSans-600 pt-20 mv-pt-20">
            We work with the top enterprise firms in the world to help them
            build
            <br /> cutting edge tech products. Here are some examples -{" "}
          </p>
        </div>
        <div className="d-block d-md-none">
          <p className="color-white-66 font-24-NunitoSans-600 pt-20 mv-pt-20">
            We work with the top enterprise firms in the world to help them
            build cutting edge tech products. Here are some examples -{" "}
          </p>
        </div>
        <div className="d-flex our-protfolio-projects-card-section flex-nowrap">
          {/**=================================================================
           *                         aquaplan
           =================================================================*/}
          <div className="col-6 p-0">
            <div className="our-portfolio-aquaplan-card">
              <ProductCard
                imgPath="/imgs/desktop/our-portfolio/aquaplan.png"
                imgClass="our-portfolio-aquaplan-img"
                title="aquaplan"
                link={"/aquaplan"}
                para="An innovative Product management tool with all the modern tooling - roadmaps, feature planning, stories."
              />
            </div>
          </div>
          <div className="col-6 p-0">
            {/**===============================================================
           *                         recruitx
           =================================================================*/}
            <div className="our-portfolio-recruitx-card">
              <ProductCard
                imgPath="/imgs/desktop/our-portfolio/recruitx.png"
                imgClass="our-portfolio-recruitx-img"
                title="recruitx"
                link={"/recruitx"}
                para="The technology to automate your entire recruitment process from beginning to the end while integrating with top tools."
              />
            </div>
          </div>
        </div>
        <div className="d-flex our-protfolio-projects-cards-row-two flex-nowrap">
          <div className="col-6 p-0">
            {/**===============================================================
           *                         deep sleep
           =================================================================*/}
            <div className="our-portfolio-deep-sleep-card">
              <ProductCard
                imgPath="/imgs/desktop/our-portfolio/deep-sleep.png"
                imgClass="our-portfolio-deep-sleep-img"
                title="deep-sleep"
                link={"/deep-sleep"}
                para="App that helps you sleep better. Sleep tech is the next big domain and we’re knee-deep in it."
              />
            </div>
          </div>
          <div className="col-6 p-0">
            {/**===============================================================
           *                         deep sleep
           =================================================================*/}
            <div className="our-portfolio-fintify-card">
              <ProductCard
                imgPath="/imgs/desktop/our-portfolio/fintify.png"
                imgClass="our-portfolio-fintify-img"
                title="fintify"
                link={"/fintify"}
                para="Any portfolio is incomplete without a stellar fin-tech app. Fintify is an intelligent money management tool giving you real-time intel."
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="our-portfolio-main-section">
        <div className="text-center our-portfolio-text-section">
          <h2 className="font-86-proxima-800">Our portfolio</h2>
          <p className="font-36-NunitoSans-700 mobile-font-14-Nunito-700 pt-30 mv-pt-40 d-none d-md-block">
            {/* We specialize in building SAAS products.{" "} */}
            We specialize in building WEB 3.0 &amp; SAAS products
          </p>
          <p className="font-36-NunitoSans-700 mobile-font-14-Nunito-700 pt-30 mv-pt-40 d-block d-md-none">
            {/* We specialize in building SAAS products.{" "} */}
            We specialize in building WEB 3.0 &amp; <br />
            SAAS products
          </p>
          <div className="d-none d-md-block">
            <p className="pt-20 font-24-NunitoSans-600">
              {/* We’ve built, (and now) own and operate our own tech products and
              at the
              <br />
              same time, build for enterprise clients. */}
              {/* We’ve built, (and now) own and operate multiple tech products.{" "} */}
              We build WEB 3.0 products for startups
              <br />
              At the same time, we also build SAAS products for top enterprise
              clients.
            </p>
          </div>
          <div className="d-block d-md-none">
            <p className="pt-10 font-24-NunitoSans-600 mv-pt-20">
              {/* We’ve built, (and now) own and operate <br />
              multiple tech products.  */}
              We build WEB 3.0 products for startups <br />
              At the same time, we also build SAAS <br /> products for top
              enterprise clients.
            </p>
          </div>
        </div>
        {renderOurProduct()}
        {renderClientProject()}
      </div>
    </>
  );
}
