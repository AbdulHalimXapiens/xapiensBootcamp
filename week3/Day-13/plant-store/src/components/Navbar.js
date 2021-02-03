import React from "react";

import "./Navbar.css";

import img from "../img/utama.jpg";

function Navbar() {
  return (
    <>
      <div>
        <nav
          class="navbar is-fixed-top"
          role="navigation"
          aria-label="main navigatyle={{color: }}>tion"
          style={{ backgroundColor: "#BABFBB" }}
        >
          <div class="navbar-brand">
            <a class="navbar-item judul" href="">
              Plant .
            </a>

            <a
              role="button"
              class="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item warna">Home</a>
              <a class="navbar-item warna">Product</a>
              <a class="navbar-item warna">Blog</a>
              <a class="navbar-item warna">About</a>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <div>
          <img className="utama" src={img} alt="utama" />
          <p className="p1">CREATE YOUR OWN SMALL GARDEN</p>
          <p className="p2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <button className="button">Learn more</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
