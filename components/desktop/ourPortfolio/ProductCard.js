import React from "react";
import Link from "next/link";

export default function ProductCard({
  extraClass,
  imgPath,
  imgClass,
  title,
  para,
  link,
  btnText,
  webLink,
}) {
  return (
    <div className={`our-product-card text-center ${extraClass}`}>
      <img src={imgPath} alt={title} className={imgClass} />
      <h3 className="product-card-font-36-proxima-700 our-product-card-text text-uppercase">
        {title}
      </h3>
      <p className="our-product-card-para color-white-66 product-card-font-24-NunitoSans-600 pt-50">
        {para ? (
          <> {para} </>
        ) : (
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        )}
      </p>
      {webLink ? (
        <div className="our-product-card-outer-btn">
          <a
            href={webLink}
            rel="noopener noreferrer"
            target="_blank"
            className="our-product-card-btn"
          >
            <h5 className="color-white-66 product-card-font-24-NunitoSans-600">
              {btnText ? <>{btnText} </> : "View Case Study"}
            </h5>
          </a>
        </div>
      ) : (
        <div className="our-product-card-outer-btn">
          <Link href={link} className="our-product-card-btn">
            <a>
              <h5 className="color-white-66 product-card-font-24-NunitoSans-600">
                {btnText ? <>{btnText} </> : "View Case Study"}
              </h5>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}
