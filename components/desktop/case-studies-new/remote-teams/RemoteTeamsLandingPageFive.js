import React from "react";

export default function RemoteTeamsLandingPageFive({
  hiImg,
  prototypeImg,
  hiImgClass,
  prototypeImgClass,
  hiImgName,
  prototypeImgName,
  hiImgOuterClass,
  prototypeImgOuterClass,
}) {
  return (
    <div>
      <div className="remote-teams-hi-fidelity-div">
        <h3 className="font-48-NunitoSans-600 remote-teams-fold-two-subtitle remote-teams-fold-two-subtitle--hi">
          <span className="font-48-NunitoSans-800 color-white-21">05</span>Hi
          Fidelity Screens
        </h3>
        <div className={`remote-teams-hi-screen-img-div ${hiImgOuterClass}`}>
          <img src={hiImg} alt={hiImgName} className={hiImgClass} />
        </div>
      </div>
      <div className={`remote-teams-prototype-div ${prototypeImgOuterClass}`}>
        <h3 className="text-right font-48-NunitoSans-600 remote-teams-fold-two-subtitle remote-teams-fold-two-subtitle--prototype">
          <span className="font-48-NunitoSans-800 color-white-21">06</span>
          Prototype
        </h3>
        <div className="remote-teams-prototype-img-div">
          <img
            src={prototypeImg}
            alt={prototypeImgName}
            className={prototypeImgClass}
          />
        </div>
      </div>
    </div>
  );
}
