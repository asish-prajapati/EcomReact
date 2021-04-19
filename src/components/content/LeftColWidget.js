import React from "react";

function LeftColWidget() {
  return (
    <div className="left-cms left-sidebar-widget mb_50">
      <ul>
        <li>
          <div className="feature-i-left ptb_40">
            <div className="icon-right Shipping"></div>
            <h6>Free Shipping</h6>
            <p>Free delivery worldwide</p>
          </div>
        </li>
        <li>
          <div className="feature-i-left ptb_40">
            <div className="icon-right Order"></div>
            <h6>Order Online</h6>
            <p>Hours : 8am - 11pm</p>
          </div>
        </li>
        <li>
          <div className="feature-i-left ptb_40">
            <div className="icon-right Save"></div>
            <h6>Shop And Save</h6>
            <p>For All Spices & Herbs</p>
          </div>
        </li>
        <li>
          <div className="feature-i-left ptb_40">
            <div className="icon-right Safe"></div>
            <h6>Safe Shoping</h6>
            <p>Ensure genuine 100%</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default LeftColWidget;
