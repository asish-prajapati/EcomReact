import React from "react";

// import OwlCarousel from "react-owl-carousel";

function Testimonial() {
  return (
    <div className="Testimonial left-sidebar-widget mb_50">
      <div className="heading-part mb_20 ">
        <h2 className="main_title">Testimonial</h2>
      </div>
      <div className="client owl-carousel text-center pt_10">
        {/* <OwlCarousel
        items={1}
        margin={10}
        nav
        className="client text-center pt_10"
      > */}
        <div className="item client-detail">
          <div className="client-avatar">
            <img alt="" src="images/user1.jpg" />
          </div>
          <div className="client-title  mt_30">
            <strong>joseph Lui</strong>
          </div>
          <div className="client-designation mb_10">php Developer</div>
          <p>
            <i className="fa fa-quote-left" aria-hidden="true"></i>Lorem ipsum
            dolor sit amet, volumus oporteat his at sea in Rem ipsum dolor sit
            amet, sea in odio ..
          </p>
        </div>
        <div className="item client-detail">
          <div className="client-avatar">
            <img alt="" src="images/user2.jpg" />
          </div>
          <div className="client-title  mt_30">
            <strong>joseph Lui</strong>
          </div>
          <div className="client-designation mb_10">php Developer</div>
          <p>
            <i className="fa fa-quote-left" aria-hidden="true"></i>Lorem ipsum
            dolor sit amet, volumus oporteat his at sea in Rem ipsum dolor sit
            amet, sea in odio ..
          </p>
        </div>
        <div className="item client-detail">
          <div className="client-avatar">
            <img alt="" src="images/user3.jpg" />
          </div>
          <div className="client-title  mt_30">
            <strong>joseph Lui</strong>
          </div>
          <div className="client-designation mb_10">php Developer</div>
          <p>
            <i className="fa fa-quote-left" aria-hidden="true"></i>Lorem ipsum
            dolor sit amet, volumus oporteat his at sea in Rem ipsum dolor sit
            amet, sea in odio ..
          </p>
        </div>
        {/* </OwlCarousel> */}
      </div>
    </div>
  );
}

export default Testimonial;
