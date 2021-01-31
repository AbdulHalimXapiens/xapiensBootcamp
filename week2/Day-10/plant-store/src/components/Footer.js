import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="umum">
      <div class="container"></div>
      <footer>
        <section class="ft-main">
          <div class="ft-main-item">
            <h2 class="ft-title1">PLANT .</h2>
            <p className="news">Newsletter</p>
            <form>
              <input type="email" name="email" placeholder="Enter Your Email" />
              <input type="submit" value="SUBSCRIBE" />
            </form>
          </div>
          <div class="ft-main-item2">
            <h2 class="ft-title">Product</h2>
            <ul>
              <li>
                <a href="#">Indoor</a>
              </li>
              <li>
                <a href="#">Outdoor</a>
              </li>
            </ul>
          </div>
          <div class="ft-main-item2">
            <h2 class="ft-title">About</h2>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div class="ft-main-item2">
            <h2 class="ft-title">Sosial Media</h2>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </div>
        </section>

        <section className="term">
          <p>Copyright 2021 by Abdul Halim</p>
          <p>Term of Service | Privacy Policy</p>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
