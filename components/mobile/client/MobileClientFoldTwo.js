// import React, { useState } from "react";

// export default function MobileClientFoldTwo() {
//   const [values, setValues] = useState({
//     fName: "",
//     email: "",
//     pNumber: "",
//     cName: "",
//   });

//   /*==============================================================================================================

//                                                        handler

//    ===============================================================================================================*/
//   const handleOnChange = (e) => {
//     setValues({
//       ...values,
//       [e.target.name]: [e.target.value],
//     });
//   };

//   const handleOnChangeNumber = (e) => {
//     setValues({
//       ...values,
//       // [e.target.name]: [e.target.value],
//       [e.target.name]: e.target.validity.valid ? e.target.value : "",
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(values);
//   };

//   /*==============================================================================================================

//                                           return

//    ===============================================================================================================*/
//   return (
//     <div className="mv-client-interested-div">
//       <div className="mv-client-interested-title-div">
//         <h4 className="mv-client-interested-text">Interested?</h4>
//         <h3 className="mobile-font-36-Nunito-600">Get in touch with us</h3>
//       </div>{" "}
//       <div className="mv-agency-form-card mv-agency-form-card--client">
//         <div className="mv-agency-form-card-title-div">
//           <h5 className="mobile-font-16-Nunito-600  mobile-purple-green-gradient-text">
//             Enter your details
//           </h5>
//         </div>
//         {/*=================================================================

//                                     form

//           ================================================================*/}
//         <form noValidate onSubmit={handleSubmit}>
//           {/** Full Name */}
//           <div className="mv-pt-25">
//             <label className="mobile-font-14-Nunito-600">Full Name</label>
//             <div className="augment-input-div">
//               <input
//                 value={values.fName}
//                 name="fName"
//                 onChange={handleOnChange}
//                 placeholder="Eg. Name"
//               />
//             </div>
//           </div>

//           {/** Email Address */}
//           <div className="mv-pt-25">
//             <label className="mobile-font-14-Nunito-600">Email Address</label>
//             <div className="augment-input-div">
//               <input
//                 value={values.email}
//                 name="email"
//                 onChange={handleOnChange}
//                 placeholder="Eg. Name"
//                 type="email"
//               />
//             </div>
//           </div>

//           {/** Phone Number */}
//           <div className="mv-pt-25">
//             <label className="mobile-font-14-Nunito-600">Phone Number</label>
//             <div className="augment-input-div">
//               <input
//                 value={values.pNumber}
//                 name="pNumber"
//                 onChange={handleOnChangeNumber}
//                 placeholder="Eg. Name"
//                 type="number"
//               />
//             </div>
//           </div>
//           {/** Company Name */}
//           <div className="mv-pt-25">
//             <label className="mobile-font-14-Nunito-600">Company Name</label>
//             <div className="augment-input-div">
//               <input
//                 value={values.cName}
//                 name="cName"
//                 onChange={handleOnChange}
//                 placeholder="Eg. Name"
//                 type="number"
//               />
//             </div>
//           </div>
//         </form>
//         <div className="mobile-text-center">
//           <button
//             onClick={handleSubmit}
//             className="gradient-btn gradient-btn--agency-form"
//           >
//             Request Contact
//           </button>
//         </div>{" "}
//       </div>
//     </div>
//   );
// }
