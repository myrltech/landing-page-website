import React, { useState } from "react";
import { Fragment } from "react";
import BlogCard from "./BlogCard";

const dummyArray = [1, 2, 3, 4, 5, 6];

const LandingPageBlogFoldThree = () => {
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
  return (
    <>
      <div className="blog-fold-three-section">
        <h2 className="font-96-montserrat-800 blogs-article-title">
          TRENDING <br /> ARTICLES{" "}
        </h2>
        <div className="d-flex justify-content-between flex-wrap blog-fold-three-card-section">
          {dummyArray.map((data, key) => (
            <div key={key}>
              <BlogCard />
            </div>
          ))}
        </div>
      </div>
      {/*==================================================================================
                                     newsletter
      =================================================================================*/}
      <div className="resources-fold-two-section resources-fold-two-section--blog">
        <div className="resources-fold-two-card text-center">
          <h2 className="font-76-montserrat-800">Sign up for our Newsletter</h2>
          <div className="d-flex justify-content-center pt-40">
            <div className="myrl-input-outer-div myrl-input-outer-div--resoures myrl-input-outer-div--resoures--two d-flex flex-column">
              <div className="myrl-input-div">
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  onChange={handleOnChange}
                  value={values.email}
                  name={"email"}
                />
              </div>
              <div className="error-message"></div>
            </div>
            <button
              className="agument-btn agument-btn--resources agument-btn--resources--blog"
              onClick={handleSubmit}
            >
              Get weekly updates
            </button>
          </div>
        </div>
        <div className="resources-fold-two-img-section resources-fold-two-img-section--blog">
          <img
            src="/imgs/desktop/blog/blog-newsletter-img.svg"
            alt="fold two img"
          />
        </div>
      </div>
    </>
  );
};

export default LandingPageBlogFoldThree;
