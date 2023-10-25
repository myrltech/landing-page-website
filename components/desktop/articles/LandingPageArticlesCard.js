import React from "react";

const LandingPageArticlesCard = () => {
  return (
    <div className="d-flex justify-content-between align-items-center article-card">
      <div className="article-card-left-content">
        <h5 className="font-20-montserrat-600 article-card-left-content-text1">
          B2B Sales
          <span className="article-card-left-content-text1__span" />
          Quick Tips
          <span className="article-card-left-content-text1__span" />
          MAR 9,2022
        </h5>
        <p className="font-48-montserrat-600 pt-40">
          Things to avoid in your first B2B meeting with your client...
        </p>
        <div className="d-flex justify-content-between align-items-center pt-50">
          <img
            src={"/imgs/desktop/icons/gradient-bookmark.svg"}
            alt="bookmark"
            className="article-card-bookmark-icon"
          />
          <h5 className="font-20-montserrat-600 article-card-text2">
            Akhil Sharma<span className="article-card-text2_span">2</span>min
            read
          </h5>
        </div>
      </div>
      <img
        src={"/imgs/desktop/articles/article-card-img.png"}
        alt="articles card img"
        className="articles-card-img"
      />
      <div className="article-card-read-article-btn">
        <span>Read Article</span>
      </div>
    </div>
  );
};

export default LandingPageArticlesCard;
