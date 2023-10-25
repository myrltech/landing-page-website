import React from "react";
import PageTitle from "../../common/PageTitle";

export default function AquaplanLandingPageFoldOne() {
  return (
    <>
      <div className="d-none d-md-block">
        <div className="d-flex flex-nowrap justify-content-between align-items-center aquaplan-fold-one-div">
          <div>
            <img
              src="/imgs/desktop/case-studies-new/aquaplan/aquaplan-logo.png"
              alt="aquaplan"
              className="aquaplan-logo"
            />
            <PageTitle title="Aquaplan" extraClass="pt-50" />
            {/* <h2 className="font-72-NunitoSans-900 pt-50">Aquaplan</h2> */}
            <h3 className="font-48-NunitoSans-600 pt-40">
              <span className="font-48-NunitoSans-800 color-white-21">01</span>{" "}
              Introduction
            </h3>
            <p className="font-24-NunitoSans-400 pt-60 remote-teams-para">
              A product management tool that enables PMs to manage their
              workflow better by staying on top of each release, feature, bug,
              story and get real time feedback from github and CI/CD pipelines
              as to the failing releases. <br />
              <br />
              Combined with inflowing data from Prometheus and Sentry to
              identify issues faced by users and detailed logs generated for the
              issues.
              <br />
              <br />
              Aquaplan goes one level deep - there are plenty of standard
              features like roadmpas, kanbans, stories but also unconventional
              features like App store, play store, firebase and google analytics
              integrations to put the PM at the centre of product development.{" "}
            </p>
          </div>
          <div>
            <img
              src="/imgs/desktop/case-studies-new/aquaplan/aquaplan-main-img.png"
              alt="aquaplan main"
              className="aquaplan-main-img"
            />
          </div>
        </div>
      </div>
      <div className="d-block d-md-none aquaplan-fold-one-div">
        <img
          src="/imgs/desktop/case-studies-new/aquaplan/aquaplan-logo.png"
          alt="aquaplan"
          className="aquaplan-logo"
        />
        <PageTitle title="Aquaplan" extraClass="pt-50" />
        <div className="mobile-text-center mv-pt-20">
          <img
            src="/imgs/desktop/case-studies-new/aquaplan/aquaplan-main-img.png"
            alt="aquaplan main"
            className="aquaplan-main-img"
          />
        </div>
        <h3 className="font-48-NunitoSans-600 pt-40 mv-pt-20">
          <span className="font-48-NunitoSans-800 color-white-21">01</span>{" "}
          Introduction
        </h3>
        <p className="font-24-NunitoSans-400 pt-60 remote-teams-para mv-pt-10">
          A product management tool that enables PMs to manage their workflow
          better by staying on top of each release, feature, bug, story and get
          real time feedback from github and CI/CD pipelines as to the failing
          releases. <br />
          <br />
          Combined with inflowing data from Prometheus and Sentry to identify
          issues faced by users and detailed logs generated for the issues.
          <br />
          <br />
          Aquaplan goes one level deep - there are plenty of standard features
          like roadmpas, kanbans, stories but also unconventional features like
          App store, play store, firebase and google analytics integrations to
          put the PM at the centre of product development.{" "}
        </p>
      </div>
    </>
  );
}
