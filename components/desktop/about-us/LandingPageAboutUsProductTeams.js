import React, { Fragment } from "react";
const cardArray = [
  {
    imgPath: "/imgs/desktop/about-us/remote-teams.svg",
    imgClass: "remote-team-logo",
    name: "Remote Teams",
    para: "Collaborate with your product teams across geographies using a modern set of tools including gantt charts, kanban boards, burndown charts and pipelines.",
    link: "https://www.remote-teams.io/",
  },
  {
    imgPath: "/imgs/desktop/about-us/dominate.svg",
    imgClass: "dominate-logo",
    name: "Dominate",
    para: "Sales as we know it has changed, you may no longer have the luxury of a face to face meeting.",
    paraTwo:
      "Regardless, you need the best tools to manage your sales in the most optimum way.",
    link: "https://dominate.ai/",
  },
];
export default function LandingPageAboutUsProductTeams() {
  /*=========================================================

                   renderCard

==========================================================*/
  const renderCard = () => {
    return (
      <div className="d-flex flex-nowrap justify-content-center mv-flex-wrap margin-auto product-teams-cards-section">
        {cardArray.map((data, index) => (
          <Fragment key={index}>
            <div className="product-teams-card">
              <div className="product-teams-card--img-section">
                <img
                  src={data.imgPath}
                  alt={data.name}
                  className={data.imgClass}
                />
              </div>
              <h3 className="font-36-NunitoSans-600 mobile-font-18-Nunito-600">
                {data.name}
              </h3>
              <p className="product-teams-card--para font-24-NunitoSans-600 mobile-font-12-Nunito-600 mv-pt-10 color-white-66 pt-25">
                {data.para}
              </p>
              <p className="product-teams-card--para font-24-NunitoSans-600 pt-25 color-white-66 mobile-font-12-Nunito-600 mv-pt-10">
                {data.paraTwo}
              </p>
              <div className="product-teams-card--btn-section margin-auto text-center">
                <a href={data.link} rel="noopener noreferrer" target="_blank">
                  <span className="font-24-NunitoSans-600 mobile-purple-green-gradient-text purple-green-gradient-text mobile-font-12-Nunito-600">
                    Visit Website
                  </span>
                </a>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    );
  };
  /*=============================================================
                        return
  ================================================================*/
  return (
    <div>
      <h2 className="margin-auto text-center font-64-NunitoSans-600 about-us-product-teams-text d-none d-md-block">
        More, For New Age{" "}
        <span className="green-purple-gradient-text"> Product Teams. </span>
      </h2>
      <h2 className="d-block d-md-none text-center mobile-font-28-Nunito-700">
        Our Products
      </h2>
      <div className="d-flex flex-nowrap mv-flex-wrap">{renderCard()}</div>
    </div>
  );
}
