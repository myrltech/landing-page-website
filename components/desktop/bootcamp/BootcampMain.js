import React from "react";
import MobileFooter from "../../mobile/header-footer/MobileFooter";
import MobileHeader from "../../mobile/header-footer/MobileHeader";
import Footer from "../header-footer/Footer";
import Header from "../header-footer/Header";
import BootcampFoldOne from "./BootcampFoldOne";
import BootcampFoldThree from "./BootcampFoldThree";
import BootcampFoldTwo from "./BootcampFoldTwo";

const BootcampMain = () => {
  return (
    <>
      {/*=====================================================================
                                desktop  header 
     ========================================================================*/}
      <div className="d-none d-md-block">
        <Header activeLink={"bootcamp"} />
      </div>
      {/*=====================================================================
                                mobile header 
     ========================================================================*/}
      <div className="d-block d-md-none">
        <MobileHeader activeMenu={"bootcamp"} />
      </div>
      <BootcampFoldOne />
      <BootcampFoldTwo />
      <BootcampFoldThree />
      {/*=====================================================================
                                desktop  header 
     ========================================================================*/}
      <div className="d-none d-md-block">
        <Footer />
      </div>
      {/*=====================================================================
                                mobile header 
     ========================================================================*/}
      <div className="d-block d-md-none">
        <MobileFooter />
      </div>
    </>
  );
};

export default BootcampMain;
