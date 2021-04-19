import React from "react";
import main_banner1 from "../../images/main_banner1.jpg";

function RightColBanner() {
  return (
    <div>
      <div className="banner">
        <div className="main-banner owl-carousel">
          <div className="item">
            <a href="#">
              <img
                src={main_banner1}
                alt="Main Banner"
                className="img-responsive"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightColBanner;
