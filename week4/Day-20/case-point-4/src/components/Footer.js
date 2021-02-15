import React from "react";

import "../css/footer.css";

function Footer() {
  return (
    <div>
      <footer id="dk-footer" className="dk-footer">
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <span>Copyright © 2021, All Right Reserved</span>
              </div>

              <div className="col-md-6">
                <div className="copyright-menu">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="back-to-top" className="back-to-top">
          <button
            className="btn btn-dark"
            title="Back to Top"
            style="display: block;"
          >
            <i className="fa fa-angle-up"></i>
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
