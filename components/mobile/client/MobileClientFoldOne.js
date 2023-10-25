// import React from "react";
// import { Fragment } from "react";

// /*===========================================

//                 array

//    ===========================================*/
// const howArray = [
//   {
//     title: "Using References",
//     para: "Finding companies through references is not scalable, not when you have burgeoning requirements with extremely fast growing products.",
//   },
//   {
//     title: "Using Existing Vendors",
//     para: "Your existing vendors may not always have new technologies capability to help you dominate the challenging technological landscape.",
//   },
//   {
//     title: "Seaching Online",
//     para: "Don’t have new technologies to help you dominate the challenging technological landscape",
//   },
// ];

// const agumntArray = [
//   {
//     title: "Saving Costs",
//     para: "Connect with not just the best teams but also the most cost efficient teams. Save on long-term recurring costs. ",
//   },
//   {
//     title: "Ease of Scaling",
//     para: "Connect with not just the best teams but also the most cost efficient teams. Save on long-term recurring costs. ",
//   },
//   {
//     title: "Rewarding",
//     para: "Get featured on top of tech partners’ feeds - all you have to do is post high-quality requirements often and our algorithm will prioritize your listings more often.",
//   },
//   {
//     title: "Completely Free",
//     para: "Our platform is a 100% free for clients looking to expand their tech teams.",
//   },
// ];
// export default function MobileClientFoldOne() {
//   /*========================================

//                 renderBlockOne

//   =========================================*/
//   const renderBlockOne = () => {
//     return (
//       <>
//         <div className="mv-client-how-section-div">
//           {howArray.map((data, index) => (
//             <Fragment key={index}>
//               <div className="client-how-it-card">
//                 <div className="d-flex flex-nowrap align-items-center client-how-it-card--top-row">
//                   <h4 className="mobile-font-18-Nunito-800 color-white-17 mv-pr-12">
//                     0{index + 1}
//                   </h4>
//                   <h3 className="mobile-font-24-Nunito-600 mobile-purple-green-gradient-text">
//                     {data.title}
//                   </h3>
//                 </div>
//                 <p className="mobile-font-14-Nunito-600 mv-pt-10 client-how-it-card--para">
//                   {data.para}
//                 </p>
//               </div>
//             </Fragment>
//           ))}
//         </div>{" "}
//       </>
//     );
//   };

//   /*===========================================

//                 renderBlockTwo

//    ===========================================*/
//   const renderBlockTwo = () => {
//     return (
//       <>
//         <div className="mv-client-benefit-of-augmnt-section">
//           <h2 className="mobile-font-48-Nunito-900 color-white-17 client-benefit-text">
//             And the benefits of using{" "}
//             <span className="mobile-font-36-Nunito-600 mobile-purple-green-gradient-text">
//               Augmnt
//             </span>
//           </h2>
//           <p className="mv-pt-32 mobile-font-18-Nunito-600 color-white-93">
//             Using this journey Comes up to $1k approx every month which is not
//             sustainable
//           </p>
//           <div>
//             {agumntArray.map((data, index) => (
//               <Fragment key={index}>
//                 <div
//                   className={
//                     index % 2 === 0
//                       ? "mv-pt-25 mobile-text-right"
//                       : "mv-pt-25 mobile-text-left"
//                   }
//                 >
//                   <h3 className="mobile-font-36-Nunito-900 color-white-17">
//                     0{index + 1}
//                   </h3>
//                   <div
//                     className={
//                       index % 2 === 0
//                         ? "d-flex justify-content-end"
//                         : "d-flex justify-content-start"
//                     }
//                   >
//                     <h4 className="mobile-font-24-Nunito-700 client-benefit-augmnt-title mobile-purple-green-gradient-text">
//                       {data.title}
//                     </h4>
//                   </div>
//                   <p className="mobile-font-14-Nunito-400 mv-pt-10">
//                     {data.para}
//                   </p>
//                 </div>
//               </Fragment>
//             ))}
//           </div>
//         </div>{" "}
//       </>
//     );
//   };

//   /*===========================================

//                   return

//    ===========================================*/
//   return (
//     <div>
//       <div className="mv-client-title-para-div">
//         <h1 className="mobile-font-48-Nunito-700 mobile-purple-green-gradient-text">
//           Augment.
//         </h1>
//         <p className="mobile-font-18-Nunito-300 mv-pt-10">
//           A place with best
//           <span className="mobile-font-18-Nunito-700"> Tech Teams </span> for
//           your requirements with
//           <span className="mobile-font-18-Nunito-700">
//             {" "}
//             Experience and Credibility
//           </span>
//         </p>
//       </div>
//       <div className="mobile-text-center mv-pt-40">
//         <button className="gradient-btn">Get Started</button>
//       </div>
//       <p className="mobile-font-24-Nunito-600 mv-pt-74 mobile-text-center mv-client-para-div">
//         {" "}
//         <span className="mobile-purple-green-gradient-text"> Augmnt </span>
//         is the smarter way to <br />
//         find great tech partner agencies.
//       </p>
//       <div className="mv-client-here-title-para-div">
//         <h3 className="mobile-font-48-Nunito-900 mv-pt-74 color-white-17">
//           Here’s how
//         </h3>
//         <p className="mv-pt-15 mobile-font-16-Nunito-600">
//           you currently find competent companies &amp; <br /> WHY{" "}
//           <span className="mobile-purple-green-gradient-text">Augmnt </span> is
//           better
//         </p>
//       </div>
//       {renderBlockOne()}
//       {renderBlockTwo()}
//     </div>
//   );
// }
