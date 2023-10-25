// import React, { useState } from "react";
// import { useSpring, animated } from "react-spring";
// import AugmentLandingPageJourneyFoldWithoutAugmentCard from "./AugmentLandingPageJourneyFoldWithoutAugmentCard";
// import ScrollContainer from "react-indiana-drag-scroll";

// export default function AugmentLandingPageJourneyFoldWithoutAugment() {
//   const [values, setVaules] = useState({
//     showProspectingContent: false,
//     showVerificationContent: false,
//     showAutomationContent: false,
//     showDiscussionContent: false,
//   });

//   /*=================================================================
//             animation style
//   =================================================================*/
//   const renderAnimationStyle = (val) => {
//     return {
//       to: {
//         opacity: val ? 1 : 0,
//         height: val ? "max-content" : 0,
//         transform: val
//           ? "translate3d(0px, 0px, 0px)"
//           : "translate3d(-10px, -10px, -10px)",
//       },
//     };
//   };

//   /*=================================================================
//             renderProspectingContent
//   =================================================================*/
//   const renderProspectingContent = () => {
//     return (
//       <animated.div
//         style={useSpring(renderAnimationStyle(values.showProspectingContent))}
//         // onMouseLeave={() =>
//         //   setVaules({ ...values, showProspectingContent: false })
//         // }
//       >
//         <div className="mta-agency-journey-fold-without-augment-content-row">
//           <div className="mta-agency-journey-fold-without-augment-details-text-colm">
//             <h3 className="mta-agency-journey-fold-without-augment-details-text-1">
//               prospecting
//             </h3>
//             <div className="mta-agency-journey-fold-without-augment-details-desc-section">
//               <p className="mta-agency-journey-fold-without-augment-details-text-2">
//                 Any Agency looking for projects needs to invest in many tools,
//                 Ads and SEO to scour and attract valid clients with potential.
//               </p>
//               <p className="mta-agency-journey-fold-without-augment-details-text-2">
//                 This step however involves using multiple products with their
//                 individual subscription fees
//               </p>
//               <p className="mta-agency-journey-fold-without-augment-details-text-3">
//                 Here is a breakdown of how many tools on average it takes to
//                 find one approachable contact and how much they cost
//               </p>
//             </div>
//             <p className="font-18-NunitoSans-600 mta-agency-journey-fold-without-augment-details-text-4">
//               SWIPE RIGHT
//               <img
//                 src="/imgs/desktop/augment-agency/gray-arrow-right-icon.svg"
//                 alt="arrow right"
//               />
//             </p>
//           </div>
//           <ScrollContainer
//             className="d-flex align-items-start mta-agency-journey-fold-without-augment-details-cards-colm"
//             horizontal={true}
//             vertical={false}
//           >
//             <AugmentLandingPageJourneyFoldWithoutAugmentCard
//               extraClassName="mta-agency-journey-fold-without-augment-details-card--displaySelector"
//               imgPath="/imgs/desktop/augment-agency/prospecting-card-1-all-logo.svg"
//               imgAlt="Apollo.io, Linkedin Sales Navigator, zoominfo"
//               totalInvestment="$250"
//               title="Finding Prospects"
//               desc="The first step is definitely starting with prospecting. For that the
//               tools available like Linkedin Sales Navigator charge $99 per month and finding intent based
//               leads using Dux Soup costs you upto $150 per mo"
//             />
//             <AugmentLandingPageJourneyFoldWithoutAugmentCard
//               extraClassName="mta-agency-journey-fold-without-augment-details-card--displaySelector"
//               imgPath="/imgs/desktop/augment-agency/prospecting-card-2-all-logo.svg"
//               imgAlt="Meetup, Linkedin, twitter"
//               totalInvestment="$300"
//               title="Networking"
//               desc="Attending industry events where you can meet new potential clients and show off your company. Exploring online forums / communities for contacts &amp; Potential clients. Reaching out to your friends for referrals (who btw might want a cut out of the deal)"
//             />
//             <AugmentLandingPageJourneyFoldWithoutAugmentCard
//               extraClassName="mta-agency-journey-fold-without-augment-details-card--displaySelector"
//               imgPath="/imgs/desktop/augment-agency/prospecting-card-3-all-logo.svg"
//               imgAlt="Google Analytics, ubersuggest, semrush, Google trends"
//               totalInvestment="$500"
//               title="Search Engine Optimisation"
//               desc="Another way of reaching out to a wide audience is optimising your website so when
//               clients are searching for agencies they can be
//               redirected to you via search engines"
//             />
//             <AugmentLandingPageJourneyFoldWithoutAugmentCard
//               imgPath="/imgs/desktop/augment-agency/prospecting-card-4-all-logo.svg"
//               imgAlt="Google Ads, Facebook Ads, sixads"
//               totalInvestment="$750"
//               title="Running Ads"
//               desc="Another way of reaching out to a wide audience is buying and running ads across the
//               internet, which costs around $250 on portals"
//             />
//           </ScrollContainer>
//         </div>
//       </animated.div>
//     );
//   };

//   /*=================================================================
//             renderVerificationContent
//   =================================================================*/
//   const renderVerificationContent = () => {
//     return (
//       <animated.div
//         style={useSpring(renderAnimationStyle(values.showVerificationContent))}
//         // onMouseLeave={() =>
//         //   setVaules({ ...values, showVerificationContent: false })
//         // }
//       >
//         <div className="mta-agency-journey-fold-without-augment-content-row">
//           <div className="mta-agency-journey-fold-without-augment-details-text-colm">
//             <h3 className="mta-agency-journey-fold-without-augment-details-text-1">
//               verification
//             </h3>
//             <div className="mta-agency-journey-fold-without-augment-details-desc-section">
//               <p className="mta-agency-journey-fold-without-augment-details-text-2">
//                 After succesfully collating potential contacts from all sources
//                 , the next step is to weed out the invalid ones and approach the
//                 valid ones
//               </p>
//               <p className="mta-agency-journey-fold-without-augment-details-text-2">
//                 There are thankfully multiple tools to check their validity and
//                 approach them but again come with a price tag.
//               </p>
//               <p className="mta-agency-journey-fold-without-augment-details-text-3">
//                 Here is a breakdown of the tools it takes to verify a contact
//                 and run campaigns to create a repo with these contacts and make
//                 yourself known
//               </p>
//             </div>
//           </div>
//           <div className="d-flex align-items-start mta-agency-journey-fold-without-augment-details-cards-colm">
//             <AugmentLandingPageJourneyFoldWithoutAugmentCard
//               imgPath="/imgs/desktop/augment-agency/verification-card-1-all-logo.svg"
//               imgAlt="Clearbit, hunter.io, salesQL"
//               totalInvestment="$850"
//               title="An Email Lookup Tool"
//               desc="Any one tool’s monthly subscription cost will upto $100 Per month"
//             />
//             <AugmentLandingPageJourneyFoldWithoutAugmentCard
//               imgPath="/imgs/desktop/augment-agency/verification-card-2-all-logo.svg"
//               imgAlt="Neverbounce, Snovio, mailfloss"
//               totalInvestment="$900"
//               title="Email Verification Tool"
//               desc="Each tool charges atleast $50 per month as subscription fees"
//             />
//           </div>
//         </div>
//       </animated.div>
//     );
//   };

//   /*=================================================================
//             renderAutomationContent
//   =================================================================*/
//   const renderAutomationContent = () => {
//     return (
//       <animated.div
//         style={useSpring(renderAnimationStyle(values.showAutomationContent))}
//         // onMouseLeave={() =>
//         //   setVaules({ ...values, showAutomationContent: false })
//         // }
//       >
//         <div className="mta-agency-journey-fold-without-augment-content-row  mta-agency-journey-fold-without-augment-content-row--automation">
//           <div className="mta-agency-journey-fold-without-augment-details-text-colm">
//             <h3 className="mta-agency-journey-fold-without-augment-details-text-1">
//               automation
//             </h3>
//             <div className="mta-agency-journey-fold-without-augment-details-desc-section">
//               <p className="mta-agency-journey-fold-without-augment-details-text-2">
//                 The stage where you finally get a meeting with a client and
//                 enquire about the project requirements and present your and your
//                 company’s vision
//               </p>
//             </div>
//           </div>
//           <div className="d-flex align-items-start mta-agency-journey-fold-without-augment-details-cards-colm">
//             <AugmentLandingPageJourneyFoldWithoutAugmentCard
//               imgPath="/imgs/desktop/augment-agency/automation-card-1-all-logo.svg"
//               imgAlt="drip, sendinblue, mailchimp, ConvertKit"
//               totalInvestment="$950"
//               title="Email Automation Tool"
//               desc="Any Automation service including LinkedIn’s outreach automation or a tool like Mailchimp, Convertkit will cost you starting from $50 upto $200 for the PRO plans"
//             />
//             <AugmentLandingPageJourneyFoldWithoutAugmentCard
//               imgPath="/imgs/desktop/augment-agency/automation-card-2-all-logo.svg"
//               imgAlt="Outreach, LINKED HELPER, DUX-SOUP"
//               totalInvestment="$1K"
//               title="Linkedin Outreach Automation"
//               desc="Any Automation service including LinkedIn’s outreach automation or a tool like Mailchimp, Convertkit will cost you starting from $50 upto $200 for the PRO plans"
//             />
//           </div>
//         </div>
//       </animated.div>
//     );
//   };

//   /*=================================================================
//             renderDiscussionContent
//   =================================================================*/
//   const renderDiscussionContent = () => {
//     return (
//       <animated.div
//         style={useSpring(renderAnimationStyle(values.showDiscussionContent))}
//         // onMouseLeave={() =>
//         //   setVaules({ ...values, showDiscussionContent: false })
//         // }
//       >
//         <div className="mta-agency-journey-fold-without-augment-content-row  mta-agency-journey-fold-without-augment-content-row--disc">
//           <div className="mta-agency-journey-fold-without-augment-details-text-colm">
//             <h3 className="mta-agency-journey-fold-without-augment-details-text-1">
//               discussion &amp; Deal CLosing
//             </h3>
//             <div className="mta-agency-journey-fold-without-augment-details-desc-section">
//               <p className="mta-agency-journey-fold-without-augment-details-text-2">
//                 After finding the right project you can go ahead and meet with
//                 clients and pen down the details! And given that there is a 10:1
//                 ratio of project listings to agencies. The chances of you
//                 scoring the deal are good.
//               </p>
//             </div>
//           </div>
//           <div className="d-flex align-items-start mta-agency-journey-fold-without-augment-details-cards-colm">
//             <AugmentLandingPageJourneyFoldWithoutAugmentCard
//               imgPath="/imgs/desktop/augment-agency/discussion-card-1-all-logo.svg"
//               imgAlt="Google Meet, gmail, phone, microsof teams"
//               totalInvestment="$1k+"
//               title="Meeting and Calling Apps"
//               desc="This tools involved thankfully doesnt involve any fee. However , if you are treating your potential clients for a meal, well."
//             />
//           </div>
//         </div>
//       </animated.div>
//     );
//   };

//   /*=================================================================
//             main
//   =================================================================*/
//   return (
//     <>
//       <div
//         className="mta-agency-journey-fold-without-augment-btns-div"
//         onMouseLeave={() =>
//           setVaules({
//             showVerificationContent: false,
//             showAutomationContent: false,
//             showDiscussionContent: false,
//             showProspectingContent: false,
//           })
//         }
//       >
//         {/* prospecting */}
//         <div className="mta-agency-journey-fold-without-augment-btns-div__textDescBlock">
//           <button
//             className="mta-agency-journey-fold-without-augment-btn"
//             onMouseOver={() =>
//               setVaules({
//                 showVerificationContent: false,
//                 showAutomationContent: false,
//                 showDiscussionContent: false,
//                 showProspectingContent: true,
//               })
//             }
//             style={{
//               display: !values.showProspectingContent ? "block" : "none",
//             }}
//           >
//             prospecting
//           </button>
//           {renderProspectingContent()}
//         </div>

//         {/* verification */}
//         <div className="mta-agency-journey-fold-without-augment-btns-div__textDescBlock">
//           <button
//             className="mta-agency-journey-fold-without-augment-btn"
//             onMouseOver={() =>
//               setVaules({
//                 showProspectingContent: false,
//                 showAutomationContent: false,
//                 showDiscussionContent: false,
//                 showVerificationContent: true,
//               })
//             }
//             style={{
//               display: !values.showVerificationContent ? "block" : "none",
//             }}
//           >
//             verification
//           </button>
//           {renderVerificationContent()}
//         </div>

//         {/* automation */}
//         <div className="mta-agency-journey-fold-without-augment-btns-div__textDescBlock">
//           <button
//             className="mta-agency-journey-fold-without-augment-btn"
//             onMouseOver={() =>
//               setVaules({
//                 showProspectingContent: false,
//                 showVerificationContent: false,
//                 showDiscussionContent: false,
//                 showAutomationContent: true,
//               })
//             }
//             style={{
//               display: !values.showAutomationContent ? "block" : "none",
//             }}
//           >
//             automation
//           </button>
//           {renderAutomationContent()}
//         </div>

//         {/* discussion */}
//         <div className="mta-agency-journey-fold-without-augment-btns-div__textDescBlock">
//           <button
//             className="mta-agency-journey-fold-without-augment-btn"
//             onMouseOver={() =>
//               setVaules({
//                 showProspectingContent: false,
//                 showVerificationContent: false,
//                 showAutomationContent: false,
//                 showDiscussionContent: true,
//               })
//             }
//             style={{
//               display: !values.showDiscussionContent ? "block" : "none",
//             }}
//           >
//             discussion and deal <br /> closing
//           </button>
//           {renderDiscussionContent()}
//         </div>
//       </div>
//     </>
//   );
// }
