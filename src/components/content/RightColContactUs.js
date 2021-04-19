import React from "react";

function RightColContactUs() {
  return (
    <>
      {/* // <!-- contact  --> */}
      <div className="row">
        <div className="col-md-4 col-xs-12 contact">
          <div className="location mb_50">
            <h5 className="capitalize mb_20">Our Location</h5>
            <div className="address">
              Office address
              <br /> 124,Lorem Ipsum has been
              <br /> text ever since the 1500
            </div>
            <div className="call mt_10">
              <i className="fa fa-phone" aria-hidden="true"></i>+91-9987-654-321
            </div>
          </div>
          <div className="Career mb_50">
            <h5 className="capitalize mb_20">Careers</h5>
            <div className="address">
              dummy text ever since the 1500s, simply dummy text of the
              typesetting industry.{" "}
            </div>
            <div className="email mt_10">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <a href="mailto:careers@yourdomain.com" target="_top">
                careers@yourdomain.com
              </a>
            </div>
          </div>
          <div className="Hello mb_50">
            <h5 className="capitalize mb_20">Say Hello</h5>
            <div className="address">
              simply dummy text of the printing and typesetting industry.
            </div>
            <div className="email mt_10">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <a href="mailto:info@yourdomailname.com" target="_top">
                info@yourdomailname.com
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-8 col-xs-12 contact-form mb_50">
          {/* <!-- Contact FORM --> */}
          <div id="contact_form">
            <form
              id="contact_body"
              method="post"
              action="http://html.lionode.com/healthcare/hc001/contact_me.php"
            >
              <input
                className="full-with-form "
                type="text"
                name="name"
                placeholder="Name"
                data-required="true"
              />

              <input
                className="full-with-form  mt_30"
                type="email"
                name="email"
                placeholder="Email Address"
                data-required="true"
              />

              <input
                className="full-with-form  mt_30"
                type="text"
                name="phone1"
                placeholder="Phone Number"
                maxlength="15"
                data-required="true"
              />

              <input
                className="full-with-form  mt_30"
                type="text"
                name="subject"
                placeholder="Subject"
                data-required="true"
              />

              <textarea
                className="full-with-form  mt_30"
                name="message"
                placeholder="Message"
                data-required="true"
              ></textarea>
              <button className="btn mt_30" type="submit">
                Send Message
              </button>
            </form>

            <div id="contact_results"></div>
          </div>
          {/* <!-- END Contact FORM --> */}
        </div>
      </div>
      {/* // <!-- map  --> */}
      <div className="row">
        <div className="col-xs-12 map mb_80">
          <div id="map"></div>
        </div>
      </div>
    </>
  );
}

export default RightColContactUs;
