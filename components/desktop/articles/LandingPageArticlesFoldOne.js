import React, { useState } from "react";
import LandingPageArticlesCard from "./LandingPageArticlesCard";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import Select from "react-select";

const articlesList = [1, 2, 3, 4, 5, 6, 7, 8];
const options = [
  { label: "lorem", value: "lorem" },
  { label: "lorem2", value: "lorem2" },
  { label: "lorem3", value: "lorem3" },
];
const LandingPageArticlesFoldOne = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedArticles, setSelectedArticles] = useState(options[0]);
  // pagination
  const recordsInOnePage = 4;
  /*********************************
   
            pagination handler
  
  ******************************** */

  const onChangePagination = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="articles-fold-one-section">
        <div className="d-flex align-items-center justify-content-between">
          <h1 className="font-116-montserrat-800 red-gradient-text">
            ALL
            <br /> ARTICLES
          </h1>
          <img
            src={"./imgs/desktop/articles/article-fold-one-img.svg"}
            alt="articles fold one"
            className="articles-fold-one-img"
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Select
          className="react-select-container react-select-container--artcles"
          classNamePrefix="react-select-elements"
          isSearchable={false}
          value={selectedArticles}
          options={options}
          onChange={(e) => {
            setSelectedArticles(e);
          }}
        />
      </div>
      <div className="article-card-outer-section">
        {articlesList.map((data, key) => {
          return (
            key >= (currentPage - 1) * recordsInOnePage &&
            key < currentPage * recordsInOnePage && <LandingPageArticlesCard />
          );
        })}
        <div className="myrl_pagination d-flex justify-content-center">
          {/*********************************   
   
                pagination component

           ******************************** */}

          <Pagination
            onChange={onChangePagination}
            current={currentPage}
            defaultPageSize={recordsInOnePage}
            total={articlesList.length}
            showTitle={false}
            showLessItems={true}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPageArticlesFoldOne;
