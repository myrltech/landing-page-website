// import React from "react";

// const withoutAugmentData = [
//   {
//     title: "Prospecting",
//     desc: "Finding Leads through multiple channels and references.",
//     price: "$800",
//   },
//   {
//     title: "Verification",
//     desc: "Checking if those leads scoured are valid and are opportunate.",
//     price: "$100",
//   },
//   {
//     title: "Outreach Automation",
//     desc: "Establishing a connection with scheduled mailers about your company and capabilities.",
//     price: "$100",
//   },
//   {
//     title: "Discussion",
//     desc: "Discussing the details of the possible project and ironing out the fine details.",
//     price: "$100",
//   },
//   {
//     title: "Deal Closing",
//     desc: "Finalising the deal with the client and starting the work.",
//     price: "$100",
//   },
// ];

// export default function AugmentLandingPageTimeAndMoneyFold() {
//   return (
//     <>
//       <h2 className="text-right mta-time-and-money-title">
//         Save a lot of <b>Time</b> and <b>Money</b>
//         <br />
//         by changing your Business Growth Process
//       </h2>

//       <div className="row mx-0 align-items-start">
//         <div className="col-6 mta-time-money-colm-without-augment">
//           <h3 className="mta-gray-text-1">
//             Without <br />
//             <span className="mta-gray-text-1__white mta-gray-text-1__white--1">
//               {" "}
//               Augment
//             </span>
//           </h3>
//           <p className="mta-gray-text-2 mta-gray-text-2--mlColm1">$1.1K+/mo</p>

//           <div className="d-flex align-items-start">
//             <div className="agency-time-and-money-image-fold">
//               <img
//                 src="/imgs/desktop/augment-agency/time-and-money-without-augment.svg"
//                 alt=""
//               />
//             </div>

//             <ol>
//               {withoutAugmentData.map((data, index) => (
//                 <li
//                   key={index}
//                   className="d-flex align-items-center mta-time-money-colm-without-augment__li"
//                 >
//                   <div className="mta-time-money-colm-without-augment__li-colm1">
//                     <h4 className="font-48-NunitoSans-700 purple-green-gradient-text ">
//                       {data.title}
//                     </h4>
//                     <p className="font-18-NunitoSans-600 color-white-72">
//                       {data.desc}
//                     </p>
//                   </div>
//                   <p className="mta-time-money-colm-without-augment__li-price">
//                     {data.price}
//                   </p>
//                 </li>
//               ))}
//             </ol>
//           </div>
//         </div>
//         <div className="col-6 mta-time-money-colm-with-augment">
//           <h3 className="mta-gray-text-1">
//             With <br />
//             <span className="mta-gray-text-1__white mta-gray-text-1__white--2">
//               Augment
//             </span>
//           </h3>
//           <p className="mta-gray-text-2 mta-gray-text-2--mlColm1">$600/mo</p>
//           <div className="d-flex align-items-start">
//             <div className="agency-time-and-money-with-augment-image-fold">
//               <img
//                 src="/imgs/desktop/augment-agency/time-and-money-with-augment.svg"
//                 alt=""
//               />
//             </div>

//             <ol>
//               <li className="d-flex align-items-center mta-time-money-colm-with-augment__li">
//                 <div>
//                   <h4 className="font-48-NunitoSans-700 purple-green-gradient-text ">
//                     Sign up
//                   </h4>
//                   <p className="font-18-NunitoSans-600 color-white-72 mb-27">
//                     Sign up with us on our platform where there are new listings
//                     every 15 days with a complete refresh!
//                   </p>
//                   <button className="agument-btn agument-btn--growNow mb-27">
//                     Grow Now
//                   </button>
//                 </div>
//               </li>
//               <li className="d-flex align-items-center mta-time-money-colm-with-augment__li mb-46">
//                 <div>
//                   <h4 className="font-48-NunitoSans-700 purple-green-gradient-text ">
//                     Search and Get Access to Premium project listings.
//                   </h4>
//                   <p className="font-18-NunitoSans-600 color-white-72">
//                     Set your filters based on your requirements and we will
//                     filter out the right Professionally vetted projects for you.
//                   </p>
//                 </div>
//               </li>
//               <li className="d-flex align-items-center mta-time-money-colm-with-augment__li">
//                 <div>
//                   <h4 className="font-48-NunitoSans-700 purple-green-gradient-text ">
//                     Discuss &amp; Close the deal
//                   </h4>
//                   <p className="font-18-NunitoSans-600 color-white-72">
//                     After finding the right project you can go ahead and meet
//                     with clients and pen down the details! And given that there
//                     is a 10:1 ratio of project listings to agencies. The chances
//                     of you scoring the deal are good.
//                   </p>
//                 </div>
//               </li>
//             </ol>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
