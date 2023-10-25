import React from "react";

export default function RemoteTeamsLandingPageFoldOne() {
  return (
    <>
      <div className="d-none d-md-block">
        <div className="d-flex flex-nowrap justify-content-between remote-teams-fold-one-div">
          <div>
            <img
              src="./imgs/desktop/case-studies-new/remote-teams/logo.png"
              alt="remote teams"
              className="remote-teams-logo"
            />
            <h2 className="font-72-NunitoSans-900 pt-35">Remote Teams</h2>
            <h3 className="font-48-NunitoSans-600 pt-30">
              <span className="font-48-NunitoSans-800 color-white-21">01</span>{" "}
              Introduction
            </h3>
            <p className="font-24-NunitoSans-400 pt-50 remote-teams-para">
              Throtl or Remote Teams is an AI-enabled Project Management
              software for teams to collaborate better. Deep insights on
              productivity are generated and suggestions to boost team
              performance is provided by the AI-engine based on On-schedule
              matrix, hourly efficiency, organization wide learning and platform
              wide learning and other signals.
              <br />
            </p>
            <div className="our-product-card-btn our-product-card-btn--case-studies">
              <a
                href="https://www.remote-teams.io/"
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
              src="./imgs/desktop/case-studies-new/remote-teams/remote-team-img.png"
              alt="remote teams main"
              className="remote-teams-img"
            />
          </div>
        </div>
      </div>{" "}
      <div className="d-block d-md-none">
        <div className="remote-teams-fold-one-div">
          <img
            src="./imgs/desktop/case-studies-new/remote-teams/logo.png"
            alt="remote teams"
            className="remote-teams-logo"
          />
          <h2 className="font-72-NunitoSans-900 pt-35 mv-pt-10">
            Remote Teams
          </h2>
          <div className="mobile-text-center mv-pt-20">
            <img
              src="./imgs/desktop/home-new/remote-teams.png"
              alt="remote teams main"
              className="remote-teams-img"
            />
          </div>
          <h3 className="font-48-NunitoSans-600 pt-30 mv-pt-20">
            <span className="font-48-NunitoSans-800 color-white-21 ">01</span>{" "}
            Introduction
          </h3>
          <p className="font-24-NunitoSans-400 pt-50 remote-teams-para mv-pt-10">
            Throtl or Remote Teams is an AI-enabled Project Management software
            for teams to collaborate better. Deep insights on productivity are
            generated and suggestions to boost team performance is provided by
            the AI-engine based on On-schedule matrix, hourly efficiency,
            organization wide learning and platform wide learning and other
            signals.
          </p>
          <div className="our-product-card-btn our-product-card-btn--case-studies">
            <a
              href="https://www.remote-teams.io/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <h5 className="color-white-66 product-card-font-24-NunitoSans-600">
                Visit Website
              </h5>
            </a>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
