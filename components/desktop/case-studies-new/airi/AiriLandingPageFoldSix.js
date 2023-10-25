import React from "react";

import { Fragment } from "react";

const techArray = [
  {
    imgPath: "/imgs/desktop/case-studies-new/tech-logo/react-native.png",
    imgClass: "airi-react-native-logo",
    imgName: "react-native",
  },
  {
    imgPath: "/imgs/desktop/case-studies-new/tech-logo/sagemaker.png",
    imgClass: "airi-sagemaker-logo",
    imgName: "sagemaker",
  },
  {
    imgPath: "/imgs/desktop/case-studies-new/tech-logo/firebase.png",
    imgClass: "airi-firebase-logo",
    imgName: "firebase",
  },
  {
    imgPath: "/imgs/desktop/case-studies-new/tech-logo/go.png",
    imgClass: "airi-go-logo",
    imgName: "go",
  },
  {
    imgPath: "/imgs/desktop/case-studies-new/tech-logo/dialogflow.png",
    imgClass: "airi-dialogflow-logo",
    imgName: "dialogflow",
  },
];
export default function AiriLandingPageFoldSix() {
  return (
    <div className="airi-tech-div">
      <h3 className="font-48-NunitoSans-600 remote-teams-fold-two-subtitle remote-teams-fold-two-subtitle--airi-tech">
        <span className="font-48-NunitoSans-800 color-white-21">07</span>
        Technologies Used
      </h3>
      <div className="d-flex flex-wrap align-items-center airi-tech-inner-div">
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
