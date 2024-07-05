import Link from "next/link";
import React from "react";
import { Fragment } from "react";
import ProductCard from "../ourPortfolio/ProductCard";
import LandingPageHomeNewFoldThree from "./LandingPageHomeNewFoldThree";

const list = [
  {
    title: "Research",
    imgPath: "./imgs/desktop/icons/arrow-circle-icon.svg",
    link: "/",
  },
  {
    title: "Engineering",
    imgPath: "./imgs/desktop/icons/arrow-circle-icon.svg",
    link: "/resources",
  },
  {
    title: "Consultancy",
    imgPath: "./imgs/desktop/icons/arrow-circle-icon.svg",
    link: "/",
  },
  {
    title: "Training",
    imgPath: "./imgs/desktop/icons/arrow-circle-icon.svg",
    link: "/",
  },
];

const listTwo = [
  {
    title: "3 month",
  },
  {
    title: "Self-Paced",
  },
  {
    title: "Online",
  },
  {
    title: "Beginner Friendly",
  },
  {
    title: "Practical Experience",
  },
];

export default function LandingPageHomeNewFoldOne() {
  return (
    <>
      <div className="text-center home-new-agile-section">
        <h1 className="font-76-montserrat-800 font-32-montserrat-800 home-new-agile-section-title">
          Custom A.I. Agents and Agentic workflows for Enterprises.
        </h1>
        <p className="font-20-montserrat-400 pt-10  home-new-agile-section-para d-none d-md-block">
          We have a deep expertise in building AI products with custom A.I. Agents and Agentic workflows.
        </p>
        <p className="mobile-font-16-montserrat-500  mv-pt-32 home-new-agile-section-para d-block d-md-none">
          We have a deep expertise in building AI products with custom A.I. Agents and Agentic workflows.
        </p>
        {/* <div className="d-flex align-items-center justify-content-center">
          <Link href="/contact-us">
            <a>
              <div className="home-new-btn">
                <span className="font-20-NunitoSans-600">Get in touch </span>
              </div>
            </a>
          </Link>
        </div> */}
        <div className="d-flex justify-content-center align-items-center home-list-main-section pt-75">
          <div className="col-1"></div>
          {list?.map((data, key) => (
            <div
              key={key}
              className={`text-center col-2 sm:col-12 home-list ${key === 3 ? "border-none" : ""
                }`}
            >
              <h5 className="font-24-montserrat-400 color-grey-2 font-24-montserrat-700">
                {/* <Link href={data.link}> */}
                <a>
                  {data.title}
                  {/* <img
                      src={"./imgs/desktop/icons/arrow-circle-icon.svg"}
                      alt="arrow"
                      className="home-arrow-with-circle-icon"
                    />{" "} */}
                </a>
                {/* </Link> */}
              </h5>
            </div>
          ))}
          <div className="col-1"></div>
        </div>
        {/* <p className="pt-115 text-center font-40-montserrat-300 color-grey font-24-montserrat-300 mv-pt-65">
          Join our Industry-Standard
          <span className="font-44-montserrat-800 font-24-montserrat-700">
            {" "}
            Web3 Bootcamp{" "}
          </span>{" "}
          <br />
          and build &nbsp;
          <span className="font-44-montserrat-800 font-24-montserrat-700">
            Real-World dApps
          </span>
        </p> */}
        {/* <div className="d-md-flex d-none justify-content-center align-items-center home-list-main-section pt-75">
          <div className="col-1"></div>
          {listTwo?.map((data, key) => (
            <div
              key={key}
              className={`text-center  home-list home-list__two ${key === 4 ? "border-none" : ""
                }`}
            >
              <h5 className="font-24-montserrat-400 ">{data.title} </h5>
            </div>
          ))}
          <div className="col-1"></div>
        </div> */}

        <div className="d-md-none d-flex justify-content-center flex-wrap new-home-bootcamp-section">
          {listTwo.map((data, key) => (
            <Fragment key={key}>
              <h5 className=" mobile-font-14-montserrat-500">{data.title}</h5>
            </Fragment>
          ))}
        </div>

        <div className="d-flex justify-content-center  align-items-center pt-60">
          <Link href="/">
            <a>
              <div className="find-out-btn">
                Share Your Requirements &nbsp;
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </div>
            </a>
          </Link>
        </div>
        <LandingPageHomeNewFoldThree />
      </div>{" "}
    </>
  );
}
