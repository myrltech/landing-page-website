import React from "react";
import Link from "next/link";

const logo = "/imgs/desktop/logo/myrl-tech-logo.svg";

export default function Footer() {
  /*=============================================================
                        return
  ================================================================*/
  return (
    <footer className="web-footer d-flex  justify-content-between flex-nowrap">
      <div className="col-3">
        <Link href="/">
          <a>
            <img src={logo} alt="myrl" className="footer-myrl-tech-logo" />
          </a>
        </Link>
      </div>
      <div className="d-flex web-footer-helpful-link-our-product-section  align-items-start justify-content-between flex-nowrap col-5">
        <div className="web-footer-helpful-link-section ">
          <h4 className="font-24-NunitoSans-600">Helpful Links</h4>
          <ul>
            {/* <li className="font-20-NunitoSans-600 color-white-66 pt-35">
              <Link href="/about-us">
                <a>
                  <span>About Us</span>
                </a>
              </Link>{" "}
            </li> */}
            {/* <li className="font-20-NunitoSans-600 color-white-66 pt-35">
              <Link href="/augment-client-landing-page">
                <a>
                  <span>For Clients</span>
                </a>
              </Link>{" "}
            </li> */}
            {/* <li className="font-20-NunitoSans-600 color-white-66 pt-35">
              <Link href="/augment-agency-landing-page">
                <a>
                  <span>For Agencies</span>
                </a>
              </Link>{" "}
            </li> */}
            {/* <li className="font-20-NunitoSans-600 color-white-66 pt-35">
              <Link href="/augment">
                <a>
                  <span>Augment</span>
                </a>
              </Link>
            </li> */}
            <li className="font-20-NunitoSans-600 color-white-66 pt-35">
              <Link href="/our-portfolio">
                <a>
                  <span>Our portfolio</span>
                </a>
              </Link>
            </li>
            <li className="font-20-NunitoSans-600 color-white-66 pt-35">
              <a
                href={"https://www.designandtech.cc/"}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Blogs</span>
              </a>
            </li>
            <li className="font-20-NunitoSans-600 color-white-66 pt-35">
              <Link href="/contact-us">
                <a>
                  <span>Get in touch</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="web-footer-our-products-section ">
          <h4 className="font-24-NunitoSans-600">Our Products</h4>
          <ul>
            <li className="font-20-NunitoSans-600 color-white-66 pt-35">
              <a
                href="https://dominate.ai/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Dominate</span>
              </a>
            </li>
            <li className="font-20-NunitoSans-600 color-white-66 pt-35">
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
      </div>
      <div className="web-footer-check-us-section text-center col-4">
        <h4 className="font-36-NunitoSans-600 web-footer-check-us-text">
          Check Us<span className="green-purple-gradient-text"> Out On</span>
        </h4>
        <div className="d-flex align-items-center mt-50 justify-content-center">
          <img
            src={"/imgs/desktop/icons/white-m-icon.svg"}
            alt="myrl"
            className="footer-m-icon"
          />
          <img
            src={"/imgs/desktop/icons/white-hand-icon.svg"}
            alt="myrl"
            className="footer-white-hand-icon"
          />
          <img
            src={"/imgs/desktop/icons/white-linkedin-icon.svg"}
            alt="linked"
            className="footer-linkedin-icon"
          />
        </div>
      </div>
    </footer>
  );
}
