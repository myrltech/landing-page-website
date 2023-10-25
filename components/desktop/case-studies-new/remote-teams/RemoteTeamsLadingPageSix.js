import React from "react";
import { Fragment } from "react";
const techArray = [
  {
    imgPath: "/imgs/desktop/case-studies-new/tech-logo/react.png",
    imgClass: "remote-teams-react-logo",
    imgName: "react",
  },
  {
    imgPath: "/imgs/desktop/case-studies-new/tech-logo/nodejs.png",
    imgClass: "remote-teams-nodejs-logo",
    imgName: "node js",
  },
  {
    imgPath: "/imgs/desktop/case-studies-new/tech-logo/ansible.png",
    imgClass: "remote-teams-ansible-logo",
    imgName: "ansible",
  },
  {
    imgPath: "/imgs/desktop/case-studies-new/tech-logo/mongodb.png",
    imgClass: "remote-teams-mongodb-logo",
    imgName: "mongodb",
  },
  {
    imgPath: "/imgs/desktop/case-studies-new/tech-logo/jenkins.png",
    imgClass: "remote-teams-jenkins-logo",
    imgName: "jenkins",
  },
  {
    imgPath: "/imgs/desktop/case-studies-new/tech-logo/docker.png",
    imgClass: "remote-teams-docker-logo",
    imgName: "docker",
  },
  // {
  //   imgPath: "/imgs/desktop/case-studies-new/tech-logo/kubernets.png",
  //   imgClass: "remote-teams-kubernetes-logo",
  //   imgName: "kubernetes",
  // },
  {
    imgPath: "/imgs/desktop/case-studies-new/tech-logo/aws.png",
    imgClass: "remote-teams-aws-logo",
    imgName: "aws",
  },
];
export default function RemoteTeamsLadingPageSix() {
  return (
    <div className="remote-teams-tech-div">
      <h3 className="font-48-NunitoSans-600 remote-teams-fold-two-subtitle remote-teams-fold-two-subtitle--tech">
        <span className="font-48-NunitoSans-800 color-white-21">07</span>
        Technologies Used
      </h3>
      <div className="d-flex flex-wrap align-items-center remote-teams-tech-inner-div">
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
