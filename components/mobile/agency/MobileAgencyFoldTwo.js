// import React from "react";
// import { Fragment } from "react";

// const AugmentArray = [
//   {
//     name: "Sign up & Subscibe",
//     para: "Sign up with us and choose your plan",
//     money: "$600",
//   },
//   {
//     name: "Check Premium Projects",
//     para: "Multiple Premium Projects from global clients",
//     money: "$0",
//   },
//   {
//     name: "Discuss & Close Deal",
//     para: "There is a 10:1 ratio of project listings to agencies. The chances of you scoring the deal are good.",
//     money: "$0",
//   },
// ];
// export default function MobileAgencyFoldTwo() {
//   /*============================================

//               renderBlockOne

//   ==============================================*/
//   const renderBlockOne = () => {
//     return (
//       <div className="mv-pt-27">
//         {AugmentArray.map((data, key) => (
//           <Fragment key={key}>
//             <div className="mv-agency-how-it-work-card d-flex align-items-center flex-nowrap">
//               <div className="mv-agency-how-it-work-left-section">
//                 <span className="mobile-font-18-Nunito-800 color-white-17">
//                   0{key + 1}
//                 </span>
//               </div>
//               <div className="mv-agency-how-it-work-right-section">
//                 <h3 className="mobile-font-18-Nunito-600">{data.name}</h3>
//                 <p className="mobile-font-12-Nunito-300 color-white-72 mv-agency-how-it-work-right-para">
//                   {data.para}
//                 </p>
//               </div>
//               <div className="mv-agency-how-it-work-money-section">
//                 <span className="mobile-font-16-Nunito-600">{data.money}</span>
//               </div>
//             </div>
//           </Fragment>
//         ))}
//       </div>
//     );
//   };
//   /*===========================================

//                 return

//    ===========================================*/
//   return (
//     <div className="mv-pt-35">
//       <h2 className="mobile-Augment-with-text-title mobile-font-48-Nunito-900 color-white-17">
//         with{" "}
//         <span className="mobile-font-36-Nunito-600 mobile-purple-green-gradient-text">
//           Augment
//         </span>
//       </h2>
//       <p className="mv-pt-20 mobile-font-18-Nunito-600 mobile-Augment-with-text-para">
//         You can cut the cost AND steps in half saving both Time &amp; Money.
//       </p>
//       {renderBlockOne()}
//       <h4 className="mobile-font-24-Nunito-900 mv-pt-10 color-white-17">
//         Using the platform
//       </h4>
//       <p className="mobile-font-18-Nunito-600 mv-pt-10 color-white-93">
//         You will only see Professionally vetted project listings with
//         techonlogies you are looking for specifically saving your time and at a
//         subscription cost much less.
//       </p>
//     </div>
//   );
// }
