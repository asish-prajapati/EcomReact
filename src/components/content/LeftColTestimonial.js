import React from "react";
import user1 from "../../images/user1.jpg";
import user2 from "../../images/user2.jpg";
import user3 from "../../images/user3.jpg";
// import OwlCarousel from "react-owl-carousel";

function LeftColTestimonial() {
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
            {" "}
            <img alt="" src={user1} />{" "}
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
            {" "}
            <img alt="" src={user2} />{" "}
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
            {" "}
            <img alt="" src={user3} />{" "}
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

export default LeftColTestimonial;
