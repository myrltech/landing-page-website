import React, { useState } from "react";

const ResourcesFoldTwo = () => {
  const [values, setValues] = useState("");

  /*==============================================================================================================
        
                                                   handler
                         
 ===============================================================================================================*/
  const handleOnChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <div className="resources-fold-two-section">
      <div className="resources-fold-two-card text-center">
        <h2 className="font-76-montserrat-800">Sign up for our Newsletter</h2>
        <div className="d-flex justify-content-center pt-40">
          <div className="myrl-input-outer-div myrl-input-outer-div--resoures myrl-input-outer-div--resoures--two d-flex flex-column">
            <div className="myrl-input-div">
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                onChange={handleOnChange}
                value={values.email}
                name={"email"}
              />
            </div>
            <div className="error-message"></div>
          </div>
          <button
            className="agument-btn agument-btn--resources"
            onClick={handleSubmit}
          >
            Get weekly updates
          </button>
        </div>
      </div>
      <div className="resources-fold-two-img-section">
        <img
          src="/imgs/desktop/resources/resorces-fold-three-img.png"
          alt="fold two img"
        />
      </div>
    </div>
  );
};

export default ResourcesFoldTwo;
