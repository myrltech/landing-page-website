import React from "react";

export default function RemoteTeamsLandingPageFoldThree({
  imgPath,
  imgClass,
  imgName,
  infoContainerClass,
}) {
  return (
    <div className={`remote-teams-information-div ${infoContainerClass}`}>
      <h3 className="font-48-NunitoSans-600 remote-teams-fold-two-subtitle remote-teams-fold-two-subtitle--info">
        <span className="font-48-NunitoSans-800 color-white-21">03</span>
        Information Architecture
      </h3>
      <div className="remote-teams-information-img-div">
        <img src={imgPath} alt={imgName} className={imgClass} />
      </div>
    </div>
  );
}
