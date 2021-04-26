import React from "react";

function Filter() {
  return (
    <div className="filter left-sidebar-widget mb_50">
      <div className="heading-part mtb_20 ">
        <h2 className="main_title">Refinr Search</h2>
      </div>
      <div className="filter-block">
        <p>
          <label for="amount">Price range:</label>
          <input type="text" id="amount" readonly />
        </p>
        <div id="slider-range" className="mtb_20"></div>
        <div className="list-group">
          <div className="list-group-item mb_10">
            <label>Color</label>
            <div id="filter-group1">
              <div className="checkbox">
                <label>
                  <input value="" type="checkbox" /> Red (10)
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input value="" type="checkbox" /> Green (06)
                </label>
              </div>
              <div className="checkbox ">
                <label>
                  <input value="" type="checkbox" /> Blue(09)
                </label>
              </div>
            </div>
          </div>
          <div className="list-group-item mb_10">
            <label>Size</label>
            <div id="filter-group3">
              <div className="checkbox">
                <label>
                  <input value="" type="checkbox" /> Big (3)
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input value="" type="checkbox" /> Medium (2)
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input value="" type="checkbox" /> Small (1)
                </label>
              </div>
            </div>
          </div>
          <button type="button" className="btn">
            Refine Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
