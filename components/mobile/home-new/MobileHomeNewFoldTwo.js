import Link from "next/link";
import React, { Fragment } from "react";
const servicesArray = [
  {
    iconPath: "/imgs/mobile/home-new/home-services-icon-1.svg",
    iconClass: "home-services-icon-1",
    // name: "Disruptive Tech advisory for VCs and Angel Investors.",
    name: "Smart Contract and ICO Development",
  },
  {
    iconPath: "/imgs/mobile/home-new/home-services-icon-2.svg",
    iconClass: "home-services-icon-2",
    // name: "Tech consulting for A.I / ML, Big Data and Web 3.0 products.",
    name: "Crypto Exchange Development",
  },
  {
    iconPath: "/imgs/mobile/home-new/home-services-icon-3.svg",
    iconClass: "home-services-icon-3",
    // name: "Fractional CTO services",
    name: "Crypto Tracking and Trading Bots Development",
  },
  {
    iconPath: "/imgs/mobile/home-new/home-services-icon-4.svg",
    iconClass: "home-services-icon-4",
    // name: "API Development and Technical Product Management",
    name: "Customized Blockchain Solutions",
  },
  {
    iconPath: "/imgs/mobile/home-new/home-services-icon-5.svg",
    iconClass: "home-services-icon-5",
    // name: "Help with CTO and VP Engineering recruitment.",
    name: "NFT Marketplace Development",
  },
];
export default function MobileHomeNewFoldTwo() {
  const renderAboutUs = () => {
    return (
      <div className="home-new-about-us-section">
        <h2 className="mobile-font-36-proxima-700">
          About <span className="green-purple-gradient-text">us</span>
        </h2>
        <p className="mobile-font-14-Nunito-400">
          We’re just a small group of highly
          <br /> accomplished -{" "}
        </p>
        <ul className="mobile-font-14-proxima-400">
          <li className="mv-pt-25">
            <img
              src={"/imgs/mobile/icons/gradient-square-icon.svg"}
              alt="home new gradient square icon"
              className="home-new-gradient-square-icon"
            />{" "}
            Senior Technical Experts
          </li>
          <li className="mv-pt-25">
            <img
              src={"/imgs/mobile/icons/gradient-square-icon.svg"}
              alt="home new gradient square icon"
              className="home-new-gradient-square-icon"
            />
            Independent product managers
          </li>
          <li className="mv-pt-25">
            <img
              src={"/imgs/mobile/icons/gradient-square-icon.svg"}
              alt="home new gradient square icon"
              className="home-new-gradient-square-icon"
            />
            UX Designers
          </li>
        </ul>
        <p className="mobile-font-14-Nunito-400 mv-pt-32">
          that love working with cutting-edge <br />
          technologies and building products that
          <br /> scale to the moon.
        </p>
      </div>
    );
  };
  const renderOurMethdologies = () => {
    return (
      <div className="mobile-home-methodogies-div">
        <h2 className="mobile-text-right mobile-font-36-proxima-700">
          {/* Our <br /> */} Web3 <br />
          <span className="green-purple-gradient-text">
            {/* Methodologies */}Bootcamps
          </span>
        </h2>
        <p className="mobile-font-18-Nunito-400 mv-pt-22">
          {/* We use <span className="mobile-font-18-Nunito-800">LEAN</span>{" "}
          methodologies to help our startup clients reach a deep product-market
          fit. At the same time we work with{" "}
          <span className="mobile-font-18-Nunito-800">AGILE, DevOps</span> and
          <span className="mobile-font-18-Nunito-800">
            {""} Extreme Programming{" "}
          </span>
          methodologies to help our Enterprise clients.
        </p> */}
          {/* We’re known the world-over for our Web3.0 Bootcamps.
          <br />
          <br />
          A 3-month, intensive, self-paced program designed to give you a deep
          immersive knowledge of the latest cutting edge Web3 technologies.
          <br />
          <br />
          This frequently updated in-depth course starts from basic concepts and
          assumes that you don’t have any background in Web3 and takes you to a
          point where you understand Blockchains, Cryptocurrencies, NFTs, DAOs,
          DEXs from a deep level.
          <br />
          <br />
          Starting with basic hands-on coding exercises in Solidity all the way
          to building blockchains, NFT platforms using technologies like Infura,
          Pinata, Hardhat, Trufle.
          <br />
          <br />
          Available for both individuals or corporate training modules. This is
          the ultimate Web3 bootcamp.{" "} */}
          We’re known the world-over for our Web3.0 Bootcamps.
          <br />
          <br />
          A 3-month, intensive, self-paced program designed to give you a deep
          immersive knowledge of the latest cutting edge Web3 technologies.
          <br />
          <br />
          Starting with basic hands-on coding exercises in Solidity all the way
          to building blockchains, NFT platforms using technologies like Infura,
          Pinata, Hardhat, Trufle.{" "}
        </p>
        <Link href="/bootcamp">
          <div
            className="our-product-card-btn our-product-card-btn--web3-bootcamp"
            // onClick={() => console.log("Onclick find out more")}
          >
            {/* <a href={webLink} rel="noopener noreferrer" target="_blank"> */}
            <h5 className="product-card-font-24-NunitoSans-600">
              Find out more
            </h5>
            {/* </a> */}
          </div>
        </Link>
      </div>
    );
  };

  const renderServices = () => {
    return (
      <div className="mobile-home-services-section">
        <h2 className="mobile-font-36-proxima-700 mobile-home-services-title">
          <span className="green-purple-gradient-text">Services </span> we
          <br /> provide
        </h2>
        <div>
          {servicesArray.map((data, index) => (
            <Fragment key={index}>
              <div
                className={
                  index === 0
                    ? "d-flex flex-nowrap align-items-center mobile-home-services-card"
                    : "d-flex flex-nowrap align-items-center mobile-home-services-card-2"
                }
              >
                <img
                  src={data.iconPath}
                  alt={data.name}
                  className={data.iconClass}
                />
                <h4 className="mobile-font-18-proxima-700">{data.name}</h4>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="mobile-home-about-methdologies-section">
        {renderAboutUs()}
        {renderOurMethdologies()}
      </div>
      {renderServices()}
    </>
  );
}
