import React from "react";

/*===============================================================================================
                                           BootcampFoldThree
===============================================================================================*/
const BootcampFoldThree = () => {
  return (
    <div className="bootcamp-fold-one-section bootcamp-fold-three-section d-flex flex-wrap align-items-center justify-content-center">
      <h4 className="font-44-proxima-700 mobile-font-30-proxima-700 text-center">
        Join our learners and upskill
        <br />
        in leading technologies
      </h4>
      <button
        className="mt-0 home-new-btn home-new-btn--fold-three mobile-home-new-get-in-touch-btn home-new-btn--bootcamp"
        onClick={() => console.log("On click get started")}
      >
        <span className="font-24-NunitoSans-600"> Get Started</span>
      </button>
    </div>
  );
};

export default BootcampFoldThree;
