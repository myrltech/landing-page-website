import Link from "next/link";
import React, { useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";

const listMenu = [
  {
    imgPath: "./imgs/mobile/icons/home-icon.svg",
    imgClass: "mobile-home-icon",
    link: "/",
    name: "Home",
  },
  {
    imgPath: "./imgs/mobile/icons/star-icon.svg",
    imgClass: "mobile-star-icon",
    link: "/our-portfolio",
    name: "Our Portfolio",
  },
  {
    imgPath: "./imgs/mobile/icons/agency-icon.svg",
    imgClass: "mobile-star-icon",
    link: "/bootcamp",
    name: "Bootcamp",
  },
  {
    imgPath: "./imgs/mobile/icons/two-user-icon.svg",
    imgClass: "mobile-two-user-icon",
    // link: "/about-us",
    name: "Blogs",
  },
  // {
  //   imgPath: "/imgs/mobile/icons/star-icon.svg",
  //   imgClass: "mobile-star-icon",
  //   link: "/augment",
  //   name: "Augment",
  // },
  // {
  //   imgPath: "/imgs/mobile/icons/client-icon.svg",
  //   imgClass: "mobile-contact-us-icon",
  //   link: "/augment-client-landing-page",
  //   name: "For Clients",
  // },
  // {
  //   imgPath: "/imgs/mobile/icons/agency-icon.svg",
  //   imgClass: "mobile-star-icon",
  //   link: "/augment-agency-landing-page",
  //   name: "For Agencies",
  // },
  {
    imgPath: "./imgs/mobile/icons/mail-icon.svg",
    imgClass: "mobile-contact-us-icon",
    link: "/contact-us",
    name: "Contact Us",
  },
];

export default function MobileHeader({ activeMenu }) {
  const [values, setValues] = useState({
    isMobileNavbarOpen: null,
  });

  /*========================================================
                react-burger-menu event handlers
  ========================================================*/

  const handleOnStateChange = (stateVal) => {
    setValues({
      isMobileNavbarOpen: stateVal.isOpen,
    });
  };

  const closeMobileNavbar = () => {
    setValues({ isMobileNavbarOpen: false });
  };

  const renderCheckUsOut = () => {
    return (
      <>
        <div className="mobile-header-check-out-div">
          <h4 className="mobile-font-14-Nunito-600 mobile-text-center">
            Check Us Out On
          </h4>
          <div className="mv-pt-17 d-flex align-items-center justify-content-center">
            <img
              src={"./imgs/mobile/icons/white-m-icon.svg"}
              alt="myrl"
              className="mobile-footer-m-icon"
            />
            <img
              src={"./imgs/mobile/icons/white-hand-icon.svg"}
              alt="myrl"
              className="mobile-footer-white-hand-icon"
            />
            <img
              src={"./imgs/mobile/icons/white-linkedin-icon.svg"}
              alt="linked"
              className="mobile-footer-linkedin-icon"
            />
          </div>
        </div>{" "}
      </>
    );
  };

  return (
    <div className="navbar-mobile-outer-div">
      <nav className="navbar-mobile d-flex justify-content-between flex-nowrap">
        <Link href="/">
          <a>
            <img
              src="./imgs/mobile/logo/myrl-tech-logo.svg"
              alt="logo"
              className="web-nav-logo-mobile"
            />
          </a>
        </Link>{" "}
        <Menu
          right
          isOpen={values.isMobileNavbarOpen}
          onStateChange={(stateVal) => handleOnStateChange(stateVal)}
          overlayClassName={"myOverlay"}
          customBurgerIcon={
            <img
              src="./imgs/mobile/icons/menu-icon.svg"
              className="front"
              alt="nav front"
            />
          }
          customCrossIcon={
            <img
              src="./imgs/mobile/icons/cross.svg"
              className="nav-close-img"
              alt="nav back"
            />
          }
          burgerButtonClassName={"menu"}
        >
          <div className="menu-myrl-logo-img-div">
            <img
              src="./imgs/mobile/logo/myrl-tech-logo.svg"
              alt="logo"
              className="menu-myrl-logo-img"
            />
          </div>
          {listMenu.map((data, index) => (
            <div
              key={index}
              className={
                activeMenu === data.name
                  ? "menu-item menu-item--active"
                  : "menu-item"
              }
            >
              {index === 3 ? (
                <a
                  href={"https://www.designandtech.cc/"}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <h5
                    onClick={() => closeMobileNavbar()}
                    className="mobile-font-16-Nunito-600"
                  >
                    <img
                      src={data.imgPath}
                      alt={data.name}
                      className={data.imgClass}
                    />
                    {data.name}
                    <img
                      src={"./imgs/mobile/icons/arrow-icon.svg"}
                      alt={"arrow"}
                      className={"mobile-arrow-icon"}
                    />
                  </h5>
                </a>
              ) : (
                <Link href={data.link}>
                  <a>
                    <h5
                      onClick={() => closeMobileNavbar()}
                      className="mobile-font-16-Nunito-600"
                    >
                      <img
                        src={data.imgPath}
                        alt={data.name}
                        className={data.imgClass}
                      />
                      {data.name}
                      <img
                        src={"./imgs/mobile/icons/arrow-icon.svg"}
                        alt={"arrow"}
                        className={"mobile-arrow-icon"}
                      />
                    </h5>
                  </a>
                </Link>
              )}
            </div>
          ))}
          {renderCheckUsOut()}
        </Menu>
      </nav>
    </div>
  );
}
