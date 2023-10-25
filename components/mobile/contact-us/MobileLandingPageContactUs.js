import React, { useState } from "react";
import Select from "react-select";
import MobileFooter from "../header-footer/MobileFooter";
import MobileHeader from "../header-footer/MobileHeader";

const options = [
  { value: "Become a  Client Partner", label: "Become a  Client Partner" },
  { value: "Become an Agency Partner", label: "Become an Agency Partner" },
  { value: "Other", label: "Other" },
];
export default function MobileLandingPageContactUs() {
  const [values, setValues] = useState({
    fName: "",
    email: "",
    pNumber: "",
    cName: "",
    city: "",
    purpose: "",
    message: "",
  });

  /*==============================================================================================================
        
                                                   handler
                         
      ===============================================================================================================*/
  const handleOnChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: [e.target.value],
    });
  };

  const handleChangePurpose = (selectedOption) => {
    setValues({ ...values, purpose: selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  const handleOnChangeNumber = (e) => {
    setValues({
      ...values,
      // [e.target.name]: [e.target.value],
      [e.target.name]: e.target.validity.valid ? e.target.value : "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  /*==============================================================================================================
        
                                                return
                         
  ===============================================================================================================*/
  return (
    <>
      <div className="mobile-get-in-touch-bg-div">
        <MobileHeader activeMenu="Contact Us" />
        <div className="mobile-get-in-touch-div">
          <h2 className="mobile-font-28-Nunito-700 mobile-get-in-touch-text">
            Get In Touch
          </h2>
          <form noValidate onSubmit={handleSubmit}>
            {/* Personal Details */}
            <div className="contact-personal-details-div">
              <h5 className="mobile-font-16-Nunito-600 mobile-purple-green-gradient-text">
                Personal Details
              </h5>
              <div className="mv-pt-20">
                <label className="mobile-font-14-Nunito-600" htmlFor={"fName"}>
                  Full Name
                </label>
                <div className="augment-input-div">
                  <input
                    onChange={handleOnChange}
                    value={values.fName}
                    name="fName"
                    placeholder="Eg. Name"
                  />
                </div>
              </div>
              <div className="mv-pt-20">
                <label className="mobile-font-14-Nunito-600" htmlFor={"email"}>
                  Email Address
                </label>
                <div className="augment-input-div">
                  <input
                    onChange={handleOnChange}
                    value={values.email}
                    name="email"
                    placeholder="Eg. Name"
                  />
                </div>
              </div>{" "}
              <div className="mv-pt-20">
                <label
                  className="mobile-font-14-Nunito-600"
                  htmlFor={"pNumber"}
                >
                  Phone Number
                </label>
                <div className="augment-input-div">
                  <input
                    onChange={handleOnChangeNumber}
                    value={values.pNumber}
                    name="pNumber"
                    placeholder="Eg. Name"
                  />
                </div>
              </div>
            </div>
            {/* Personal Details Ends */}
            {/* Company Details */}
            <div className="contact-personal-details-div">
              <h5 className="mobile-font-16-Nunito-600 mobile-purple-green-gradient-text">
                Company Details
              </h5>
              <div className="mv-pt-20">
                <label className="mobile-font-14-Nunito-600" htmlFor={"cName"}>
                  Company Name
                </label>
                <div className="augment-input-div">
                  <input
                    onChange={handleOnChange}
                    value={values.cName}
                    name="cName"
                    placeholder="Eg. Name"
                  />
                </div>
              </div>
              <div className="mv-pt-20">
                <label className="mobile-font-14-Nunito-600" htmlFor={"city"}>
                  City
                </label>
                <div className="augment-input-div">
                  <input
                    onChange={handleOnChange}
                    value={values.city}
                    name="city"
                    placeholder="Eg. Name"
                  />
                </div>
              </div>{" "}
              <div className="mv-pt-20">
                <label
                  className="mobile-font-14-Nunito-600"
                  htmlFor={"purpose"}
                >
                  Purpose
                </label>
                {/* <div className="augment-input-div"> */}
                <Select
                  className="react-select-container mv-pt-20"
                  classNamePrefix="react-select-elements"
                  isSearchable={false}
                  value={values.purpose}
                  options={options}
                  onChange={(e) => handleChangePurpose(e)}
                />
                {/* </div> */}
              </div>
            </div>
            {/* Company Details Ends */}
            {/* Message */}
            <div className="contact-personal-details-div contact-personal-details-div--message">
              <h5 className="mobile-font-16-Nunito-600 mobile-purple-green-gradient-text">
                Message
              </h5>
              <div className="augment-input-div augment-input-div--textarea">
                <textarea
                  onChange={handleOnChange}
                  value={values.message}
                  name="message"
                  placeholder="Eg. Name"
                />
              </div>
              {/* Company Details Ends */}
            </div>
          </form>{" "}
          <div className="text-center">
            <button
              className="gradient-btn gradient-btn--contact"
              type="submit"
              onClick={handleSubmit}
            >
              Request Contact
            </button>
          </div>
        </div>
      </div>
      <MobileFooter />
    </>
  );
}
