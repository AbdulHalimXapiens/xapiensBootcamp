import React from "react";

import "../../asset/css/contact.css";

function App() {
  return (
    <div>
      <section className="contact-area section-padding-100-0 spasi">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="contact-content mb-100">
                <h4>Get In Touch</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia dese mollit anim id est laborum, consectetur
                  adipisicing elit.
                </p>

                <div className="single-contact-info">
                  <h6>Location:</h6>
                  <h5>Jl. Kemuning 15 Yogyakarta</h5>
                </div>

                <div className="single-contact-info">
                  <h6>Email:</h6>
                  <h5>info.test@gmail.com</h5>
                </div>

                <div className="single-contact-info">
                  <h6>Phone:</h6>
                  <h5>(+123) 456-789-1120</h5>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="contact-content mb-100">
                <h4>Contact Form</h4>

                <div className="contact-form-area">
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="contact-name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="contact-email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="contact-phone"
                        placeholder="Phone"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn nikki-btn mt-15">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
