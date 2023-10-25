import React from "react";
import ResourcesFoldOne from "./resourcesFoldOne";
import ResourcesFoldTwo from "./resourcesFoldTwo";

const ResourcesMain = () => {
  return (
    <>
      <ResourcesFoldOne />
      <div className="d-none d-md-block">
        <ResourcesFoldTwo />
      </div>
    </>
  );
};

export default ResourcesMain;
