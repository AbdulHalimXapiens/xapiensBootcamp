import React from "react";

import Header from "../Header";

import "../../asset/css/home.css";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 caption">
              <h2>CREATE YOUR OWN SMALL GARDEN</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur nam quis autem tempore repellat consectetur nobis
                maxime maiores quisquam, vero illo magnam possimus iusto
                pariatur recusandae. Culpa nostrum officiis praesentium!
              </p>

              <a href="#">Learn More</a>
            </div>
          </div>
        </div>
      </section>
      <section className="isi">
        <div className="container">
          <div></div>
        </div>
      </section>
    </div>
  );
}
