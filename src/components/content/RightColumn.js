import React from "react";
import RightColBanner from "./RightColBanner";
import RightColProductTab from "./RightColProductTab";
import RightColSubBanner1 from "./RightColSubBanner1";
import RightColSubBanner2 from "./RightColSubBanner2";

function RightColumn() {
  return (
    <div id="column-right" class="col-sm-8 col-md-8 col-lg-9 mtb_30">
      <RightColBanner />
      <RightColSubBanner1 />
      <RightColProductTab />
      <RightColSubBanner2 />
    </div>
  );
}

export default RightColumn;
