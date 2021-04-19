import React from "react";
import sub4 from "../../images/sub4.jpg";

function RightColSubBanner3() {
  return (
    <div className="row">
      <div className="cms_banner mt_60 mb_50">
        <div className="col-xs-12">
          <div id="subbanner4" className="banner sub-hover">
            {" "}
            <a href="#">
              <img src={sub4} alt="Sub Banner4" className="img-responsive" />
            </a>
            <div className="bannertext"> </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightColSubBanner3;
