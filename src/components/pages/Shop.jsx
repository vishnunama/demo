import React from 'react'
import "./shop.css"

import BestDeal from './BestDeal';
import Home from './Home';

function Shop() {
  return (
    <div className='Shop'>



    {/* <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabIndex={0}>
          <div className="row gy-4">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item ">
                <div className="product-item__thumb d-flex">
                  <a href="product-details.html" className="link w-100">
                    <img src="assets/images/thumbs/product-img1.png" alt className="cover-img" /> 
                  </a>
                  <button type="button" className="product-item__wishlist"><i className="fas fa-heart" /></button>
                </div>
                <div className="product-item__content">
                  <h6 className="product-item__title">
                    <a href="product-details.html" className="link">SaaS dashboard digital products Title here</a>
                  </h6>
                  <div className="product-item__info flx-between gap-2">
                    <span className="product-item__author">
                      by
                      <a href="profile.html" className="link hover-text-decoration-underline"> themepix</a>
                    </span>
                    <div className="flx-align gap-2">
                      <h6 className="product-item__price mb-0">$120</h6>
                      <span className="product-item__prevPrice text-decoration-line-through">$259</span>
                    </div>
                  </div>
                  <div className="product-item__bottom flx-between gap-2">
                    <div>
                      <span className="product-item__sales font-14 mb-2">1200 Sales</span>
                      <div className="d-flex align-items-center gap-1">
                        <ul className="star-rating">
                          <li className="star-rating__item font-11"><i className="fas fa-star" /></li>
                          <li className="star-rating__item font-11"><i className="fas fa-star" /></li>
                          <li className="star-rating__item font-11"><i className="fas fa-star" /></li>
                          <li className="star-rating__item font-11"><i className="fas fa-star" /></li>
                          <li className="star-rating__item font-11"><i className="fas fa-star" /></li>
                        </ul>
                        <span className="star-rating__text text-heading fw-500 font-14"> (16)</span>
                      </div>
                    </div>
                    <a href="product-details.html" className="btn btn-outline-light btn-sm pill">Live Demo</a>
                  </div>
                </div>
              </div>
            </div>
           
           
          </div>
        </div> */}


     
      <Home/>
      <BestDeal/>
     
    </div>
  )
}

export default Shop;