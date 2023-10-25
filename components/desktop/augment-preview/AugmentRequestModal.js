// import React, { useState } from "react";
// import Modal from "react-responsive-modal";

// export default function AugmentRequestModal() {
//   const [values, setValues] = useState({
//     open: false,
//     name: "",
//     email: "",
//     pNumber: "",
//     cName: "",
//   });

//   const onOpenModal = () => {
//     setValues({
//       ...values,
//       open: true,
//     });
//   };

//   const onCloseModal = () => {
//     setValues({
//       open: false,
//     });
//   };

//   /*==============================================================================================================

//                                                    handler

//       ===============================================================================================================*/

//   const handleChangeNumber = (e) => {
//     setValues({
//       ...values,
//       [e.target.name]: e.target.validity.valid ? e.target.value : "",
//     });
//   };

//   const handleOnChange = (e) => {
//     setValues({
//       ...values,
//       [e.target.name]: e.target.value,
//     });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(values);
//   };

//   return (
//     <>
//       <button className="agument-btn gradient-btn" onClick={onOpenModal}>
//         Request Contact
//       </button>
//       <Modal
//         open={values.open}
//         onClose={onCloseModal}
//         closeOnEsc={true}
//         closeOnOverlayClick={false}
//         center
//         classNames={{
//           overlay: "customOverlay",
//           modal: "customModal customModal--contactDetails",
//           closeButton: "customCloseButton",
//         }}
//       >
//         <span className="closeIconInModal" onClick={onCloseModal} />
//         <h2 className="mobile-ag-font-36-Nunito-600 font-36-NunitoSans-600">
//           Enter Details
//         </h2>
//         <div className="custom-d-flex pt-50 ag-mt-50">
//           <div className="col-sm-12 col-md-6">
//             {/*===================================================
//                                fullName
//             ===================================================*/}
//             <div className="myrl-input-modal-outer-div d-flex flex-column">
//               <label
//                 htmlFor="name"
//                 className="font-24-NunitoSans-600 mobile-font-14-Nunito-600"
//               >
//                 Full name
//               </label>
//               <div className="myrl-input-div-modal">
//                 <input
//                   id="name"
//                   placeholder="Jason Smith"
//                   onChange={handleOnChange}
//                   value={values.name}
//                   name={"name"}
//                 />
//               </div>
//               <div className="error-message"></div>
//             </div>
//             {/*===================================================
//                                phone number
//             ===================================================*/}
//             <div className="myrl-input-modal-outer-div d-flex flex-column mt-50 ag-mt-50">
//               <label
//                 htmlFor="pNumber"
//                 className="font-24-NunitoSans-600 mobile-font-14-Nunito-600"
//               >
//                 Phone Number
//               </label>
//               <div className="myrl-input-div-modal">
//                 <input
//                   id="pNumber"
//                   placeholder="Jason Smith"
//                   onChange={handleChangeNumber}
//                   value={values.pNumber}
//                   name={"pNumber"}
//                   type={"number"}
//                 />
//               </div>
//               <div className="error-message"></div>
//             </div>
//           </div>
//           <div className="col-sm-12 col-md-6">
//             {/*===================================================
//                                email
//             ===================================================*/}
//             <div className="myrl-input-modal-outer-div d-flex ag-mt-50 flex-column">
//               <label
//                 htmlFor="email"
//                 className="font-24-NunitoSans-600 mobile-font-14-Nunito-600"
//               >
//                 Email
//               </label>
//               <div className="myrl-input-div-modal">
//                 <input
//                   id="email"
//                   type={"email"}
//                   placeholder="Jason Smith"
//                   onChange={handleOnChange}
//                   value={values.email}
//                   name={"email"}
//                 />
//               </div>
//               <div className="error-message"></div>
//             </div>
//             {/*===================================================
//                                company name
//             ===================================================*/}
//             <div className="myrl-input-modal-outer-div d-flex flex-column ag-mt-50 mt-50">
//               <label
//                 htmlFor="cName"
//                 className="font-24-NunitoSans-600 mobile-font-14-Nunito-600"
//               >
//                 Company Name
//               </label>
//               <div className="myrl-input-div-modal">
//                 <input
//                   id="cName"
//                   placeholder="Jason Smith"
//                   onChange={handleOnChange}
//                   value={values.cName}
//                   name={"cName"}
//                 />
//               </div>
//               <div className="error-message"></div>
//             </div>
//           </div>
//         </div>
//         <div className="text-center pt-50 ag-mt-50">
//           <button onClick={handleSubmit} className="gradient-btn agument-btn">
//             Submit
//           </button>
//         </div>
//       </Modal>
//     </>
//   );
// }
