import React from "react";

import "../../asset/css/product.css";
import product1 from "../../asset/image/product/shop1.jpg";
import product2 from "../../asset/image/product/shop2.jpg";
import product3 from "../../asset/image/product/shop3.jpg";
import product4 from "../../asset/image/product/shop4.jpg";
import product5 from "../../asset/image/product/shop5.jpg";
import product6 from "../../asset/image/product/shop6.jpg";

function App() {
  return (
    <section className="shop spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="product__item">
              <div className="product__item__pic set-bg">
                <img src={product1} />
              </div>
              <div className="product__item__text">
                <h6>
                  <a href="#">Euphorbia regis-jubae</a>
                </h6>
                <div className="product__item__price">$32.00</div>
                <div className="cart_add">
                  <a href="#">Add to cart</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="product__item">
              <div className="product__item__pic set-bg">
                <img src={product2} />
              </div>
              <div className="product__item__text">
                <h6>
                  <a href="#">Dendrolirium lasiopetalum</a>
                </h6>
                <div className="product__item__price">$30.00</div>
                <div className="cart_add">
                  <a href="#">Add to cart</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="product__item">
              <div className="product__item__pic set-bg">
                <img src={product3} />
              </div>
              <div className="product__item__text">
                <h6>
                  <a href="#">Trillium flexipes</a>
                </h6>
                <div className="product__item__price">$31.00</div>
                <div className="cart_add">
                  <a href="#">Add to cart</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="product__item">
              <div className="product__item__pic set-bg">
                <img src={product4} />
              </div>
              <div className="product__item__text">
                <h6>
                  <a href="#">Cookie Dough</a>
                </h6>
                <div className="product__item__price">$25.00</div>
                <div className="cart_add">
                  <a href="#">Add to cart</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="product__item">
              <div className="product__item__pic set-bg">
                <img src={product5} />
              </div>
              <div className="product__item__text">
                <h6>
                  <a href="#"> coleus wizard</a>
                </h6>
                <div className="product__item__price">$05.00</div>
                <div className="cart_add">
                  <a href="#">Add to cart</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="product__item">
              <div className="product__item__pic set-bg">
                <img src={product6} />
              </div>
              <div className="product__item__text">
                <h6>
                  <a href="#">Copper Dahlia</a>
                </h6>
                <div className="product__item__price">$14.00</div>
                <div className="cart_add">
                  <a href="#">Add to cart</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="product__item">
              <div className="product__item__pic set-bg">
                <img src={product1} />
              </div>
              <div className="product__item__text">
                <h6>
                  <a href="#">Euphorbia regis-jubae</a>
                </h6>
                <div className="product__item__price">$32.00</div>
                <div className="cart_add">
                  <a href="#">Add to cart</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="product__item">
              <div className="product__item__pic set-bg">
                <img src={product3} />
              </div>
              <div className="product__item__text">
                <h6>
                  <a href="#">Trillium flexipes</a>
                </h6>
                <div className="product__item__price">$08.00</div>
                <div className="cart_add">
                  <a href="#">Add to cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shop__last__option">
          <div className="row">
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

export default App;
