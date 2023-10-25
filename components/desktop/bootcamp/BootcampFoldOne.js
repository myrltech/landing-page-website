import React from "react";
import BootcampFoldOneLeftSection from "./BootcampFoldOneLeftSection";
import BootcampFoldOneRightSection from "./BootcampFoldOneRightSection";

/*========================================================
                BootcampFoldOne
=======================================================*/
const BootcampFoldOne = () => {
  return (
    <div className="d-flex flex-wrap bootcamp-fold-one-section">
      <div className="col-md-8 col-sm-12">
        <BootcampFoldOneLeftSection />
      </div>
      <div className="col-md-4 col-sm-12">
        <BootcampFoldOneRightSection />
      </div>
    </div>
  );
};

export default BootcampFoldOne;
