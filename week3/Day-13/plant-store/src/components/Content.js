import React from "react";

import "./Content.css";

import content1 from "../img/content1.jpg";
import content2 from "../img/content2.jpg";

function Content() {
  return (
    <div className="container_content">
      <div className="content_dalam">
        <div className="conten1">
          <img src={content1} alt="conten1" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore.
          </p>
          <button className="button">Read more</button>
        </div>
        <div className="conten2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore.
          </p>
          <button className="button">Read more</button>
          <img src={content2} alt="conten2" />
        </div>
      </div>
    </div>
  );
}
export default Content;
