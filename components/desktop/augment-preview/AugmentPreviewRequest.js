// import Link from "next/link";
// import React from "react";
// import { Fragment } from "react";
// import AugmentRequestModal from "./AugmentRequestModal";

// const dummyData = [1, 2, 3, 4, 5, 6];

// export default function AugmentPreviewRequest() {
//   return (
//     <>
//       <div className="augment-preview-section">
//         <Link href="/augment">
//           <a>
//             <img
//               src={"/imgs/desktop/icons/white-left-arrow.svg"}
//               alt=""
//               className="ag-preview-back-arrow-img"
//             />
//           </a>
//         </Link>
//         <div className="custom-d-flex flex-nowrap justify-content-between align-items-center augment-preview-title-div">
//           <div className="col-12 col-md-10">
//             <h5 className="font-24-NunitoSans-600 mobile-ag-font-24-Nunito-600 augment-preview-we-are-looking">
//               We are looking for
//             </h5>
//             <h2 className="font-48-NunitoSans-600 mobile-ag-font-48-Nunito-600 pt-25 ag-pt-25">
//               3 MERN Stack Developers
//             </h2>
//             <div className="custom-d-flex mt-50 ag-mt-50 align-items-center flex-nowrap">
//               <div className="d-flex flex-wrap align-items-center">
//                 <p className="font-16-NunitoSans-600  mobile-ag-font-16-Nunito-600 mt-common-card__text-and-icon">
//                   <img src="/imgs/desktop/icons/gray-work-icon.svg" alt="" />
//                   Time &amp; Material
//                 </p>
//                 <p className="font-16-NunitoSans-600 mobile-ag-font-16-Nunito-600 mt-common-card__text-and-icon">
//                   <img
//                     src="/imgs/desktop/icons/gray-location-icon.svg"
//                     alt=""
//                   />
//                   Remote
//                 </p>
//                 <p className="font-16-NunitoSans-600 mobile-ag-font-16-Nunito-600 mt-common-card__text-and-icon">
//                   <img
//                     src="/imgs/desktop/icons/gray-calendar-icon.svg"
//                     alt=""
//                   />
//                   3 Months
//                 </p>
//                 <p className="font-16-NunitoSans-600 mobile-ag-font-16-Nunito-600 mt-common-card__text-and-icon">
//                   <img
//                     src="/imgs/desktop/icons/gray-two-user-icon.svg"
//                     alt=""
//                   />
//                   3 Resources Required
//                 </p>
//                 <p className="font-16-NunitoSans-600 mobile-ag-font-16-Nunito-600 mt-common-card__text-and-icon">
//                   <img src="/imgs/desktop/icons/gray-send-icon.svg" alt="" />
//                   Monthly Billing
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col-12 col-md-2 text-md-right">
//             <h5 className="augment-preview-resource-text">
//               24{" "}
//               <span className="font-48-NunitoSans-600 mobile-ag-font-48-Nunito-600">
//                 {" "}
//                 $ / Hr <br className="mv-opacity-0" />
//                 /Resource
//               </span>
//             </h5>
//           </div>
//         </div>
//         <div className="custom-d-flex flex-nowrap augment-preview-middle-div">
//           <div className="col-12 col-md-6 augment-preview-middle-left-div">
//             <div>
//               <h3 className="font-24-NunitoSans-600 mobile-ag-font-24-Nunito-600">
//                 Description
//               </h3>
//               <p className="font-18-nunito-light mobile-ag-font-18-Nunito-300 color-white-66 pt-35 ag-pt-35">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
//                 nisi ut aliquip ex ea commodo consequat.
//               </p>
//               <p className="font-18-nunito-light mobile-ag-font-18-Nunito-300 color-white-66 pt-20 ag-pt-20">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
//                 nisi ut aliquip ex ea commodo consequat.
//               </p>
//               <p className="font-18-nunito-light mobile-ag-font-18-Nunito-300 color-white-66 pt-20 ag-pt-20">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
//                 nisi ut aliquip ex ea commodo consequat.
//               </p>
//             </div>
//             <div>
//               <h3 className="font-24-NunitoSans-600  mobile-ag-font-24-Nunito-600 pt-25 ag-pt-25">
//                 Expectations from Resources
//               </h3>
//               <p className="font-18-nunito-light mobile-ag-font-18-Nunito-300 color-white-66 pt-20 ag-pt-20">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
//                 nisi ut aliquip ex ea commodo consequat.
//               </p>
//             </div>
//           </div>
//           <div className="col-12 col-md-6 augment-preview-middle-right-div mv-pt-20">
//             <div>
//               <h3 className="font-24-NunitoSans-600 mobile-ag-font-24-Nunito-600">
//                 Required Skills
//               </h3>
//               <div className="d-flex flex-wrap align-items-start pt-35 ag-pt-35">
//                 {dummyData.map((data, index) => (
//                   <Fragment key={index}>
//                     <div className="font-18-nunito-semibold mobile-ag-font-18-Nunito-600 augment-preview-tg">
//                       <span>Skill Name</span>
//                     </div>
//                   </Fragment>
//                 ))}
//               </div>
//             </div>
//             <div>
//               <h3 className="font-24-NunitoSans-600 mobile-ag-font-24-Nunito-600 mt-50 ag-mt-50">
//                 Minimum Years of Experience
//               </h3>
//               <h5 className="font-18-nunito-light mobile-ag-font-18-Nunito-300 color-white-66 pt-25 ag-pt-25">
//                 3 Years
//               </h5>
//             </div>
//             <div className="mt-50 ag-mt-50">
//               <h3 className="font-24-NunitoSans-600 mobile-ag-font-24-Nunito-600">
//                 Minimum Education Level
//               </h3>
//               <h5 className="font-18-nunito-light mobile-ag-font-18-Nunito-300 color-white-66 pt-20 ag-pt-20">
//                 Graduate
//               </h5>
//             </div>
//             <div className="mt-50 ag-mt-50">
//               <h3 className="font-24-NunitoSans-600 mobile-ag-font-24-Nunito-600">
//                 Urgency
//               </h3>
//               <h5 className="font-18-nunito-light mobile-ag-font-18-Nunito-300 pt-20 ag-pt-20 color-white-66">
//                 This Week
//               </h5>
//             </div>
//           </div>
//         </div>
//         <div className="augment-preview-bottom-div">
//           <h3 className="font-24-NunitoSans-600 mobile-ag-font-24-Nunito-600">
//             About the Employer
//           </h3>
//           <div className="custom-d-flex justify-content-between pt-35 ag-pt-35 align-items-center flex-nowrap">
//             <div className="d-flex align-items-start flex-nowrap mb-23 ag-mb-23">
//               <div className="augment-preview-profile-img flex-shrink-0"></div>
//               <div>
//                 <h4 className="font-36-nunito-semibold mobile-ag-font-36-Nunito-600">
//                   Honda
//                 </h4>
//                 <div className="custom-d-flex align-items-center pt-25 ag-pt-25 flex-nowrap">
//                   <h4 className="font-16-NunitoSans-600 ag-mb-23 mobile-ag-font-16-Nunito-600 augment-preview-client-mail-text color-white-66 custom-d-flex flex-nowrap pr-25 ag-pr-25 align-items-center">
//                     <img
//                       src={"/imgs/desktop/icons/gray-profile-icon.svg"}
//                       alt=""
//                       className="augment-preview-profile-icon"
//                     />
//                     Rajesh Chopra
//                   </h4>
//                   <h4 className="font-16-NunitoSans-600 ag-mb-23  mobile-ag-font-16-Nunito-600 augment-preview-client-mail-text color-white-66 custom-d-flex flex-nowrap pr-25 ag-pr-25 align-items-center">
//                     <img
//                       src={"/imgs/desktop/icons/gray-message-icon.svg"}
//                       alt=""
//                       className="augment-preview-message-icon"
//                     />
//                     Rajes@mail.com
//                   </h4>
//                   <h4 className="font-16-NunitoSans-600 color-white-66 mobile-ag-font-16-Nunito-600 custom-d-flex flex-nowrap pr-25 ag-pr-25 align-items-center">
//                     <img
//                       src={"/imgs/desktop/icons/gray-phone-icon.svg"}
//                       alt=""
//                       className="augment-preview-call-icon"
//                     />
//                     +91-1431231345
//                   </h4>
//                 </div>
//               </div>
//             </div>
//             <div className="text-right mobile-text-center">
//               <h5 className="font-18-nunito-light mobile-ag-font-18-Nunito-300 color-white-66 mb-23 ag-mb-23 mv-posted-text">
//                 Posted on 12/4/19
//               </h5>
//               <AugmentRequestModal />
//               {/* <button className="agument-btn gradient-btn">
//                 Request Contact
//               </button> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
