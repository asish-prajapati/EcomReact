import React from "react";

function RightColAboutWidget() {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="heading-part mb_20 mt_40">
          <h2 className="main_title">What We Do?</h2>
        </div>
        <div className="panel-group" id="accordion">
          <div className="panel panel-default pull-left">
            <div className="panel-heading">
              <h4 className="panel-title">
                {" "}
                <a
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseOne"
                >
                  1. What is HTML?
                </a>{" "}
              </h4>
            </div>
            <div id="collapseOne" className="panel-collapse collapse in">
              <div className="panel-body">
                <p>
                  HTML is a computer language devised to allow website creation.
                  These websites can then be viewed by anyone else connected to
                  the Internet. It is relatively easy to learn, with the basics
                  being accessible.
                </p>
              </div>
            </div>
          </div>
          <div className="panel panel-default pull-left">
            <div className="panel-heading">
              <h4 className="panel-title">
                {" "}
                <a
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTwo"
                >
                  2. What is Bootstrap?
                </a>{" "}
              </h4>
            </div>
            <div id="collapseTwo" className="panel-collapse collapse">
              <div className="panel-body">
                <p>
                  Bootstrap is the most popular HTML, CSS, and JS framework for
                  developing responsive, mobile first projects on the web. When
                  I discovered Bootstrap a few years ago, responsive design was
                  still gaining in popularity, addition to HTML, CSS and JS.
                </p>
              </div>
            </div>
          </div>
          <div className="panel panel-default pull-left">
            <div className="panel-heading">
              <h4 className="panel-title">
                {" "}
                <a
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseThree"
                >
                  3. What is CSS?
                </a>{" "}
              </h4>
            </div>
            <div id="collapseThree" className="panel-collapse collapse">
              <div className="panel-body">
                <p>
                  Cascading Style Sheets, fondly referred to as CSS, is a simple
                  design language intended to simplify the process of making web
                  pages presentable.CSS handles the look and feel part of a web
                  page. Using CSS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="heading-part mb_20 mt_40 ">
          <h2 className="main_title">Skills</h2>
        </div>
        <div id="p_line">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "60%" }}
            >
              {" "}
              <span className="sr-only">60% Complete</span>{" "}
            </div>
            <span className="progress-type">HTML / HTML5</span>{" "}
            <span className="progress-completed">60%</span>{" "}
          </div>
          <div className="progress">
            <div
              className="progress-bar progress-bar-success"
              role="progressbar"
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "40%" }}
            >
              {" "}
              <span className="sr-only">40% Complete (success)</span>{" "}
            </div>
            <span className="progress-type">ASP.Net</span>{" "}
            <span className="progress-completed">40%</span>{" "}
          </div>
          <div className="progress">
            <div
              className="progress-bar progress-bar-info"
              role="progressbar"
              aria-valuenow="20"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "20%" }}
            >
              {" "}
              <span className="sr-only">20% Complete (info)</span>{" "}
            </div>
            <span className="progress-type">Java</span>{" "}
            <span className="progress-completed">20%</span>{" "}
          </div>
          <div className="progress">
            <div
              className="progress-bar progress-bar-warning"
              role="progressbar"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "60%" }}
            >
              {" "}
              <span className="sr-only">60% Complete (warning)</span>{" "}
            </div>
            <span className="progress-type">JavaScript / jQuery</span>{" "}
            <span className="progress-completed">60%</span>{" "}
          </div>
          <div className="progress">
            <div
              className="progress-bar progress-bar-danger"
              role="progressbar"
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "80%" }}
            >
              {" "}
              <span className="sr-only">80% Complete (danger)</span>{" "}
            </div>
            <span className="progress-type">CSS / CSS3</span>{" "}
            <span className="progress-completed">80%</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightColAboutWidget;
