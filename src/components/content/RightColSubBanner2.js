import React from "react";
import sub3 from "../../images/sub3.jpg";

function RightColSubBanner2() {
  return (
    <div className="row">
      <div className="cms_banner mt_40 mb_50">
        <div className="col-xs-12">
          <div id="subbanner3" className="banner sub-hover">
            <a href="#">
              <img src={sub3} alt="Sub Banner3" className="img-responsive" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightColSubBanner2;
