import React from "react";
import PageTitle from "../../common/PageTitle";

export default function FintifyLandingPageFoldOne() {
  return (
    <>
      <div className="d-none d-md-block">
        <div className="d-flex flex-nowrap justify-content-between align-items-center fintify-fold-one-div">
          <div>
            <img
              src="./imgs/desktop/case-studies-new/fintify/fintify-logo.png"
              alt="deep sleep"
              className="fintify-logo"
            />
            <PageTitle title="fintify" extraClass="pt-50" />
            {/* <h2 className="font-72-NunitoSans-900 pt-50">Fintify</h2> */}
            <h3 className="font-48-NunitoSans-600 pt-40">
              <span className="font-48-NunitoSans-800 color-white-21">01</span>{" "}
              Introduction
            </h3>
            <p className="font-24-NunitoSans-400 pt-60 remote-teams-para">
              When the team at fintify approached us with their project, they
              already had a high performance mobile application but needed a
              complete revamp in terms of modernizing the entire UI / UX to
              increase engagements and ease the navigation and user flow on the
              app.
              <br />
              <br />
              Focus groups, questionnaires and detailed user interviews helped
              us to uncover insights on how they now transact and group their
              payments. Fintify uses a proprietary technology to group
              transactions using machine learning so that users are able to
              scrutinize their expenses.{" "}
            </p>
          </div>
          <div>
            <img
              src="./imgs/desktop/case-studies-new/fintify/fintify-main-img.png"
              alt="fintify main"
              className="fintify-main-img"
            />
          </div>
        </div>
      </div>
      <div className="d-block d-md-none fintify-fold-one-div">
        <img
          src="./imgs/desktop/case-studies-new/fintify/fintify-logo.png"
          alt="deep sleep"
          className="fintify-logo"
        />
        <PageTitle title="fintify" extraClass="pt-50 mv-pt-20" />
        <div className="mobile-text-center mv-pt-30">
          <img
            src="./imgs/desktop/case-studies-new/fintify/fintify-main-img.png"
            alt="fintify main"
            className="fintify-main-img"
          />
        </div>
        <h3 className="font-48-NunitoSans-600 pt-40 mv-pt-20">
          <span className="font-48-NunitoSans-800 color-white-21">01</span>{" "}
          Introduction
        </h3>
        <p className="font-24-NunitoSans-400 pt-60 remote-teams-para mv-pt-10">
          When the team at fintify approached us with their project, they
          already had a high performance mobile application but needed a
          complete revamp in terms of modernizing the entire UI / UX to increase
          engagements and ease the navigation and user flow on the app.
          <br />
          <br />
          Focus groups, questionnaires and detailed user interviews helped us to
          uncover insights on how they now transact and group their payments.
          Fintify uses a proprietary technology to group transactions using
          machine learning so that users are able to scrutinize their expenses.{" "}
        </p>
      </div>
    </>
  );
}
