import React from "react";
import Link from "next/link";

const logo = "/imgs/mobile/logo/myrl-tech-logo.svg";

export default function MobileFooter() {
  /*=============================================================
                        return
  ================================================================*/
  return (
    <footer className="mobile-footer d-flex  justify-content-between flex-nowrap">
      <div className="col-4">
        <Link href="/">
          <a>
            <img src={logo} alt="myrl" className="footer-myrl-tech-logo" />
          </a>
        </Link>
      </div>
      <div className="web-footer-helpful-link-section col-4">
        <h4 className="mobile-font-14-Nunito-600">Helpful Links</h4>
        <ul>
          {/* <li className="mobile-font-12-Nunito-600 color-white-66 mv-pt-20">
            <Link href="/about-us">
              <a>
                <span>About Us</span>
              </a>
            </Link>{" "}
          </li> */}
          {/* <li className="mobile-font-12-Nunito-600 color-white-66 mv-pt-20">
            <Link href="/augment-client-landing-page">
              <a>
                <span>For Clients</span>
              </a>
            </Link>{" "}
          </li> */}
          {/* <li className="mobile-font-12-Nunito-600 color-white-66 mv-pt-20">
            <Link href="/augment-agency-landing-page">
              <a>
                <span>For Agencies</span>
              </a>
            </Link>{" "}
          </li> */}
          {/* <li className="mobile-font-12-Nunito-600 color-white-66 mv-pt-20">
            <Link href="/augment">
              <a>
                <span>Augment</span>
              </a>
            </Link>
          </li> */}
          <li className="mobile-font-12-Nunito-600 color-white-66 mv-pt-20">
            <Link href="/our-portfolio">
              <a>
                <span>Our portfolio</span>
              </a>
            </Link>
          </li>
          <li className="mobile-font-12-Nunito-600 color-white-66 mv-pt-20">
            <a
              href={"https://www.designandtech.cc/"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Blogs</span>
            </a>{" "}
          </li>
          <li className="mobile-font-12-Nunito-600 color-white-66 mv-pt-20">
            <Link href="/contact-us">
              <a>
                <span>Get in touch</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-4">
        <div className="web-footer-our-products-section">
          <h4 className="mobile-font-14-Nunito-600">Our Products</h4>
          <ul>
            <li className="mobile-font-12-Nunito-600 color-white-66 mv-pt-20">
              <a
                href="https://dominate.ai/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Dominate</span>
              </a>
            </li>
            <li className="mobile-font-12-Nunito-600 color-white-66 mv-pt-20">
              <a
                href="https://www.remote-teams.io/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Remote Teams</span>
              </a>{" "}
            </li>
          </ul>
        </div>
        <div className="mv-pt-20">
          <h4 className="mobile-font-14-Nunito-600">Check Us Out On</h4>
          <div className="mv-pt-17 d-flex align-items-center justify-content-start">
            <img
              src={"/imgs/mobile/icons/white-m-icon.svg"}
              alt="myrl"
              className="mobile-footer-m-icon"
            />
            <img
              src={"/imgs/mobile/icons/white-hand-icon.svg"}
              alt="myrl"
              className="mobile-footer-white-hand-icon"
            />
            <img
              src={"/imgs/mobile/icons/white-linkedin-icon.svg"}
              alt="linked"
              className="mobile-footer-linkedin-icon"
            />
          </div>
        </div>{" "}
      </div>
    </footer>
  );
}
