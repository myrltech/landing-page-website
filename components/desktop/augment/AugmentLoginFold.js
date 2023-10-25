// import React, { useState } from "react";
// import { Fragment } from "react";

// const profileArray = [
//   {
//     name: "Client",
//     icon: "/imgs/desktop/icons/white-profile-icon.svg",
//   },
//   {
//     name: "Agency (Dev Firm)",
//     icon: "/imgs/desktop/icons/white-3-profile-icon.svg",
//   },
// ];
// export default function AugmentLoginFold() {
//   const [values, setValues] = useState({
//     email: "",
//     pswd: "",
//     profile: "",
//   });

//   const [activeIndex, setActiveIndex] = useState(0);
//   /*==============================================================================================================

//                                                    handler

//       ===============================================================================================================*/
//   const handleOnChange = (e) => {
//     setValues({
//       ...values,
//       [e.target.name]: [e.target.value],
//     });
//   };
//   const handleOnClickProfile = (index, name) => {
//     setActiveIndex(index);
//     setValues({
//       ...values,
//       profile: name,
//     });
//     // console.log(values.profile);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(values);
//   };

//   /*=================================================
//                            renderForm
//     ==================================================*/
//   const renderForm = () => {
//     return (
//       <div className="pt-75 text-left ">
//         <div className="mobile-text-left mv-mt-20 mobile-augment-login-from-card">
//           <h5 className="font-14-NunitoSans-600 mobile-font-14-Nunito-600">
//             Choose Profile
//           </h5>
//           <div className="d-flex flex-nowrap align-items-end pt-20 mv-pt-20 justify-content-between">
//             {profileArray.map((data, key) => (
//               <Fragment key={key}>
//                 <div
//                   className={
//                     activeIndex === key
//                       ? "augment-client-card augment-client-card--active d-flex flex-nowrap align-items-center"
//                       : "augment-client-card d-flex flex-nowrap align-items-center"
//                   }
//                   onClick={() => handleOnClickProfile(key, data.name)}
//                 >
//                   <div className="augment-client-card-img-section">
//                     <img src={data.icon} alt={data.name} />
//                   </div>
//                   <span className="font-18-nunito-light mobile-font-12-Nunito-400">
//                     {data.name}
//                   </span>
//                 </div>
//               </Fragment>
//             ))}
//           </div>
//           {/*====================================================
//                              email address
//         ====================================================*/}
//           <div className="pt-40 mv-pt-20">
//             <label className="font-14-NunitoSans-600 mobile-font-14-Nunito-600 mb-14">
//               Email Address
//             </label>
//             <div className="augment-input-div">
//               <input
//                 type="email"
//                 value={values.email}
//                 name="email"
//                 onChange={handleOnChange}
//                 placeholder="name@mail.com"
//               />
//             </div>
//           </div>
//           {/*====================================================
//                             Password
//         ====================================================*/}
//           <div className="pt-40 mv-pt-20">
//             <label className="font-14-NunitoSans-600 mobile-font-14-Nunito-600 mb-14">
//               Password
//             </label>
//             <div className="augment-input-div">
//               <input
//                 type={"password"}
//                 value={values.pswd}
//                 name="pswd"
//                 onChange={handleOnChange}
//                 placeholder="************"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="text-center mv-pt-20 mt-50">
//           <button
//             className="agument-btn agument-btn--login gradient-btn"
//             onClick={handleSubmit}
//           >
//             Login
//           </button>
//         </div>
//       </div>
//     );
//   };
//   /*============================================================

//                              return

//   ============================================================*/
//   return (
//     <div className="text-center augment-login-form-section">
//       <img
//         src={
//           "/imgs/desktop/backgrounds-and-gradient/gradients/augment-gradient.svg"
//         }
//         alt="augment"
//         className="augment-icon"
//       />
//       <h2 className="font-36-NunitoSans-600  purple-green-gradient-text margin-auto mobile-font-36-Nunito-600 mobile-purple-green-gradient-text">
//         Augment.
//       </h2>
//       <h5 className="pt-10 font-24-NunitoSans-600 mobile-font-18-Nunito-600 mv-pt-10">
//         Login to Start{" "}
//       </h5>
//       {renderForm()}
//       <h5 className="font-14-NunitoSans-600 mv-pt-32 mobile-font-14-Nunito-600 pt-40">
//         Dont’t have an account yet?{" "}
//         <span className="mv-line-break d-md-none">
//           <br />
//         </span>
//         <span className="purple-green-gradient-text margin-auto mobile-purple-green-gradient-text ">
//           Get in touch with us
//         </span>
//       </h5>
//     </div>
//   );
// }
