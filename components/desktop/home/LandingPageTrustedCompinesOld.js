// import React, {
//   Fragment,
//   useCallback,
//   // useEffect,
//   useRef,
//   // useState,
// } from "react";
// import {
//   trustedCompaniesArrayOne,
//   trustedCompaniesArrayThree,
//   trustedCompaniesArrayTwo,
// } from "./trustedCompanies";
// import ScrollContainer from "react-indiana-drag-scroll";

// export default function LandingPageTrustedCompinesOld() {
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

//   // useEffect(() => {
//   //   var container = document.getElementById("container");
//   //   container.scrollLeft = 1000;
//   // });

//   /*============================================================

//                                handler

//     ============================================================*/
//   // const slideTrust = (direction) => {
//   //   var container = document.getElementById("container");
//   //   const scrollCompleted = 0;

//   //   var slideVar = setInterval(function () {
//   //     if (direction == "left") {
//   //       container.scrollLeft -= 10;
//   //     } else {
//   //       container.scrollLeft += 10;
//   //     }
//   //     console.log(container.scrollLeft);
//   //     scrollCompleted += 10;
//   //     if (scrollCompleted >= 100) {
//   //       window.clearInterval(slideVar);
//   //     }
//   //   }, 50);
//   // };

//   return (
//     <div className="d-flex flex-nowrap align-center justify-content-between home-trusted-companines-main-div">
//       <div className="col-7 d-flex flex-column">
//         {/* <div className="home-tursted-outer-div" id="container" ref={setRef}> */}
//         <ScrollContainer
//           className="home-tursted-outer-div"
//           horizontal={true}
//           vertical={false}
//           innerRef={setRef}
//         >
//           <div className="home-tursted-inner-div">
//             <div className="d-flex flex-wrap">
//               {trustedCompaniesArrayOne.map((data, index) => (
//                 <Fragment key={index}>
//                   <div className="d-flex flex-nowrap">
//                     <div className="trusted-company-card">
//                       <img
//                         src={data.imgPath}
//                         alt="trusted comoany"
//                         className={data.imgClass}
//                       />
//                     </div>
//                     <div className="trusted-company-invisible-card"></div>
//                   </div>
//                 </Fragment>
//               ))}
//             </div>

//             <div className="d-flex flex-wrap">
//               {trustedCompaniesArrayTwo.map((data, index) => (
//                 <Fragment key={index}>
//                   <div className="d-flex flex-nowrap">
//                     <div className="trusted-company-invisible-card"></div>
//                     <div className="trusted-company-card">
//                       <img
//                         src={data.imgPath}
//                         alt="trusted comoany"
//                         className={data.imgClass}
//                       />{" "}
//                     </div>
//                   </div>
//                 </Fragment>
//               ))}
//             </div>
//             <div className="d-flex flex-wrap">
//               {trustedCompaniesArrayThree.map((data, index) => (
//                 <Fragment key={index}>
//                   <div className="d-flex flex-nowrap">
//                     <div className="trusted-company-card">
//                       <img
//                         src={data.imgPath}
//                         alt="trusted comoany"
//                         className={data.imgClass}
//                       />
//                     </div>
//                     <div className="trusted-company-invisible-card"></div>
//                   </div>
//                 </Fragment>
//               ))}
//             </div>
//           </div>
//         </ScrollContainer>
//         {/* </div> */}
//         {/* {console.log(scrollPosition, "++++++++++++++++++++++")} */}
//         <div className="text-center pt-40 scroll-btn-section">
//           {/* <button onClick={() => slideTrust("left")} className="pr-25">
//               Swipe  see more
//             </button> */}
//           <h5 className="font-24-NunitoSans-600">
//             <img
//               src={"/imgs/desktop/icons/white-left-arrow.svg"}
//               alt=""
//               className="home-left-arrow-img"
//             />{" "}
//             Swipe to see more
//           </h5>
//           {/* <button onClick={() => slideTrust("right")}>
//               Swipe right see more
//             </button> */}
//         </div>{" "}
//       </div>{" "}
//       <div className="col-5">
//         <h2 className="font-72-NunitoSans-600 ">
//           <span className="home-trusted-text"> Trusted by</span> the most
//           <br />
//           <span className="home-trusted-text-2"> coveted</span> companies <br />
//           around the globe!
//         </h2>
//       </div>
//     </div>
//   );
// }
