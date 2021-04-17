import React from 'react'

function BottomNav() {
    return (
        <div className="header-bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-3">
              <div className="category">
                <div className="menu-bar" data-target="#category-menu,#category-menu-responsive" data-toggle="collapse" aria-expanded="true" role="button">
                  <h4 className="category_text">Top category</h4>
                  <span className="i-bar"><i className="fa fa-bars"></i></span></div>
              </div>
              <div id="category-menu-responsive" className="navbar collapse " aria-expanded="true"  role="button">
                <div className="nav-responsive">
                  <ul className="nav  main-navigation collapse in">
                    <li><a href="#">Pharmacy</a></li>
                    <li><a href="#">Health</a></li>
                    <li><a href="#">Beauty</a></li>
                    <li><a href="#">Vitamins</a></li>
                    <li><a href="#">Sweating</a></li>
                    <li><a href="#">Coughs & Colds</a></li>
                    <li><a href="#">Hair Loss</a></li>
                    <li><a href="#">Weight Loss</a></li>
                    <li><a href="#">Antifungals</a></li>
                    <li><a href="#">Pain Relief</a></li>
                    <li><a href="#">Stop Smoking</a></li>
                    <li><a href="#">Skin Conditions</a></li>
                    <li><a href="#">Top Brands</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-8 col-md-8 col-lg-9">
              <div className="header-bottom-right offers">
              	<div className="marquee"><span><i className="fa fa-circle" aria-hidden="true"></i>It's Sexual Health Week!</span>
                  <span><i className="fa fa-circle" aria-hidden="true"></i>Our 5 Tips for a Healthy Summer</span>
                  <span><i className="fa fa-circle" aria-hidden="true"></i>Sugar health at risk?</span>
                  <span><i className="fa fa-circle" aria-hidden="true"></i>The Olay Ranges - What do they do?</span>
                  <span><i className="fa fa-circle" aria-hidden="true"></i>Body fat - what is it and why do we need it?</span>
                  <span><i className="fa fa-circle" aria-hidden="true"></i>Can a pillow help you to lose weight?</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default BottomNav
