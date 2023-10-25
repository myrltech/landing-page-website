// import React from "react";
// import { augmentClientPartner } from "../../../store/data/augmentClient";

// export default function AugmentClientLandingPageTechPartner() {
//   return (
//     <>
//       <h2 className="text-right mta-time-and-money-title mta-time-and-money-title--client">
//         Find Great tech partner agencies <br />
//         from across the globe <b>Fast</b> and in a <b>scalable</b> way
//       </h2>

//       <div className="row mx-0 align-items-start mta-client-partner-fold-title-row">
//         <div className="col-6">
//           <p className="font-48-NunitoSans-600">
//             Here is how you currently find competent companies
//           </p>
//         </div>
//         <div className="col-6">
//           <p className="font-48-NunitoSans-600">
//             Why
//             <span className="purple-green-gradient-text"> Augmnt</span> is
//             better
//           </p>
//         </div>
//       </div>

//       {augmentClientPartner.map((data, index) => (
//         <div
//           key={index}
//           className="row mx-0 align-items-end mta-client-partner-fold-content-row"
//         >
//           <div className="col-6">
//             <h3 className="mta-client-partner-fold-content-row__text-1">
//               {data.id}
//             </h3>
//             <h4 className="mta-client-partner-fold-content-row__text-2 purple-green-gradient-text">
//               {data.title}
//             </h4>
//           </div>
//           <div className="col-6">
//             <p className="mta-client-partner-fold-content-row__text-3">
//               {data.desc}
//             </p>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }
