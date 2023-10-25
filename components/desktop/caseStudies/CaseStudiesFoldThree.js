import React, { Component } from "react";
import Link from "next/link";
//import { LazyLoadImage } from "react-lazy-load-image-component";
//import "react-lazy-load-image-component/src/effects/blur.css";

export class CaseStudiesFoldThree extends Component {
  render() {
    return (
      <>
        <div className="case-studies-main-div">
          <div className="d-flex">
            <div className="col-md-6 web-desktop-first-div">
              <img
                src="./imgs/desktop/case-Studies/left-back.png"
                className="case-desktop-left-bg"
                alt="left background"
              />

              <Link href="/throtl">
                <a>
                  <img
                    src="./imgs/desktop/case-Studies/throtl-img.png"
                    className="metero-desktop-img"
                    alt="throtl"
                  />
                  {/* <LazyLoadImage
                    alt={"throtl"}
                    effect="blur"
                    src={"/imgs/desktop/case-Studies/throtl-img.png"}
                    className={"metero-desktop-img"}
                  /> */}
                </a>
              </Link>
            </div>

            <div className="col-md-6 web-desktop-second-div ">
              <div className="case-text-second-div">
                <h1 className="case-desktop-studies-head">Throtl</h1>
                <p className="case-desktop-studies-para">
                  Officially called remote-teams, Throtl is a highly effective
                  AI-enabled project and teams management software to reduce
                  communication overheads and avoid management oversights.
                </p>
                <Link href="/throtl">
                  <a>
                    <button className="web-home-fold1__btn case-studies-button">
                      Find Out More
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <img
              src="./imgs/desktop/case-Studies/right-back.png"
              className="case-desktop-right-bg"
              alt="right background"
            />
          </div>
        </div>
      </>
    );
  }
}

export default CaseStudiesFoldThree;
