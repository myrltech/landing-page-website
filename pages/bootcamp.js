import React from "react";
import BootcampMain from "../components/desktop/bootcamp/BootcampMain";
import HeadTag from "../components/desktop/common/HeadTag";

export default function bootcamp() {
  return (
    <>
      <HeadTag
        title=" Myrl Tech"
        description="A platform to help funded startups and enterprises find the best tech partner agencies from across the globe to help augment their product tech teams to fuel the next stage of innovation."
      />
      <BootcampMain />
    </>
  );
}
