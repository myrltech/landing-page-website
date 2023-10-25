// import Link from "next/link";
// import React from "react";
// import { augmentClientPartner } from "../../../store/data/augmentClient";

// export default function AugmentClientMobileFoldOne() {
//   return (
//     <>
//       <h2 className="mobile-font-48-Nunito-700 mobile-purple-green-gradient-text">
//         Augment.
//       </h2>
//       <p className="mobile-font-18-Nunito-300 mv-pt-10">
//         A place with best{" "}
//         <span className="mobile-font-18-Nunito-700">Tech Teams</span> for your{" "}
//         <br />
//         requirements with{" "}
//         <span className="mobile-font-18-Nunito-700">
//           Experience and Credibility
//         </span>
//       </p>
//       <div className="d-flex mv-pt-35 justify-content-center">
//         <Link href="/augment">
//           <a>
//             <div className="mobile-text-center gradient-btn gradient-btn--agency">
//               Get Started
//             </div>
//           </a>
//         </Link>
//       </div>

//       <p className="mv-pt-74 mobile-font-24-Nunito-600">
//         <span className="mobile-purple-green-gradient-text"> Augment </span>is
//         the smarter way to find great tech partner agencies.
//       </p>

//       <div className="mobile-augment-client-here-title-block">
//         <h3 className="mobile-font-48-Nunito-900 color-white-17">Here’s how</h3>
//         <h4 className="mobile-font-16-Nunito-600">
//           you currently find competent companies &amp; <b> WHY </b>
//           <span className="mobile-purple-green-gradient-text"> Augmnt </span> is
//           better
//         </h4>
//       </div>

//       {augmentClientPartner.map((data, index) => (
//         <div key={index} className="mobile-augment-client-tech-partner-card">
//           <div className="row mx-0 flex-nowrap align-items-center">
//             <h3 className="mobile-font-18-Nunito-800 color-white-17 width-max-content mobile-mr-10">
//               {data.id}
//             </h3>
//             <h4 className="mobile-font-24-Nunito-600 mobile-purple-green-gradient-text">
//               {data.title}
//             </h4>
//           </div>
//           <hr className="mobile-augment-client-tech-partner-card__hr" />
//           <p className="mobile-font-14-Nunito-600">{data.desc}</p>
//         </div>
//       ))}
//     </>
//   );
// }
