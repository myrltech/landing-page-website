// import React, { useState } from "react";
// import { Fragment } from "react";
// import Link from "next/link";

// const dummyData = [1, 2, 3];

// export default function AugmentRequirementCard({ index, listData }) {
//   const [isTaged, setIsTaged] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(null);
//   /*============================================================

//                              handler

//   ============================================================*/
//   const handleOnClickTagged = () => {
//     setIsTaged(!isTaged);
//     console.log(isTaged);
//     setActiveIndex(index);
//   };

//   const handleClickRequest = () => {
//     console.log("on click");
//   };

//   /*============================================================

//                              return

//   ============================================================*/
//   return (
//     <div className="augment-requirement-card">
//       {/* {console.log(listData)} */}
//       <div className="augment-requirement-card__row-one">
//         <div className="d-flex flex-nowrap align-items-start">
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
//           <h2
//             className="font-24-NunitoSans-600 augment-requirement-card__row-one-title"
//             // dangerouslySetInnerHTML={{ __html: listData.title }}
//           >
//             <span className="augment-requirement-card__row-one-title-hightlight-text">
//               {listData.title} required
//             </span>
//             {/* {title}
//             <span className="augment-requirement-card__row-one-title-hightlight-text"></span>{" "}
//             <span className="augment-requirement-card__row-one-title-hightlight-text"></span>*/}
//           </h2>
//         </div>
//         <div className="d-flex align-items-center pt-10 justify-content-between flex-nowrap w-100">
//           <div className="d-flex align-items-center flex-nowrap ">
//             <h4 className="font-16-NunitoSans-600 augment-requirement-card__text color-white-66">
//               <img
//                 src={"/imgs/desktop/icons/gray-work-icon.svg"}
//                 alt="tag"
//                 className="augment-requirement-card__work-icon"
//               />
//               {listData.time}
//             </h4>
//             <h4 className="augment-requirement-card__text font-16-NunitoSans-600 color-white-66">
//               <img
//                 src={"/imgs/desktop/icons/gray-location-icon.svg"}
//                 alt="tag"
//                 className="augment-requirement-card__location-icon"
//               />
//               {listData.remote}
//             </h4>
//             <h4 className="font-16-NunitoSans-600 augment-requirement-card__text color-white-66">
//               <img
//                 src={"/imgs/desktop/icons/gray-calendar-icon.svg"}
//                 alt="tag"
//                 className="augment-requirement-card__calendar-icon"
//               />
//               {listData.months} Months
//             </h4>
//             <h4 className="font-16-NunitoSans-600 augment-requirement-card__text augment-requirement-card__text2 color-white-66">
//               <img
//                 src={"/imgs/desktop/icons/gray-two-user-icon.svg"}
//                 alt="tag"
//                 className="augment-requirement-card__two-user-icon"
//               />
//               {listData.resources} Resources Required
//             </h4>
//             <h4 className="font-16-NunitoSans-600 augment-requirement-card__text color-white-66">
//               <img
//                 src={"/imgs/desktop/icons/gray-send-icon.svg"}
//                 alt="tag"
//                 className="augment-requirement-card__send-icon"
//               />
//               {listData.billing}
//             </h4>
//           </div>
//           <h2 className="font-32-NunitoSans-800 text-right">
//             {listData.resourcesHr} / Hr / Resource
//           </h2>
//         </div>
//       </div>
//       <div className="augment-requirement-card__row-two">
//         <p className="font-18-nunito-light">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat.
//         </p>
//         <div className="d-flex flex-nowrap justify-content-between align-items-center pt-20 w-100">
//           <div className="d-flex flex-nowrap align-items-center w-80">
//             <h5 className="font-14-NunitoSans-800 augment-requirement-card__row-two-key-skill-text">
//               Key Skills
//             </h5>
//             <div className="d-flex flex-wrap align-items-center w-80">
//               {listData.skill.map((data, index) => (
//                 <Fragment key={index}>
//                   <div className="augment-requirement-card__row-two-skill-name">
//                     <span className="font-18-NunitoSans-600">{data}</span>
//                   </div>
//                 </Fragment>
//               ))}
//             </div>
//           </div>
//           {/* <Link href="/augment-preview">
//             <a> */}
//           <div className="augment-requirement-card__row-two-btn text-center agument-btn">
//             View Details
//           </div>
//           {/* </a>
//           </Link> */}
//         </div>
//       </div>
//     </div>
//   );
// }
