import React, { useState } from "react";

const LandingPageBlogFoldOne = () => {
  const [blogs, setBlogs] = useState("");

  /*==============================================================================================================
        
                                                   handler
                         
   ===============================================================================================================*/
  const handleOnChange = (e) => {
    setBlogs(e.target.value);
  };

  return (
    <div>
      <div className="blog-fold-one-section">
        <h1 className="font-116-montserrat-800 red-gradient-text">
          YOUR GUIDE <br /> TO WEB3 <br />
          TECH AND
          <br /> MORE
        </h1>

        <div className="articles-fold-one-img-section">
          <img
            src={"/imgs/desktop/blog/fold-one-img.png"}
            alt="articles fold one"
            className="articles-fold-one-img"
          />
        </div>
        {/*===================================================
                               fullName
            ===================================================*/}
        <div className="d-flex justify-content-center">
          <div className="myrl-input-outer-div myrl-input-outer-div--blog d-flex flex-column">
            <div className="myrl-input-div">
              <input
                id="blog"
                placeholder="Search for articles on latest web3 tech and more"
                onChange={handleOnChange}
                value={blogs}
                name={"fullName"}
              />
              <div className="search-icon">
                <i className="fa fa-search" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blogs-article-section">
        <h3 className="font-96-montserrat-800 blogs-article-title">
          LATEST <br /> ARTICLES{" "}
        </h3>
        {/*=======================================================       

                            Card One

      ========================================================*/}
        <div className="article-card--blog">
          <div className="d-flex justify-content-between align-items-center article-card ">
            <div className="article-card-left-content">
              <h5 className="font-20-montserrat-600 article-card-left-content-text1">
                B2B Sales
                <span className="article-card-left-content-text1__span" />
                Quick Tips
                <span className="article-card-left-content-text1__span" />
                MAR 9,2022
              </h5>
              <p className="font-48-montserrat-600 pt-40  article-card-para">
                Things to avoid in your first B2B meeting with your client
              </p>
              <button className="blog-card-btn">Read Article</button>
              <h3 className="text-right blog-card-reading-time-text font-20-montserrat-500">
                <span>2</span> min read
              </h3>
            </div>
            <div>
              <img
                src={"/imgs/desktop/blog/blog-card-one.png"}
                className="blog-card-one-img"
                alt="blog card one"
              />
            </div>
          </div>
        </div>
        {/*=======================================================       

                            Card Two

        ========================================================*/}
        <div className="pt-105 article-card--blog">
          <div className="d-flex justify-content-between align-items-end article-card ">
            <div>
              <img
                src={"/imgs/desktop/blog/blog-card-two.png"}
                className="blog-card-two-img"
                alt="blog card two"
              />
            </div>
            <div className="blog-card-right-content">
              {/* <h5 className="font-20-montserrat-600 article-card-left-content-text1">
              B2B Sales
              <span className="article-card-left-content-text1__span" />
              Quick Tips
              <span className="article-card-left-content-text1__span" />
              MAR 9,2022
            </h5> */}
              <p className="font-48-montserrat-600 pt-40 blog-card-para">
                Things to avoid in your first B2B meeting with your client
              </p>
              <button className="blog-card-btn blog-card-btn--blog-card-two">
                Read Article
              </button>
              <h3 className="blog-card-reading-time-text pt-40 font-20-montserrat-500">
                <span>2</span> min read
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageBlogFoldOne;
