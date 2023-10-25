import React from "react";
import PageTitle from "../../common/PageTitle";

export default function DeepSleepLandingPageFoldOne() {
  return (
    <>
      <div className="d-none d-md-block">
        <div className="d-flex flex-nowrap justify-content-between align-items-center deep-sleep-fold-one-div">
          <div>
            <img
              src="./imgs/desktop/case-studies-new/deep-sleep/deep-sleep-logo.png"
              alt="deep sleep"
              className="deep-sleep-logo"
            />
            <PageTitle title="Deep Sleep" extraClass="pt-40 deep-sleep-title" />
            {/* <h2 className="font-72-NunitoSans-900 pt-40">Deep Sleep</h2> */}
            <h3 className="font-48-NunitoSans-600 pt-40">
              <span className="font-48-NunitoSans-800 color-white-21">01</span>{" "}
              Introduction
            </h3>
            <p className="font-24-NunitoSans-400 pt-25 remote-teams-para">
              Netflix’s competitor isn’t other OTT platforms, it’s sleep. <br />
              <br />
              As humanity grows and prospers, sleep is going to suffer and poor
              sleep is at the centre of many health and mental issues, <br />
              <br />
              Deep Sleep tries to tackle this problem heads on by using cutting
              edge science - binaural beats, gamma and theta waves that help
              users relax and rejuvenate faster.{" "}
            </p>
          </div>
          <div>
            <img
              src="./imgs/desktop/case-studies-new/deep-sleep/deep-sleep-main-img.png"
              alt="deep sleep main"
              className="deep-sleep-main-img"
            />
          </div>
        </div>
      </div>{" "}
      <div className="d-block d-md-none deep-sleep-fold-one-div">
        <img
          src="./imgs/desktop/case-studies-new/deep-sleep/deep-sleep-logo.png"
          alt="deep sleep"
          className="deep-sleep-logo"
        />
        <PageTitle
          title="Deep Sleep"
          extraClass="pt-40 deep-sleep-title mv-pt-10"
        />
        <div className="mobile-text-center mv-pt-20">
          <img
            src="./imgs/desktop/case-studies-new/deep-sleep/deep-sleep-main-img.png"
            alt="deep sleep main"
            className="deep-sleep-main-img"
          />
        </div>
        <h3 className="font-48-NunitoSans-600 pt-40 mv-pt-20">
          <span className="font-48-NunitoSans-800 color-white-21">01</span>{" "}
          Introduction
        </h3>
        <p className="font-24-NunitoSans-400 pt-25 remote-teams-para mv-pt-10">
          Netflix’s competitor isn’t other OTT platforms, it’s sleep. <br />
          <br />
          As humanity grows and prospers, sleep is going to suffer and poor
          sleep is at the centre of many health and mental issues, <br />
          <br />
          Deep Sleep tries to tackle this problem heads on by using cutting edge
          science - binaural beats, gamma and theta waves that help users relax
          and rejuvenate faster.{" "}
        </p>
      </div>
    </>
  );
}
