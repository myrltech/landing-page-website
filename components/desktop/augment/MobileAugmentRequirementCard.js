// import Link from "next/link";
// import React, { useState } from "react";
// import { Fragment } from "react";

// const dummyData = [1, 2, 3, 4, 5];

// export default function MobileAugmentRequirementCard({ index, listData }) {
//   const [isTaged, setIsTaged] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(null);
//   /*============================================================

//                                handler

//     ============================================================*/
//   const handleOnClickTagged = () => {
//     setIsTaged(!isTaged);
//     console.log(isTaged);
//     setActiveIndex(index);
//   };

//   const handleClickRequest = () => {
//     console.log("on click");
//   };
//   /*============================================================

//                                return

//     ============================================================*/
//   return (
//     <div className="mobile-augment-requirement-card mobile-text-left">
//       <div className="mobile-augment-requirement-card__row-one">
//         <div className="mobile-augment-requirement-card-tag-btn">
//           {index === activeIndex ? (
//             <button
//               onClick={handleOnClickTagged}
//               className="augment-requirement-card__border-tag-icon-btn"
//             >
//               <img
//                 src={
//                   isTaged
//                     ? "/imgs/desktop/icons/white-tag-icon.svg"
//                     : "/imgs/desktop/icons/border-tag-icon.svg"
//                 }
//                 alt="tag"
//                 // className="augment-requirement-card__border-tag-icon"
//               />
//             </button>
//           ) : (
//             <button
//               onClick={handleOnClickTagged}
//               className="augment-requirement-card__border-tag-icon-btn"
//             >
//               <img
//                 src={
//                   isTaged
//                     ? "/imgs/desktop/icons/white-tag-icon.svg"
//                     : "/imgs/desktop/icons/border-tag-icon.svg"
//                 }
//                 alt="tag"
//                 // className="augment-requirement-card__border-tag-icon"
//               />
//             </button>
//           )}
//         </div>{" "}
//         <h2
//           className="mobile-font-18-Nunito-600 augment-requirement-card__row-one-title"
//           // dangerouslySetInnerHTML={{ __html: listData.title }}
//         >
//           {listData.title} required
//         </h2>
//       </div>
//       <div className="mobile-augment-requirement-card__row-two">
//         <div className="d-flex align-items-center flex-nowrap justify-content-between">
//           <h4 className="mobile-font-10-Nunito-600 mobile-augment-requirement-card__text color-white-66">
//             <img
//               src={"/imgs/desktop/icons/gray-work-icon.svg"}
//               alt="tag"
//               className="mobile-augment-requirement-card__work-icon"
//             />
//             {listData.time}{" "}
//           </h4>
//           <h4 className="mobile-augment-requirement-card__text mobile-font-10-Nunito-600 color-white-66">
//             <img
//               src={"/imgs/desktop/icons/gray-location-icon.svg"}
//               alt="tag"
//               className="mobile-augment-requirement-card__location-icon"
//             />
//             {listData.remote}
//           </h4>
//           <h4 className="mobile-font-10-Nunito-600 mobile-augment-requirement-card__text color-white-66">
//             <img
//               src={"/imgs/desktop/icons/gray-calendar-icon.svg"}
//               alt="tag"
//               className="mobile-augment-requirement-card__calendar-icon"
//             />
//             {listData.months} Months
//           </h4>
//         </div>
//         <div className="d-flex align-items-center flex-nowrap justify-content-between mv-pt-20">
//           <h4 className="mobile-font-10-Nunito-600 mobile-augment-requirement-card__text augment-requirement-card__text2 color-white-66">
//             <img
//               src={"/imgs/desktop/icons/gray-two-user-icon.svg"}
//               alt="tag"
//               className="mobile-augment-requirement-card__two-user-icon"
//             />
//             {listData.resources} Resources Required
//           </h4>
//           <h4 className="mobile-font-10-Nunito-600 augment-requirement-card__text color-white-66">
//             <img
//               src={"/imgs/desktop/icons/gray-send-icon.svg"}
//               alt="tag"
//               className="mobile-augment-requirement-card__send-icon"
//             />
//             {listData.billing}
//           </h4>
//         </div>
//         <p className="mobile-font-12-Nunito-300 mv-pt-20">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat.
//         </p>
//         <div className="d-flex flex-wrap  align-items-center mv-pt-20 mv-pb-20 w-100">
//           <h5 className="mobile-font-10-Nunito-800 mobile-augment-requirement-card__row-two-key-skill-text">
//             Key Skills
//           </h5>
//           {listData.skill.map((data, index) => (
//             <Fragment key={index}>
//               <div className="mobile-augment-requirement-card__row-two-skill-name">
//                 <span className="mobile-font-10-Nunito-700">{data}</span>
//               </div>
//             </Fragment>
//           ))}
//         </div>
//         <div className="d-flex align-items-center justify-content-between flex-nowrap mobile-augment-requirement-card__row-bottom">
//           <h2 className="mobile-font-14-Nunito-700 text-right">
//             {listData.resourcesHr} / Hr /<br /> Resource
//           </h2>
//           {/* <Link href="/augment-preview">
//             <a> */}
//           <div
//             className="mobile-augment-requirement-card__row-two-btn gradient-btn mobile-text-center"
//             // onClick={handleClickRequest}
//           >
//             {/* Request Contact
//              */}
//             View Details
//           </div>
//           {/* </a>
//           </Link> */}
//         </div>
//       </div>
//     </div>
//   );
// }
