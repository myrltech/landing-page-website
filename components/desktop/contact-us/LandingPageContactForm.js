import React, { useState } from "react";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const options = [
  { value: "Become a  Client Partner", label: "Become a  Client Partner" },
  { value: "Become an Agency Partner", label: "Become an Agency Partner" },
  { value: "Other", label: "Other" },
];

export default function LandingPageContactForm() {
  const [values, setValues] = useState({
    fullName: "",
    city: "",
    email: "",
    purpose: "",
    pNumber: "",
    cName: "",
    message: "",
    cCode: "+1",
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
  const handleOnChangeCountryCode = (code) => {
    setValues({
      ...values,
      cCode: code,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <>
      <div className=" contact-us-form-section">
        <h2 className="text-center font-36-NunitoSans-600 purple-green-gradient-text margin-auto">
          Get in Touch
        </h2>
        <p className="text-center font-24-NunitoSans-600 mt-50">
          Enter these details and we will get back to you soon!
        </p>
        <div className="d-flex flex-nowrap pt-90 align-items-start justify-content-between">
          {/*===================================================
                               fullName
            ===================================================*/}
          <div className="myrl-input-outer-div d-flex flex-column">
            <label htmlFor="fullName" className="font-24-NunitoSans-600">
              Full name
            </label>
            <div className="myrl-input-div">
              <input
                id="fullName"
                placeholder="Jason Smith"
                onChange={handleOnChange}
                value={values.fullName}
                name={"fullName"}
              />
            </div>
            <div className="error-message"></div>
          </div>
          {/*===================================================
                               city
            ===================================================*/}
          <div className="myrl-input-outer-div d-flex flex-column">
            <label htmlFor="city" className="font-24-NunitoSans-600">
              City
            </label>
            <div className="myrl-input-div">
              <input
                id="city"
                placeholder="Eg. Mumbai"
                onChange={handleOnChange}
                value={values.city}
                name={"city"}
              />
            </div>
            <div className="error-message"></div>
          </div>{" "}
        </div>

        <div className="d-flex flex-nowrap pt-35 align-items-start justify-content-between">
          {/*===================================================
                               Email 
            ===================================================*/}
          <div className="myrl-input-outer-div d-flex flex-column">
            <label htmlFor="email" className="font-24-NunitoSans-600">
              Email
            </label>
            <div className="myrl-input-div">
              <input
                id="email"
                type="email"
                placeholder="mail@mail.com"
                onChange={handleOnChange}
                value={values.email}
                name={"email"}
              />
            </div>
            <div className="error-message"></div>
          </div>
          {/*===================================================
                               Purpose
            ===================================================*/}
          {/* <div className="myrl-input-outer-div d-flex flex-column">
            <h4 className="mb-23 font-24-NunitoSans-600">Purpose</h4>
            <div className="myrl-select-div">
              <Select
                // id="purpose"
                className="react-select-container"
                classNamePrefix="react-select-elements"
                value={values.purpose}
                onChange={handleChangePurpose}
                options={options}
              />
            </div>
            <div className="error-message"></div>
          </div> */}
          <div className="myrl-input-outer-div">
            <label htmlFor="purpose" className="font-24-NunitoSans-600">
              Purpose
            </label>
            <Select
              className="react-select-container"
              classNamePrefix="react-select-elements"
              isSearchable={false}
              value={values.purpose}
              options={options}
              onChange={(e) => handleChangePurpose(e)}
            />
          </div>
        </div>

        <div className="d-flex flex-nowrap pt-35 align-items-start justify-content-between">
          {/*===================================================
                               Email 
            ===================================================*/}
          <div className="myrl-input-outer-div d-flex flex-column">
            <label className="mb-23 font-24-NunitoSans-600" htmlFor={"cCode"}>
              Phone Number
            </label>
            <div className="conatct-us-after-div d-flex flex-column">
              <div className="d-flex myrl-input-country-code-pnumber-div w-100 flex-nowrap">
                <div className="myrl-input-country-code-div">
                  <PhoneInput
                    id="pNumber"
                    country={"us"}
                    value={values.cCode}
                    onChange={handleOnChangeCountryCode}
                  />
                </div>
                <div className="myrl-input-phone-number-div">
                  <input
                    id="pNumber"
                    type="text"
                    pattern="[0-9]*"
                    placeholder="XXXXXXXXX"
                    onChange={handleOnChangeNumber}
                    value={values.pNumber}
                    name={"pNumber"}
                  />
                </div>
              </div>
            </div>
          </div>
          {/*===================================================
                               Company Name
            ===================================================*/}
          <div className="myrl-input-outer-div d-flex flex-column">
            <label htmlFor="cName" className="font-24-NunitoSans-600">
              Company Name
            </label>
            <div className="myrl-input-div">
              <input
                id="cName"
                type={"text"}
                placeholder="Company name"
                onChange={handleOnChange}
                value={values.cName}
                name={"cName"}
              />
            </div>
            <div className="error-message"></div>
          </div>
        </div>
        {/*===================================================
                              Message
            ===================================================*/}
        <div className="myrl-input-outer-div pt-44 myrl-input-outer-div--textarea d-flex flex-column">
          <label htmlFor="message" className="font-24-NunitoSans-600">
            Message
          </label>
          <div className="myrl-input-div myrl-input-div--textarea">
            <textarea
              id="message"
              type={"text"}
              //   placeholder="Company name"
              onChange={handleOnChange}
              value={values.message}
              name={"message"}
            />
          </div>
          <div className="error-message"></div>
        </div>
        <div className="text-center">
          <button
            className="agument-btn agument-btn--contact-us"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      </div>{" "}
    </>
  );
}
