import React from "react";

export default function PageTitle({ title, extraClass }) {
  return (
    <div className={`case-studies-title ${extraClass}`}>
      <h2 className="font-72-NunitoSans-900">{title}</h2>
      <span className="case-studies-title--shadow">{title}</span>
    </div>
  );
}
