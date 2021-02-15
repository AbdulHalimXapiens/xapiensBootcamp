import React, { useEffect, useState } from "react";
import axios from "axios";

import "../../css/contact.css";

function Contact() {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url:
        "https://raw.githubusercontent.com/AbdulHalimXapiens/case-point-4/master/case-point-4/src/contact.json",
    }).then((res) => {
      setContact(res.data);
    });
  }, [setContact]);
  return (
    <div>
      <section className="contact-area section-padding-100-0 spasi">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              {contact.map((data, i) => (
                <div className="contact-content mb-100">
                  <h4>Get In Touch</h4>
                  <p>{data.intro}</p>

                  <div className="single-contact-info">
                    <h6>Location:</h6>
                    <h5>{data.lokasi}</h5>
                  </div>

                  <div className="single-contact-info">
                    <h6>Email:</h6>
                    <h5>{data.email}</h5>
                  </div>

                  <div className="single-contact-info">
                    <h6>Phone:</h6>
                    <h5>{data.phone}</h5>
                  </div>
                </div>
              ))}
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

export default Contact;
