import React from 'react'

function BottomFooter() {
    return (
        <div className="footer-bottom mt_60 ptb_10">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="copyright-part">@ 2017 All Rights Reserved HealthCare</div>
            </div>
            <div className="col-sm-6">
              <div className="payment-icon text-right">
                <ul>
                  <li><i className="fa fa-cc-paypal "></i></li>
                  <li><i className="fa fa-cc-stripe"></i></li>
                  <li><i className="fa fa-cc-visa"></i></li>
                  <li><i className="fa fa-cc-discover"></i></li>
                  <li><i className="fa fa-cc-mastercard"></i></li>
                  <li><i className="fa fa-cc-amex"></i></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default BottomFooter
