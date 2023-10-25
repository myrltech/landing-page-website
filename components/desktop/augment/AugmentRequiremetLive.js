// import React, { Fragment, useState } from "react";
// import AugmentRequirementCard from "./AugmentRequirementCard";
// import Pagination from "rc-pagination";
// import "rc-pagination/assets/index.css";
// import MobileAugmentRequirementCard from "./MobileAugmentRequirementCard";
// import { augmentListingDataArray } from "../../../store/data/augmentListingData";

// // const dummyArray = [
// //   {
// //     title: "3 MERN Stack Developers Required by Honda",
// //   },
// //   {
// //     title: "3 MERN Stack Developers Required by Azure",
// //   },
// //   {
// //     title: "3 MERN Stack Developers Required by Honda",
// //   },
// //   {
// //     title: "3 MERN Stack Developers by Azure",
// //   },
// //   {
// //     title: "3 MERN Stack Developers by Azure",
// //   },
// //   {
// //     title: "3 MERN Stack Developers Required by Honda",
// //   },
// //   {
// //     title: "3 MERN Stack Developers Required by Azure",
// //   },
// //   {
// //     title: "3 MERN Stack Developers Required by Honda",
// //   },
// //   {
// //     title: "3 MERN Stack Developers by Azure",
// //   },
// //   {
// //     title: "3 MERN Stack Developers by Azure",
// //   },
// // ];

// // pagination
// const recordsInOnePage = 5;

// const recordsInOneMobilePage = 9;

// export default function AugmentRequiremetLive() {
//   const [values, setValues] = useState({
//     currentPagination: 1,
//     tagged: false,
//   });

//   /*********************************

//             pagination handler

//   ******************************** */

//   const onChangePagination = (page) => {
//     setValues({
//       ...values,
//       currentPagination: page,
//     });
//   };

//   return (
//     <div className="augment-requirement-live-section mobile-text-center">
//       <h2 className="font-48-NunitoSans-600 augment-requirement-live-title mobile-font-24-Nunito-700">
//         Live Requirements{" "}
//       </h2>
//       <p className="font-16-NunitoSans-600 color-white-35 pt-30 mobile-font-16-Nunito-600 mv-pt-35">
//         List of Requirements found
//       </p>
//       <div className="d-none d-md-block">
//         <div className="pt-30">
//           {augmentListingDataArray.map((data, key) => {
//             return (
//               key >= (values.currentPagination - 1) * recordsInOnePage &&
//               key < values.currentPagination * recordsInOnePage && (
//                 <Fragment key={key}>
//                   <AugmentRequirementCard index={key} listData={data} />
//                   {/* <div className="d-block d-md-none">
//                     <MobileAugmentRequirementCard
//                       index={key}
//                       title={data.title}
//                     />
//                   </div> */}
//                 </Fragment>
//               )
//             );
//           })}
//         </div>
//       </div>
//       <div className="d-block d-md-none">
//         <div className="mv-pt-83">
//           {augmentListingDataArray.map((data, key) => {
//             return (
//               key >= (values.currentPagination - 1) * recordsInOneMobilePage &&
//               key < values.currentPagination * recordsInOneMobilePage && (
//                 <Fragment key={key}>
//                   <MobileAugmentRequirementCard index={key} listData={data} />
//                 </Fragment>
//               )
//             );
//           })}
//         </div>
//       </div>
//       <div className="augment_pagination text-center d-none d-md-block">
//         {/*********************************

//                 pagination component

//            ******************************** */}

//         <Pagination
//           onChange={onChangePagination}
//           current={values.currentPagination}
//           defaultPageSize={recordsInOnePage}
//           total={augmentListingDataArray.length}
//           showTitle={false}
//           showLessItems={true}
//         />
//       </div>
//       <div className="augment_pagination text-center d-block d-md-none">
//         {/*********************************

//                 pagination component

//           ******************************** */}
//         <Pagination
//           onChange={onChangePagination}
//           current={values.currentPagination}
//           defaultPageSize={recordsInOneMobilePage}
//           total={augmentListingDataArray.length}
//           showTitle={false}
//           showLessItems={true}
//         />
//       </div>
//     </div>
//   );
// }
