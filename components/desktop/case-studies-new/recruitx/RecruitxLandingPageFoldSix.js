import React from "react";

import { Fragment } from "react";

const techArray = [
  {
    imgPath: "./imgs/desktop/case-studies-new/tech-logo/next-js.png",
    imgClass: "recruitx-nextjs-logo",
    imgName: "nextjs",
  },
  {
    imgPath: "./imgs/desktop/case-studies-new/tech-logo/nodejs.png",
    imgClass: "recruitx-nodejs-logo",
    imgName: "nodejs",
  },
  {
    imgPath: "./imgs/desktop/case-studies-new/tech-logo/graphql.png",
    imgClass: "recruitx-graphql-logo",
    imgName: "apollo",
  },
  {
    imgPath: "./imgs/desktop/case-studies-new/tech-logo/mongodb.png",
    imgClass: "recruitx-mongodb-logo",
    imgName: "mongodb",
  },
  {
    imgPath: "./imgs/desktop/case-studies-new/tech-logo/apache.png",
    imgClass: "recruitx-apache-logo",
    imgName: "apache",
  },
  {
    imgPath: "./imgs/desktop/case-studies-new/tech-logo/apache-kafka.png",
    imgClass: "recruitx-apache-kafka-logo",
    imgName: "apache kafka",
  },
];
export default function RecruitxLandingPageFoldSix() {
  return (
    <div className="recruitx-tech-div">
      <h3 className="font-48-NunitoSans-600 remote-teams-fold-two-subtitle remote-teams-fold-two-subtitle--recruitx-tech">
        <span className="font-48-NunitoSans-800 color-white-21">07</span>
        Technologies Used
      </h3>
      <div className="d-flex flex-wrap align-items-center recruitx-tech-inner-div">
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
