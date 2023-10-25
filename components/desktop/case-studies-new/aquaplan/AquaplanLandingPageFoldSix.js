import React from "react";

import { Fragment } from "react";

const techArray = [
  {
    imgPath: "./imgs/desktop/case-studies-new/tech-logo/next-js.png",
    imgClass: "aquaplan-nextjs-logo",
    imgName: "nextjs",
  },
  {
    imgPath: "./imgs/desktop/case-studies-new/tech-logo/kubernets.png",
    imgClass: "aquaplan-kubernets-logo",
    imgName: "kubernetes",
  },
  {
    imgPath: "./imgs/desktop/case-studies-new/tech-logo/graphql.png",
    imgClass: "aquaplan-graphql-logo",
    imgName: "apollo",
  },
  {
    imgPath: "./imgs/desktop/case-studies-new/tech-logo/tensorflow.png",
    imgClass: "aquaplan-tensorflow-logo",
    imgName: "tensorflow",
  },
  {
    imgPath: "./imgs/desktop/case-studies-new/tech-logo/aws-congnito.png",
    imgClass: "aquaplan-aws-congnito-logo",
    imgName: "aws congnito",
  },
  {
    imgPath: "./imgs/desktop/case-studies-new/tech-logo/aws-lambda.png",
    imgClass: "aquaplan-aws-lambda-logo",
    imgName: "aws lambda",
  },
  {
    imgPath: "./imgs/desktop/case-studies-new/tech-logo/aws-api-gateway.png",
    imgClass: "aquaplan-aws-api-gateway-logo",
    imgName: "aws api gateway",
  },
];
export default function AquaplanLandingPageFoldSix() {
  return (
    <div className="aquaplan-tech-div">
      <h3 className="font-48-NunitoSans-600 remote-teams-fold-two-subtitle remote-teams-fold-two-subtitle--aquaplan-tech">
        <span className="font-48-NunitoSans-800 color-white-21">07</span>
        Technologies Used
      </h3>
      <div className="d-flex flex-wrap align-items-center aquaplan-tech-inner-div">
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
