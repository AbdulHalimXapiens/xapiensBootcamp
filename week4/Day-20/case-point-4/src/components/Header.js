import React, { useEffect, useState } from "react";
import axios from "axios";

// import Header from "../Header";

import "../css/header.css";

import utama from "../assets/image/utama.jpg";

export default function Header() {
  const [header, setHeader] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url:
        "https://raw.githubusercontent.com/AbdulHalimXapiens/case-point-4/master/case-point-4/src/home.json",
    }).then((res) => {
      setHeader(res.data);
    });
  }, [setHeader]);
  return (
    <div>
      {/* <Header /> */}

      <div className="head">
        <img
          src={utama}
          alt=""
          style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="container">
        <div className="row">
          {header.map((data, i) => (
            <div className="col-sm-6 caption">
              <h2>{data.judul}</h2>
              <p>{data.isi}</p>

              <a href="#">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
