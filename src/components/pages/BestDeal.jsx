import React from 'react';
import { Link } from 'react-router-dom';
import './BestDeal.css'; // Make sure this contains the CSS used in the second code
import { FaHeart, FaStar } from 'react-icons/fa'; // Importing FaStar icon from react-icons
import all_product from '../Assets/all_product';

import p1_img from '../Assets/product_1.png';
import p2_img from '../Assets/product_2.png';
import p3_img from '../Assets/product_3.png';
import p4_img from '../Assets/product_4.png';
import productgradient from '../Assets/gradients/product-gradient.png';
import element2 from '../Assets/shapes/element2.png';

function BestDeal() {
  return (
    <section className="arrival-product padding-y-120 section-bg position-relative z-index-1">
      <img src={productgradient} alt="" className="bg--gradient white-version" />
      <img src={element2} alt="" className="element one" />
      <div className="container container-two">
        <div className="section-heading">
          <h3 className="section-heading__title">Games Categories</h3>
        </div>

        <ul className="nav common-tab justify-content-center nav-pills mb-48" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">All Games</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-wordPress-tab" data-bs-toggle="pill" data-bs-target="#pills-wordPress" type="button" role="tab" aria-controls="pills-wordPress" aria-selected="false">Tiranga Game</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-php-tab" data-bs-toggle="pill" data-bs-target="#pills-php" type="button" role="tab" aria-controls="pills-php" aria-selected="false">BDG Game</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-siteTemplate-tab" data-bs-toggle="pill" data-bs-target="#pills-siteTemplate" type="button" role="tab" aria-controls="pills-siteTemplate" aria-selected="false">91 club</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-blogging-tab" data-bs-toggle="pill" data-bs-target="#pills-blogging" type="button" role="tab" aria-controls="pills-blogging" aria-selected="false">DUE Win Game</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-marketing-tab" data-bs-toggle="pill" data-bs-target="#pills-marketing" type="button" role="tab" aria-controls="pills-marketing" aria-selected="false">Daman</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-plugins-tab" data-bs-toggle="pill" data-bs-target="#pills-plugins" type="button" role="tab" aria-controls="pills-plugins" aria-selected="false">6 Club game</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-uiTemplate-tab" data-bs-toggle="pill" data-bs-target="#pills-uiTemplate" type="button" role="tab" aria-controls="pills-uiTemplate" aria-selected="false">Jalwa Game</button>
          </li>
        </ul>

        <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabIndex={0}>
          <div className="row gy-4">
            {all_product.map((product, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
                  {/* Product Thumbnail */}
                  <div className="product-item__thumb d-flex">
                    <Link to={`/product/${product.id}`} state={product} className="link w-100">
                      <img src={product.image} alt={product.title} className="cover-img" />
                    </Link>
                    <button type="button" className="product-item__wishlist">
                      <FaHeart />
                    </button>
                  </div>

                  {/* Product Content */}
                  <div className="product-item__content">
                    <h6 className="product-item__title">{product.name}</h6>
                    <div  className="product-item__info ">
                      <span className="product-item__author">
                        by <a className="link hover-text-decoration-underline">Gametech</a>
                      </span>
                      <div style={{marginTop:"20px"}} >
                        <h6>Login Details</h6>
                        <div>
                        <h6 className="product-item__price mb-0">ID:-{product.gameid}</h6>
                        <span className="">
                          Pass:-{product.gamepassword}
                        </span>
                        </div>
                      </div>
                    </div>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-2">{product.sales} Sales</span>
                        <div style={{ marginLeft: "-30px" }} className="d-flex align-items-center gap-1">
                          <ul className="star-rating">
                            {Array.from({ length: 5 }, (_, idx) => (
                              <li key={idx} className="star-rating__item font-11">
                                <FaStar />
                              </li>
                            ))}
                            <span className="star-rating__text text-heading fw-500 font-14">({product.reviews})</span>
                          </ul>
                        </div>
                      </div>
                      <Link target='blank' to= {product.livedemo} className="link ">
                        <a className="btn btn-outline-light btn-sm pill">Live Demo</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </section>
  );
}

export default BestDeal;
