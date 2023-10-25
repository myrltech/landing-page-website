import React from "react";

const listContent = [
  "Utilize modules for code organization",
  "Employ classes for code organization",
  "Understand communication and browser integration",
  "Demonstrate asynchronous programming techniques",
  "Use proxies and reflection",
];
const BootcampFoldOneRightSection = () => {
  /*============================================
            renderBlockOne
=============================================*/
  const renderBlockOne = () => {
    return (
      <div className="bootcamp-right-block-one">
        <div className="bootcamp-right-block-one-row-1">
          <h2 className="font-30-proxima-700">Try for free</h2>
          <p className="font-18-NunitoSans-600 pt-20">
            Get this learning path plus top-rated picks in <br />
            tech skills and other popular topics.
          </p>
          <button
            className="mt-30 home-new-btn home-new-btn--bootcamp"
            onClick={() => console.log("On click get started")}
          >
            <span className="font-20-NunitoSans-600"> Get Started</span>
          </button>
        </div>
        <div className="bootcamp-right-block-one-row-1">
          <h2 className="font-30-proxima-700">
            Your 10 day free trial includes
          </h2>
          <div className="d-flex align-items-start pt-20">
            <h5 className="bootcamp-play-icon">
              <i className="fa fa-play-circle-o" aria-hidden="true"></i>
            </h5>
            <div>
              <h3 className="font-18-NunitoSans-600 ">
                <strong> Expert-led courses</strong>
              </h3>
              <p className="font-16-NunitoSans-600 pt-10">
                Keep up with the pace of change with thousands of expert-led,
                in-depth courses.
              </p>
            </div>
          </div>
        </div>
        <div className="bootcamp-right-block-one-row-1 border-none">
          <h3 className="font-30-proxima-700">For teams</h3>
          <p className="font-20-NunitoSans-600 pt-10">
            <span className="font-20-NunitoSans-700 green-purple-gradient-text">
              {" "}
              Give up to 10 users
            </span>{" "}
            access to our full library including this path free for 14 days
          </p>
        </div>
      </div>
    );
  };

  /*============================================
            renderBlockTwo
=============================================*/
  const renderBlockTwo = () => {
    return (
      <div className="bootcamp-right-block-one bootcamp-right-block-one--two">
        <h3 className="font-30-proxima-700">What You Will Learn</h3>
        <ul className="mb-27 bootcamp-ul">
          {listContent.map((data, key) => (
            <li key={key} className="ml-20 font-18-NunitoSans-600">
              {data}
            </li>
          ))}
        </ul>

        <div className="pt-20">
          <h3 className="font-30-proxima-700">Experience</h3>
          <ul className="ml-20 pt-10 mb-0">
            <li className="font-18-NunitoSans-600">HTML</li>
            <li className="font-18-NunitoSans-600">CSS</li>
          </ul>
        </div>
      </div>
    );
  };

  /*============================================
            renderBlockThree
=============================================*/
  const renderBlockThree = () => {
    return (
      <div className="bootcamp-right-block-three">
        <h3 className="font-24-inter-600">Skill IQ</h3>
        <h4 className="font-36-proxima-700 mv-pt-20 pt-10">
          Not sure where to start?
        </h4>
        <p className="pt-10 mv-pt-10 font-20-proxima-600">
          See where your skills stand and where you can grow.
        </p>
        <button
          className="our-product-card-btn our-product-card-btn--bootcamp"
          onClick={() => console.log("TAKE A SKILL ASSESSMENT")}
        >
          TAKE A SKILL ASSESSMENT
        </button>
      </div>
    );
  };

  /*============================================
            renderOtherRelatedBlock
=============================================*/
  const renderOtherRelatedBlock = () => {
    return (
      <>
        <h3 className="font-30-proxima-700 mobile-font-30-proxima-700">
          Other related topics
        </h3>
        <div className="d-flex align-items-center pt-10 mv-pt-10">
          <h3 className="font-16-proxima-700 mobile-font-14-proxima-700 bootcamp-tags-text">
            HTML
          </h3>
          <h3 className="font-16-proxima-700 mobile-font-14-proxima-700 mr-0 bootcamp-tags-text">
            Node.js
          </h3>
        </div>
      </>
    );
  };
  /*============================================
              return
=============================================*/
  return (
    <div className="bootcamp-right-section">
      {renderBlockOne()}
      {renderBlockTwo()}
      <div className="d-none d-md-block">{renderOtherRelatedBlock()}</div>
      {renderBlockThree()}
      <div className="d-block d-md-none mv-pt-20">
        {renderOtherRelatedBlock()}
      </div>
    </div>
  );
};

export default BootcampFoldOneRightSection;
