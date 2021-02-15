import React, { useEffect, useState } from "react";
import axios from "axios";

import "../../css/product.css";

function Produk() {
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url:
        "https://raw.githubusercontent.com/AbdulHalimXapiens/case-point-4/master/case-point-4/src/produk.json",
    }).then((res) => {
      setProduk(res.data);
    });
  }, [setProduk]);

  return (
    <section className="shop spad">
      <div className="container">
        <div className="row">
          {produk.map((data, i) => (
            <div key={i} className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div className="product__item__pic set-bg">
                  <img src={data.img_produk} />
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">{data.nama_produk}</a>
                  </h6>
                  <div className="product__item__price">
                    ${data.harga_produk}
                  </div>
                  <div className="cart_add">
                    <a href="#">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="shop__last__option">
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="shop__pagination">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Produk;
