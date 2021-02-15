import React, { useEffect, useState } from "react";
import axios from "axios";

import "../../css/blog.css";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url:
        "https://raw.githubusercontent.com/AbdulHalimXapiens/case-point-4/master/case-point-4/src/blog.json",
    }).then((res) => {
      setBlogs(res.data);
    });
  }, [setBlogs]);

  return (
    <div>
      <section className="blog-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-9" style={{ margin: "auto" }}>
              {blogs.map((data, i) => (
                <div key={i} className="blog-item">
                  <div className="bi-pic">
                    <img src={data.img_blog} alt="" />
                  </div>
                  <div className="bi-text">
                    <h5>
                      <a href="./blog-details.html">{data.judul_blog}</a>
                    </h5>

                    <p>{data.isi_judul_blog}</p>
                  </div>
                </div>
              ))}

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

export default Blog;
