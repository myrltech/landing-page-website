// import React from "react";
// import { augmentClientBenefits } from "../../../store/data/augmentClient";

// export default function AugmentClientMobileFoldTwo() {
//   return (
//     <>
//       <h3 className="mobile-font-48-Nunito-900 color-white-17 mobile-augment-client-benefits-title">
//         And the benefits of using{" "}
//         <span className="mobile-font-36-Nunito-600 mobile-purple-green-gradient-text">
//           Augmnt
//         </span>
//       </h3>
//       <p className="mv-pt-20 mobile-font-18-Nunito-600 mobile-mb-23">
//         Using this journey Comes up to $1k approx every month which is not
//         sustainable
//       </p>

//       {augmentClientBenefits.map((data, index) => (
//         <div
//           key={index}
//           className={
//             index % 2 === 0
//               ? "col-10 ml-auto mta-client-benefits-row__colm  mobile-mb-26 mobile-text-right"
//               : "col-10 mta-client-benefits-row__colm mobile-mb-26 mobile-text-left"
//           }
//         >
//           <h3 className="mobile-font-36-Nunito-900 color-white-17">
//             {data.id}
//           </h3>
//           <h4
//             className={
//               index % 2 === 0
//                 ? "mobile-font-32-Nunito-700 mobile-purple-green-gradient-text ag-mb-8 ml-auto"
//                 : "mobile-font-32-Nunito-700 mobile-purple-green-gradient-text ag-mb-8"
//             }
//           >
//             {data.title}
//           </h4>
//           <p className="mobile-font-14-Nunito-400 color-white-72">
//             {data.desc}
//           </p>
//         </div>
//       ))}
//     </>
//   );
// }
