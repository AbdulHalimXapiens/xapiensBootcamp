import React from "react";

import "../../asset/css/blog.css";

import artickel1 from "../../asset/image/artikel/artikel1.jpg";
import artickel2 from "../../asset/image/artikel/artikel2.jpg";
import artickel3 from "../../asset/image/artikel/artikel3.jpg";
import artickel4 from "../../asset/image/artikel/artikel4.jpg";
import artickel5 from "../../asset/image/artikel/artikel5.jpg";
import artickel6 from "../../asset/image/artikel/artikel6.jpg";

function App() {
  return (
    <div>
      <section className="blog-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="blog-item">
                <div className="bi-pic">
                  <img src={artickel1} alt="" />
                </div>
                <div className="bi-text">
                  <h5>
                    <a href="./blog-details.html">
                      Why Living Walls are Blossoming in Cities Worldwide
                    </a>
                  </h5>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                </div>
              </div>
              <div className="blog-item">
                <div className="bi-pic">
                  <img src={artickel2} alt="" />
                </div>
                <div className="bi-text">
                  <h5>
                    <a href="./blog-details.html">
                      3 Beautifully Scented Plants for the Kitchen
                    </a>
                  </h5>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                </div>
              </div>
              <div className="blog-item">
                <div className="bi-pic">
                  <img src={artickel3} alt="" />
                </div>
                <div className="bi-text">
                  <h5>
                    <a href="./blog-details.html">
                      I Overwatered my rubber plant and this is what I learnt.
                    </a>
                  </h5>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                </div>
              </div>
              <div className="blog-item">
                <div className="bi-pic">
                  <img src={artickel4} alt="" />
                </div>
                <div className="bi-text">
                  <h5>
                    <a href="./blog-details.html">
                      5 Unkillable Houseplants For All
                    </a>
                  </h5>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                </div>
              </div>
              <div className="blog-item">
                <div className="bi-pic">
                  <img src={artickel5} alt="" />
                </div>
                <div className="bi-text">
                  <h5>
                    <a href="./blog-details.html">Plants VS. Holidays</a>
                  </h5>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                </div>
              </div>
              <div className="blog-item">
                <div className="bi-pic">
                  <img src={artickel6} alt="" />
                </div>
                <div className="bi-text">
                  <h5>
                    <a href="./blog-details.html">
                      Most Resilient Indoor Plants
                    </a>
                  </h5>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                </div>
              </div>
              <div className="blog-pagination">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">Next</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
