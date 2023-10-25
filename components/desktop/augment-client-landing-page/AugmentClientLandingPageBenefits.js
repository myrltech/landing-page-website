// import React from "react";
// import { augmentClientBenefits } from "../../../store/data/augmentClient";

// export default function AugmentClientLandingPageBenefits() {
//   return (
//     <>
//       <h2 className="mta-time-and-money-title mta-time-and-money-title--clientBenefits">
//         Benefits provided by using Augmnt over your
//         <br /> current process.
//       </h2>

//       <div className="row mx-0 align-items-start mta-client-benefits-row">
//         {augmentClientBenefits.map((data, index) => (
//           <div key={index} className="col-6 mta-client-benefits-row__colm">
//             <h3 className="mta-client-partner-fold-content-row__text-1">
//               {data.id}
//             </h3>
//             <h4 className="font-48-NunitoSans-700 purple-green-gradient-text mb-25 mta-client-benefits-row__text-title">
//               {data.title}
//               <img src={data.titleIcon} alt="" />
//             </h4>
//             <p className="mta-client-benefits-row__text-1">{data.desc}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
