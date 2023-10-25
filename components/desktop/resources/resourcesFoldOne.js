import React, { useState } from "react";

/*=====================================================
                    array
=====================================================*/
// const getstartedArray = ["Getting Started", "Tools"];

const getstartedContent = [
  {
    conatent: "web3",
  },
  {
    conatent: "DeFi",
  },
  {
    conatent: "NFT's",
  },
  {
    conatent: "DApps",
  },
  {
    conatent: "DAO's",
  },
  {
    conatent: "Layer 2s",
  },
  {
    conatent: "Layer 1s",
  },
  {
    conatent: "Altcoins",
  },
  {
    conatent: "ICOs",
  },
  {
    conatent: "Wallets",
  },
  {
    conatent: "Domains",
  },
  {
    conatent: "Web3 Jobs",
  },
  {
    conatent: "Defining Projects",
  },
];

/*============================================================================================

                                ResourcesFoldOne

============================================================================================*/
const ResourcesFoldOne = () => {
  const [values, setValues] = useState("");

  /*==============================================================================================================
        
                                                   handler
                         
 ===============================================================================================================*/
  const handleOnChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  /*==============================================================================================================
        
                                                renderBlockTwo
                         
 ===============================================================================================================*/
  const renderBlockTwo = () => {
    return (
      <>
        <div className="resouces-fold-two-section ">
          <h2 className="font-76-montserrat-800 text-center mobile-font-32-proxima-800">
            {" "}
            Our <br />{" "}
            <span className="green-purple-gradient-text">
              Curated Resources
            </span>
          </h2>
          <p className="text-center pt-20 font-24-montserrat-500 resources-fold-one-section-para">
            A library of useful tools to help you learn more about web3
            technologies
          </p>
          <div className=" resources-getstarted-block">
            {/* <div className="d-flex">
            {getstartedArray?.map((data, key) => (
              <div key={key} className="resources-tag-one">
                <span className="font-24-montserrat-700 green-purple-gradient-text mobile-font-14-Nunito-400">
                  {data}
                </span>
              </div>
            ))}
          </div> */}
            <div className="d-none d-md-block">
              <div className="d-flex justify-content-center flex-wrap align-items-start resources-tag-two-section">
                {getstartedContent.map((data, key) => (
                  <div key={key} className="col-3">
                    <div className="resources-tag-two mx-auto">
                      <img
                        src={"/imgs/desktop/resources/four-arrow-img.svg"}
                        alt="arrow icon"
                        className="resources-four-icon"
                      />
                      <h5 className="font-24-montserrat-700 resources-tag-two-title">
                        {data.conatent}
                      </h5>
                      <h5 className="font-32-montserrat-600 mobile-font-12-Nunito-600 pt-40 resources-tag-two-content">
                        Overview of
                        <br /> {data.conatent}{" "}
                      </h5>
                      <div className="text-right ">
                        <img
                          src={
                            "/imgs/desktop/resources/resources-right-arrow-icon.svg"
                          }
                          className="resource-arrow-icon"
                          alt="resources right arrow"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="resouces-fold-two-tag-section d-block d-md-none">
          {getstartedContent.map((data, key) => (
            <div
              key={key}
              className="resources-tag-two d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center">
                <img
                  src={"/imgs/desktop/resources/four-arrow-img.svg"}
                  alt="arrow icon"
                  className="resources-four-icon"
                />
                <h5 className="font-24-montserrat-700 mobile-font-18-montserrat-600 resources-tag-two-title">
                  {data.conatent}
                </h5>
              </div>
              <div className="text-right">
                <img
                  src={"/imgs/desktop/resources/resources-right-arrow-icon.svg"}
                  className="resource-arrow-icon"
                  alt="resources right arrow"
                />
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };
  /*==============================================================================================================
        
                                          return
                         
 ===============================================================================================================*/
  return (
    <div className="resources-fold-main-section">
      <div className="resources-fold-one-section">
        {/* <div className="resource-fold-one-img-section d-block d-md-none">
          <img
            src={"/imgs/desktop/resources/fold-one-img.svg"}
            alt="fold-one-img"
          />
        </div> */}
        <h2 className="font-76-montserrat-800 mobile-font-36-montserrat-800 red-gradient-text gradient-bg-text gradient-bg-text--resources">
          Stay updated with changing trends in Web3
        </h2>
        <p className="pt-40 font-20-montserrat-400 d-none d-md-block">
          Join our community of 100,000 students and professionals to take a
          <br />
          deeper dive into web3, crypto and the latest technology
        </p>
        <div className="d-none d-md-block">
          <div className="d-flex pt-40 input-section">
            {/*===================================================
                               Email 
            ===================================================*/}
            <div className="myrl-input-outer-div myrl-input-outer-div--resoures d-flex flex-column">
              <div className="myrl-input-div">
                <input
                  id="email"
                  type="email"
                  placeholder="mail@mail.com"
                  onChange={handleOnChange}
                  value={values.email}
                  name={"email"}
                />
              </div>
              <div className="error-message"></div>
            </div>
            <button
              className="agument-btn agument-btn--resources"
              onClick={handleSubmit}
            >
              Get weekly updates
            </button>
          </div>
        </div>
        <div className="resource-fold-one-img-section d-md-block d-none">
          <img
            src={"/imgs/desktop/resources/fold-one-img.svg"}
            alt="fold-one-img"
          />
        </div>
        <div className="resource-fold-one-img-section d-md-none d-block">
          <img
            src={"/imgs/desktop/resources/mobile-resources-fold.png"}
            alt="fold-one-img"
          />
        </div>
      </div>
      {renderBlockTwo()}
    </div>
  );
};

export default ResourcesFoldOne;
