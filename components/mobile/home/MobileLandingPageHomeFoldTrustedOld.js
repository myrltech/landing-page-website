// import React, { Fragment, useCallback, useRef } from "react";
// import {
//   trustedCompaniesArrayOne,
//   trustedCompaniesArrayThree,
//   trustedCompaniesArrayTwo,
// } from "../../desktop/home/trustedCompanies";
// import ScrollContainer from "react-indiana-drag-scroll";

// export default function MobileLandingPageHomeFoldTrustedOld() {
//   const ref = useRef();

//   const setRef = useCallback((node) => {
//     /*===============================
//            for end div
//   ================================*/
//     if (node) {
//       node.scrollLeft = 1000;
//     }
//     ref.current = node;

//     /*===============================
//            horizontal scroll
//   ================================*/
//     const el = ref.current;
//     if (el) {
//       const onWheel = (e) => {
//         if (e.deltaY == 0) return;
//         e.preventDefault();
//         el.scrollTo({
//           left: el.scrollLeft + e.deltaY,
//           behavior: "smooth",
//         });
//       };
//       el.addEventListener("wheel", onWheel);
//       return () => el.removeEventListener("wheel", onWheel);
//     }
//   }, []);

//   /*====================================================

//                            return

//     ===================================================*/
//   return (
//     <div className="mobile-trusted-title-icon-div">
//       <h2 className="text-left mobile-font-32-Nunito-700">
//         Trusted by
//         <br />
//         <span className="title-line title-line--truted1"> the top coveted</span>
//         <br />{" "}
//         <span className="title-line title-line--truted2"> companies</span>
//       </h2>
//       <ScrollContainer
//         className="mv-pt-47 home-tursted-outer-div"
//         horizontal={true}
//         vertical={false}
//         innerRef={setRef}
//       >
//         <div className="home-tursted-inner-div">
//           <div className="d-flex flex-wrap">
//             {trustedCompaniesArrayOne.map((data, index) => (
//               <Fragment key={index}>
//                 <div className="d-flex flex-nowrap">
//                   <div className="trusted-company-card">
//                     <img
//                       src={data.imgPath}
//                       alt="trusted comoany"
//                       className={data.imgClass}
//                     />
//                   </div>
//                   <div className="trusted-company-invisible-card"></div>
//                 </div>
//               </Fragment>
//             ))}
//           </div>

//           <div className="d-flex flex-wrap">
//             {trustedCompaniesArrayTwo.map((data, index) => (
//               <Fragment key={index}>
//                 <div className="d-flex flex-nowrap">
//                   <div className="trusted-company-invisible-card"></div>
//                   <div className="trusted-company-card">
//                     <img
//                       src={data.imgPath}
//                       alt="trusted comoany"
//                       className={data.imgClass}
//                     />{" "}
//                   </div>
//                 </div>
//               </Fragment>
//             ))}
//           </div>
//           <div className="d-flex flex-wrap">
//             {trustedCompaniesArrayThree.map((data, index) => (
//               <Fragment key={index}>
//                 <div className="d-flex flex-nowrap">
//                   <div className="trusted-company-card">
//                     <img
//                       src={data.imgPath}
//                       alt="trusted comoany"
//                       className={data.imgClass}
//                     />
//                   </div>
//                   <div className="trusted-company-invisible-card"></div>
//                 </div>
//               </Fragment>
//             ))}
//           </div>
//         </div>
//       </ScrollContainer>
//       <h5 className="mobile-font-16-Nunito-600 mobile-text-center mv-pt-47">
//         <img
//           src={"/imgs/desktop/icons/white-left-arrow.svg"}
//           alt=""
//           className="home-left-arrow-img"
//         />{" "}
//         Swipe to see more
//       </h5>
//     </div>
//   );
// }
