import React from "react";
import Link from "next/link";

const logo = "./imgs/desktop/logo/myrl-tech-logo.svg";

export default function Header({ activeLink }) {
  /*===========================================================

                  return

============================================================*/
  return (
    <div className="d-flex flex-nowrap align-items-center justify-content-between myrl-navbar">
      <nav>
        <Link href="/">
          <a>
            <img
              src={logo}
              alt="myrl"
              className={
                activeLink == "home"
                  ? "navbar-myrl-tech-logo navbar-myrl-tech-logo--active"
                  : "navbar-myrl-tech-logo"
              }
            />
          </a>
        </Link>
      </nav>
      <ul className="d-flex flex-nowrap align-items-center justify-content-between myrl-navbar-link-section">
        {/*======================================================
                           augment
          =====================================================*/}
        {/* <li>
          <Link href="/augment">
            <a>
              <span
                className={
                  activeLink === "augment"
                    ? "weblink-active font-24-NunitoSans-600"
                    : "font-24-NunitoSans-600"
                }
              >
                Augment{" "}
              </span>
            </a>
          </Link>
        </li> */}
        {/*======================================================
                           aboutUs
          =====================================================*/}{" "}
        {/* <li>
          <Link href="/about-us">
            <a>
              <span
                className={
                  activeLink === "aboutUs"
                    ? "weblink-active font-24-NunitoSans-600"
                    : "font-24-NunitoSans-600"
                }
              >
                About Us
              </span>
            </a>
          </Link>
        </li> */}
        {/*======================================================
                           forClients
          =====================================================*/}
        {/* <li>
          <Link href="/augment-client-landing-page">
            <a>
              <span
                className={
                  activeLink === "forClients"
                    ? "weblink-active font-24-NunitoSans-600"
                    : "font-24-NunitoSans-600"
                }
              >
                For Clients
              </span>
            </a>
          </Link>
        </li> */}
        {/*======================================================
                           forAgencies
          =====================================================*/}
        {/* <li>
          <Link href="/augment-agency-landing-page">
            <a>
              <span
                className={
                  activeLink === "forAgencies"
                    ? "weblink-active font-24-NunitoSans-600"
                    : "font-24-NunitoSans-600"
                }
              >
                For Agencies
              </span>
            </a>
          </Link>
        </li> */}
        {/*======================================================
                           case studies
          =====================================================*/}{" "}
        {/* <li>
          <Link href="/caseStudies">
            <a>
              <span
                className={
                  activeLink === "caseStudies"
                    ? "weblink-active font-24-NunitoSans-600"
                    : "font-24-NunitoSans-600"
                }
              >
                Case Studies
              </span>
            </a>
          </Link>
        </li>{" "} */}
        {/*======================================================
                           Our Products
          =====================================================*/}{" "}
        <li>
          <Link href="/resources">
            <a>
              <span
                className={
                  activeLink === "resources"
                    ? "weblink-active font-24-NunitoSans-400"
                    : "font-24-NunitoSans-400"
                }
              >
                Resources
              </span>
            </a>
          </Link>
        </li>{" "}
        {/*======================================================
                           Our Products
          =====================================================*/}{" "}
        <li>
          <Link href="/our-portfolio">
            <a>
              <span
                className={
                  activeLink === "our products"
                    ? "weblink-active font-24-NunitoSans-400"
                    : "font-24-NunitoSans-400"
                }
              >
                Portfolio
              </span>
            </a>
          </Link>
        </li>{" "}
        {/*======================================================
                           Bootcamp
          =====================================================*/}{" "}
        {/* <li>
          <Link href="/bootcamp">
            <a>
              <span
                className={
                  activeLink === "bootcamp"
                    ? "weblink-active font-24-NunitoSans-400"
                    : "font-24-NunitoSans-400"
                }
              >
                Bootcamp
              </span>
            </a>
          </Link>
        </li>{" "} */}
        {/*======================================================
                           blogs
          =====================================================*/}{" "}
        <li>
          <a
            href={"https://www.designandtech.cc/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            {/* <Link href="/"> */}
            <span
              className={
                activeLink === "blogs"
                  ? "weblink-active font-24-NunitoSans-400"
                  : "font-24-NunitoSans-400"
              }
            >
              Blogs
            </span>
          </a>
          {/* </Link> */}
        </li>
        {/*======================================================
                           contactUs
          =====================================================*/}{" "}
        <li>
          <Link href="/contact-us">
            <a>
              <span
                className={
                  activeLink === "contact-us"
                    ? "weblink-active font-24-NunitoSans-400"
                    : "font-24-NunitoSans-400"
                }
              >
                Contact Us
              </span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
