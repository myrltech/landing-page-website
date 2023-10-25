import React from "react";

export default function RemoteTeamsLandingPageFoldTwo({
  imgPath,
  imgClass,
  imgName,
  lowContainerClass,
}) {
  return (
    <div className={`remote-teams-fold-two-div ${lowContainerClass}`}>
      <h3 className="text-right mobile-text-right font-48-NunitoSans-600 remote-teams-fold-two-subtitle pr-50">
        <span className="font-48-NunitoSans-800 color-white-21">02</span> Low
        Fidelity Screens
      </h3>
      <div className="remote-teams-low-screen-img-div">
        <img src={imgPath} alt={imgName} className={imgClass} />
      </div>
    </div>
  );
}
