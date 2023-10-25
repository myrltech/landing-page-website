import React from "react";
import { Fragment } from "react";

const techArray = [
  {
    imgPath: "./imgs/desktop/case-studies-new/tech-logo/react.png",
    imgClass: "fintify-react-logo",
    imgName: "firebase",
  },
  {
    imgPath: "./imgs/desktop/case-studies-new/tech-logo/firebase.png",
    imgClass: "fintify-firebase-logo",
    imgName: "firebase",
  },
  {
    imgPath: "./imgs/desktop/case-studies-new/tech-logo/gcp.png",
    imgClass: "fintify-gcp-logo",
    imgName: "gcp",
  },
];
export default function FintifyLandingPageFoldSix() {
  return (
    <div className="fintify-tech-div">
      <h3 className="font-48-NunitoSans-600 remote-teams-fold-two-subtitle remote-teams-fold-two-subtitle--fintify-tech">
        <span className="font-48-NunitoSans-800 color-white-21">07</span>
        Technologies Used
      </h3>
      <div className="d-flex flex-wrap align-items-center fintify-tech-inner-div">
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
