import React from "react";
import { Fragment } from "react";

const techArray = [
  {
    imgPath: "./imgs/desktop/case-studies-new/tech-logo/next-js.png",
    imgClass: "dominate-nextjs-logo",
    imgName: "nextjs",
  },
  {
    imgPath: "./imgs/desktop/case-studies-new/tech-logo/kubernets.png",
    imgClass: "dominate-nodejs-logo",
    imgName: "kubernetes",
  },
  {
    imgPath: "./imgs/desktop/case-studies-new/tech-logo/apollo.png",
    imgClass: "dominate-apollo-logo",
    imgName: "apollo",
  },
  {
    imgPath: "./imgs/desktop/case-studies-new/tech-logo/docker.png",
    imgClass: "dominate-docker-logo",
    imgName: "docker",
  },
  {
    imgPath: "./imgs/desktop/case-studies-new/tech-logo/jenkins.png",
    imgClass: "dominate-jenkins-logo",
    imgName: "jenkins",
  },
  {
    imgPath: "./imgs/desktop/case-studies-new/tech-logo/graphql.png",
    imgClass: "dominate-graphql-logo",
    imgName: "graphql",
  },
  {
    imgPath: "./imgs/desktop/case-studies-new/tech-logo/prisma.png",
    imgClass: "dominate-prisma-logo",
    imgName: "prisma",
  },
  {
    imgPath: "./imgs/desktop/case-studies-new/tech-logo/aws.png",
    imgClass: "dominate-aws-logo",
    imgName: "aws",
  },
];

export default function DominateLanidingPageFoldSix() {
  return (
    <div className="dominate-tech-div">
      <h3 className="font-48-NunitoSans-600 remote-teams-fold-two-subtitle remote-teams-fold-two-subtitle--dominate-tech">
        <span className="font-48-NunitoSans-800 color-white-21">07</span>
        Technologies Used
      </h3>
      <div className="d-flex flex-wrap align-items-center dominate-tech-inner-div">
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
