// import Link from "next/link";
// import React from "react";
// import { Fragment } from "react";

// /*===========================================

//             array

//  ===========================================*/
// const howItArray = [
//   {
//     name: "Prospecting",
//     para: "Finding Leads through multiple channels and references.",
//     money: "$800",
//   },
//   {
//     name: "Verification",
//     para: "Checking if those leads scoured are valid and are opportunate.",
//     money: "$100",
//   },
//   {
//     name: "Outreach Automation",
//     para: "Establishing a connection with scheduled mailers.",
//     money: "$100",
//   },
//   {
//     name: "Discussion",
//     para: "Discussing the details of the possible project and ironing out the details.",
//     money: "$100",
//   },
//   {
//     name: "Deal Closing",
//     para: "Finalising the deal with the client and starting the work.",
//     money: "$100",
//   },
// ];
// export default function MobileAgencyFoldOne() {
//   /*===========================================

//                   renderBlockOne

//    ===========================================*/
//   const renderBlockOne = () => {
//     return (
//       <div className="mv-pt-47">
//         <h3 className="mobile-font-16-Nunito-600 mobile-text-right">
//           <span className="mobile-font-48-Nunito-900 color-white-17">
//             How?{" "}
//           </span>
//           Without{" "}
//           <span className="mobile-purple-green-gradient-text">Augment</span>{" "}
//           here is the normal business acquisition journey
//         </h3>
//         <div className="mv-agency-how-it-work-outer-div">
//           {howItArray.map((data, key) => (
//             <Fragment key={key}>
//               <div className="mv-agency-how-it-work-card d-flex align-items-center flex-nowrap">
//                 <div className="mv-agency-how-it-work-left-section">
//                   <span className="mobile-font-18-Nunito-800 color-white-17">
//                     0{key + 1}
//                   </span>
//                 </div>
//                 <div className="mv-agency-how-it-work-right-section">
//                   <h3 className="mobile-font-18-Nunito-600">{data.name}</h3>
//                   <p className="mobile-font-12-Nunito-300 color-white-72 mv-agency-how-it-work-right-para">
//                     {data.para}
//                   </p>
//                 </div>
//                 <div className="mv-agency-how-it-work-money-section">
//                   <span className="mobile-font-16-Nunito-600">
//                     {data.money}
//                   </span>
//                 </div>
//               </div>
//             </Fragment>
//           ))}
//         </div>
//         <h3 className="mobile-font-24-Nunito-900 mv-pt-20 color-white-17">
//           The cost to company
//         </h3>
//         <p className="mobile-font-18-Nunito-600 mv-pt-10">
//           Using this journey Comes up to $1k approx every month which is not
//           sustainable
//         </p>
//       </div>
//     );
//   };

//   /*===========================================

//                   return

//    ===========================================*/
//   return (
//     <>
//       <h2 className="mobile-font-48-Nunito-700 mobile-purple-green-gradient-text">
//         Augment.
//       </h2>
//       <p className="mobile-font-18-Nunito-300 mv-pt-10">
//         A place where you can find{" "}
//         <span className="mobile-font-18-Nunito-700">
//           {" "}
//           premium
//           <br /> project listings{" "}
//         </span>
//         for you and your team at <br />
//         your fingerprints{" "}
//       </p>
//       <div className="d-flex mv-pt-35 justify-content-center">
//         <Link href="/augment">
//           <a>
//             <div className=" mobile-text-center gradient-btn gradient-btn--agency">
//               Try it
//             </div>
//           </a>
//         </Link>
//       </div>
//       <p className="mv-pt-74 mobile-font-24-Nunito-600">
//         <span className="mobile-purple-green-gradient-text"> Augment </span>is
//         the smarter way to grow your agency business.
//       </p>
//       {renderBlockOne()}
//     </>
//   );
// }
