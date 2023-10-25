import React from "react";
import PageTitle from "../../common/PageTitle";

export default function RecruitxLandingPageFoldOne() {
  return (
    <>
      <div className="d-none d-md-block">
        <div className="d-flex flex-nowrap justify-content-between align-items-center recruitx-fold-one-div">
          <div>
            {/* <img
          src="/imgs/desktop/case-studies-new/recruitx/recruitx-logo.png"
          alt="recruitx"
          className="recruitx-logo"
        /> */}
            <PageTitle title="Recruitx" />
            {/* <h2 className="font-72-NunitoSans-900">Recruitx</h2> */}
            <h3 className="font-48-NunitoSans-600 pt-35">
              <span className="font-48-NunitoSans-800 color-white-21">01</span>{" "}
              Introduction
            </h3>
            <p className="font-24-NunitoSans-400 pt-40 remote-teams-para">
              Following up with candidates and no-show is a $10 Billion problem.
              <br />
              <br />
              RexcruitX aims to completely automate the manual tasks that a
              recruiter has to go through to help them focus on more quality
              tasks - such as finding cultural fit.
              <br />
              <br /> Reachouts, calendar meets, identifying available
              interviewers, interview calls, coding rounds, shortlisting is all
              100% automated.{" "}
            </p>
          </div>
          <div>
            <img
              src="./imgs/desktop/case-studies-new/recruitx/recruitx-main-img.png"
              alt="recruitx main"
              className="recruitx-main-img"
            />
          </div>
        </div>
      </div>{" "}
      <div className="d-block d-md-none recruitx-fold-one-div">
        <PageTitle title="Recruitx" />
        {/* <h2 className="font-72-NunitoSans-900">Recruitx</h2> */}
        <div className="mobile-text-center mv-pt-20">
          <img
            src="./imgs/desktop/case-studies-new/recruitx/recruitx-main-img.png"
            alt="recruitx main"
            className="recruitx-main-img"
          />
        </div>
        <h3 className="font-48-NunitoSans-600 pt-35 mv-pt-20">
          <span className="font-48-NunitoSans-800 color-white-21">01</span>{" "}
          Introduction
        </h3>
        <p className="font-24-NunitoSans-400 pt-40 remote-teams-para mv-pt-10">
          Following up with candidates and no-show is a $10 Billion problem.
          <br />
          <br />
          RexcruitX aims to completely automate the manual tasks that a
          recruiter has to go through to help them focus on more quality tasks -
          such as finding cultural fit.
          <br />
          <br /> Reachouts, calendar meets, identifying available interviewers,
          interview calls, coding rounds, shortlisting is all 100% automated.{" "}
        </p>
      </div>
    </>
  );
}
