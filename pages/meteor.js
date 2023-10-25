import React from "react";
import HeadTag from "../components/desktop/common/HeadTag";
// import Metero from "../components/desktop/metero/Metero";

export default function meteor() {
  return (
    <>
      <HeadTag
        title=" Myrl Tech"
        description="A platform to help funded startups and enterprises find the best tech partner agencies from across the globe to help augment their product tech teams to fuel the next stage of innovation."
      />
      {/* <div className="d-none d-md-block">
        <Metero />
      </div>
      <div className="d-block d-md-none">
        {" "}
        <h1 className="text-center pt-5">Coming Soon</h1>
      </div> */}
    </>
  );
}
