import React from "react";
import PageTitle from "../../common/PageTitle";

export default function DominateLandingPageFoldOne() {
  return (
    <>
      <div className="d-none d-md-block">
        <div className="d-flex flex-nowrap justify-content-between align-items-center dominate-fold-one-div">
          <div>
            <img
              src="/imgs/desktop/case-studies-new/dominate/dominate-logo.png"
              alt="dominate"
              className="dominate-logo"
            />
            <PageTitle title="dominate" extraClass="pt-50" />
            {/* <h2 className="font-72-NunitoSans-900 pt-50">Dominate</h2> */}
            <h3 className="font-48-NunitoSans-600 pt-50">
              <span className="font-48-NunitoSans-800 color-white-21">01</span>{" "}
              Introduction
            </h3>
            <p className="font-24-NunitoSans-400 pt-60 remote-teams-para">
              An AI-enabled sales management tool that helps your team
              collaborate better on Account Based Selling.
              <br />
              <br />
              Manage quotas more effectlvely and intelligently with real-time
              nudges and intel. Machine Learning takes centre stage to score the
              quality of leads, predict account wise revenue and forecast deal
              values as well as sales team effectiveness.
              <br />
              <br /> Integrate with over 3000+ tools across the globe to create
              better sales-workflows.{" "}
            </p>
            <div className="our-product-card-btn our-product-card-btn--case-studies">
              <a
                href="https://www.dominate.ai/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <h5 className="color-white-66 product-card-font-24-NunitoSans-600">
                  Visit Website
                </h5>
              </a>
            </div>
          </div>
          <div>
            <img
              src="/imgs/desktop/case-studies-new/dominate/dominate-main-img.png"
              alt="dominate main"
              className="dominate-main-img"
            />
          </div>
        </div>
      </div>
      <div className="d-block d-md-none">
        <div className="dominate-fold-one-div">
          <img
            src="/imgs/desktop/case-studies-new/dominate/dominate-logo.png"
            alt="dominate"
            className="dominate-logo"
          />
          <PageTitle title="dominate" extraClass="pt-50" />
          {/* <h2 className="font-72-NunitoSans-900 pt-50">Dominate</h2> */}
          <div className="mv-pt-20 mobile-text-center">
            <img
              src="/imgs/desktop/case-studies-new/dominate/dominate-main-img.png"
              alt="dominate main"
              className="dominate-main-img"
            />
          </div>{" "}
          <h3 className="font-48-NunitoSans-600 mv-pt-20">
            <span className="font-48-NunitoSans-800 color-white-21">01</span>{" "}
            Introduction
          </h3>
          <p className="font-24-NunitoSans-400 pt-60 remote-teams-para mv-pt-10">
            An AI-enabled sales management tool that helps your team collaborate
            better on Account Based Selling.
            <br />
            <br />
            Manage quotas more effectlvely and intelligently with real-time
            nudges and intel. Machine Learning takes centre stage to score the
            quality of leads, predict account wise revenue and forecast deal
            values as well as sales team effectiveness.
            <br />
            <br /> Integrate with over 3000+ tools across the globe to create
            better sales-workflows.{" "}
          </p>
          <div className="our-product-card-btn our-product-card-btn--case-studies">
            <a
              href="https://www.dominate.ai/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <h5 className="color-white-66 product-card-font-24-NunitoSans-600">
                Visit Website
              </h5>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
