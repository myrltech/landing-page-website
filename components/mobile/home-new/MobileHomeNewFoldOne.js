import Link from "next/link";
import React from "react";
import ProductCard from "../../desktop/ourPortfolio/ProductCard";

export default function MobileHomeNewFoldOne() {
  const renderOurProducts = () => {
    return (
      <div className="mobile-home-new-our-product-section">
        <div className="mobile-home-new-our-product-text-section">
          <h2 className="mobile-font-36-proxima-800">
            Our <br />
            <span className="green-purple-gradient-text">products</span>
          </h2>
          <p className="mobile-font-14-Nunito-600 mv-pt-27">
            {/* We build products across industries and <br />
            have a deep expertise in using the <br /> latest / cutting edge tech
            to enhance <br />
            user experience. Here are three products
            <br /> that we’ve launched recently in North-Am. */}
            Apart from building tech products for our
            <br /> clients, we also build, own and operate <br />
            our own SAAS products. Below are three such <br />
            products that we&apos;ve launched in North America
          </p>
        </div>
        <div className="mobile-new-dominate-card">
          <ProductCard
            imgPath="/imgs/mobile/home-new/dominate.png"
            imgClass="home-new-dominate-img"
            title="DOMINATE"
            // link="/dominate"
            btnText="Visit Website"
            // btnText="View Case Study"
            // para="An AI-powered sales team management SAAS solution that predicts revenue, lead conversion probability, sales team effectiveness by taking into account hundreds of signals ranging from conversations to market conditions, to help organizations focus their effort better."
            para="An AI-powered tool that makes high-ticket B2b sales a breeze. Built specifically around the needs of the most demanding tech agencies - if you run a tech agency businiess, this product will transform and significantly enhance the way you operate."
            webLink="https://www.dominate.ai/"
          />
        </div>
        <div className="mobile-new-remote-teams-card">
          <ProductCard
            imgPath="/imgs/mobile/home-new/remote-teams.png"
            imgClass="home-new-remote-teams-img"
            title="remote teams"
            // link="/remote-teams"
            btnText="Visit Website"
            webLink="https://www.remote-teams.io/"
            para="Managing productivity of remote-working teams is a new-age / post-pandemic challenge and we’ve solved that effectively using tons of automation, chat bots and templated workflows. If your team builds software, you will love this." // btnText="View Case Study"
            // para="Officially called remote-teams, Throtl is a highly effective AI-enabled project and teams management software to reduce communication overheads and avoid management oversights."
          />
        </div>
        <div className="mobile-new-airi-card">
          <ProductCard
            imgPath="/imgs/mobile/home-new/airi.png"
            imgClass="home-new-airi-img"
            title="airi"
            para="Mental Wellbeing cannot be taken lightly, especially for us working in tech. Airi is an A.I assistant with advanced NLP and sentiment analysis capabilities and she helps you uncover deep-routed triggers and helps you to avoid them."
            // link="/airi"
            webLink="http://airi.life/"
            btnText="Visit Website"
            // btnText="View Case Study"
          />
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="mobile-text-center mobile-home-new-agile-div">
        <h1 className="mobile-font-36-proxima-800">
          WEB 3.0 <br /> Tech- Product
          <br /> Development Lab.
        </h1>
        <p className="mobile-font-14-Nunito-700 mv-pt-40">
          {/* We specialize in building SAAS products.{" "} */}
          We specialize in building WEB 3.0 &amp; SAAS
          <br /> products
        </p>
        <p className="mobile-font-14-Nunito-600 mv-pt-20">
          {/* We’ve built, (and now) own and operate <br />
          multiple tech products.
           */}
          We build WEB 3.0 products for startups <br />
          At the same time, we also build SAAS products <br /> for top
          enterprise clients.
        </p>
        <div className="d-flex justify-content-center">
          <Link href="/contact-us">
            <a>
              <div className="mobile-home-new-get-in-touch-btn">
                Get in touch with us
              </div>
            </a>
          </Link>
        </div>
      </div>
      {renderOurProducts()}
    </>
  );
}
