import React from "react";

import { Fragment } from "react";

const techArray = [
  {
    imgPath: "./imgs/desktop/case-studies-new/tech-logo/firebase.png",
    imgClass: "deep-sleep-firebase-logo",
    imgName: "firebase",
  },
  {
    imgPath: "./imgs/desktop/case-studies-new/tech-logo/go.png",
    imgClass: "deep-sleep-go-logo",
    imgName: "go",
  },
  {
    imgPath: "./imgs/desktop/case-studies-new/tech-logo/flutter.png",
    imgClass: "deep-sleep-flutter-logo",
    imgName: "flutter",
  },
  {
    imgPath: "./imgs/desktop/case-studies-new/tech-logo/app-engine.png",
    imgClass: "deep-sleep-app-engine-logo",
    imgName: "app-engine",
  },
];

export default function DeepSleepLandingPageFoldSix() {
  return (
    <div className="deep-sleep-tech-div">
      <h3 className="font-48-NunitoSans-600 remote-teams-fold-two-subtitle remote-teams-fold-two-subtitle--deep-sleep-tech">
        <span className="font-48-NunitoSans-800 color-white-21">07</span>
        Technologies Used
      </h3>
      <div className="d-flex flex-wrap align-items-center deep-sleep-tech-inner-div">
        {techArray.map((data, index) => (
          <Fragment key={index}>
            <img
              src={data.imgPath}
              alt={data.imgName}
              className={data.imgClass}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
