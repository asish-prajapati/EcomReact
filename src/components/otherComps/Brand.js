import React, { useEffect } from "react";
// import $ from "jquery";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel";

// const brandCarousel = () => {
//   $(".brand").owlCarousel({
//     loop: true,
//     autoplay: true,
//     responsiveClass: true,
//     items: 6, //10 items above 1000px browser width
//     responsive: {
//       0: {
//         items: 1,
//         nav: true,
//       },
//       400: {
//         items: 2,
//         nav: true,
//       },
//       600: {
//         items: 3,
//         nav: true,
//       },
//       1000: {
//         items: 6,
//         nav: true,
//         loop: true,
//       },
//     },
//   });
// };

function Brand() {
  // useEffect(() => {
  //   brandCarousel();
  // }, []);
  return (
    <div id="brand_carouse" className="ptb_30 text-center">
      <div className="type-01">
        <div className="heading-part mb_20 ">
          <h2 className="main_title">Brand Logo</h2>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="brand owl-carousel ptb_20">
              <div className="item text-center">
                <a href="#">
                  <img
                    src="images/brand/brand1.png"
                    alt="Disney"
                    className="img-responsive"
                  />
                </a>
              </div>
              <div className="item text-center">
                <a href="#">
                  <img
                    src="images/brand/brand2.png"
                    alt="Dell"
                    className="img-responsive"
                  />
                </a>
              </div>
              <div className="item text-center">
                <a href="#">
                  <img
                    src="images/brand/brand3.png"
                    alt="Harley"
                    className="img-responsive"
                  />
                </a>
              </div>
              <div className="item text-center">
                <a href="#">
                  <img
                    src="images/brand/brand4.png"
                    alt="Canon"
                    className="img-responsive"
                  />
                </a>
              </div>
              <div className="item text-center">
                <a href="#">
                  <img
                    src="images/brand/brand5.png"
                    alt="Canon"
                    className="img-responsive"
                  />
                </a>
              </div>
              <div className="item text-center">
                <a href="#">
                  <img
                    src="images/brand/brand6.png"
                    alt="Canon"
                    className="img-responsive"
                  />
                </a>
              </div>
              <div className="item text-center">
                <a href="#">
                  <img
                    src="images/brand/brand7.png"
                    alt="Canon"
                    className="img-responsive"
                  />
                </a>
              </div>
              <div className="item text-center">
                <a href="#">
                  <img
                    src="images/brand/brand8.png"
                    alt="Canon"
                    className="img-responsive"
                  />
                </a>
              </div>
              <div className="item text-center">
                <a href="#">
                  <img
                    src="images/brand/brand9.png"
                    alt="Canon"
                    className="img-responsive"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brand;
