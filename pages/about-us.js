import React from "react";
import LandingPageAboutUS from "../components/desktop/about-us/LandingPageAboutUs";
import HeadTag from "../components/desktop/common/HeadTag";

export default function aboutUs() {
  return (
    <>
      <HeadTag
        title="About Myrl Tech"
        description="with expertise in reactjs development, react native development, mobile app development, software development, we can help enterprises with offshore development solutions for enterprises based in U.S, Canada, Australia, Europe"
      />
      <LandingPageAboutUS />
    </>
  );
}
