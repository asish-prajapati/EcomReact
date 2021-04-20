import React from "react";

function RightColAbout() {
  return (
    <div className="row">
      <div className="col-md-12">
        <figure>
          {" "}
          <img src="images/about-page-gaando.jpg" alt="#" />{" "}
        </figure>
      </div>
      <div className="col-md-12">
        <div className="about-text">
          <div className="about-heading-wrap">
            <h2 className="about-heading mb_20 mt_40 ptb_10">
              HealthCare Design is Best Part of <span>my Life </span>
            </h2>
          </div>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem of
            text. All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a Ipsum is therefore always free from
            repetition, injected humour, or non-characteristic words etc.
          </p>
          <button type="button" className="btn mt_30">
            HIRE ME
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightColAbout;
