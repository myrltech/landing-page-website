import React from "react";

const BlogCard = () => {
  return (
    <div className="blog-small-card">
      <div className="d-flex justify-content-between align-items-start">
        <img
          src={"/imgs/desktop/blog/blog-small-card-img.png"}
          alt="blog card img"
          className={"blog-small-card-img"}
        />
        <h5 className="font-20-montserrat-500 pt-10 color-white-72">
          24.09.2021
        </h5>
      </div>
      <h3 className="pt-30 font-32-montserrat-600">
        Things to avoid in your first B2B meeting with your client
      </h3>
      <div className="d-flex justify-content-between align-items-center pt-75">
        <h4 className="blog-small-card--reading-text"> 2 min read</h4>
        <h4 className="font-20-montserrat-500 color-white-72 d-flex align-items-center">
          B2B Sales <span className="blog-small-card--tag-span" /> Quick Tips
        </h4>
      </div>
    </div>
  );
};

export default BlogCard;
