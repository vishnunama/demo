import React from 'react'
import { FaHeart, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import all_product from '../Assets/all_product'
import breadcrumbgradient from "../Assets/gradients/breadcrumb-gradient-bg.png"
import moon3 from "../Assets/shapes/element-moon3.png"
import moon2 from "../Assets/shapes/element-moon3.png"
import search from "../Assets/icons/search.svg"







function AllProduct() {
  return (
   <>


<section className="breadcrumb breadcrumb-one padding-y-60 section-bg position-relative z-index-1 overflow-hidden">
  <img src={breadcrumbgradient} alt className="bg--gradient" />
  <img src={moon3} alt className="element one" />
  <img src={moon2} alt className="element three" />
  <div className="container container-two">
    <div style={{height:"400px"}} className="row justify-content-center">
      <div className="col-lg-7">
        <div style={{padding:"150px 0px"}} className="breadcrumb-one-content">
          <h3 className="breadcrumb-one-content__title text-center mb-3 text-capitalize">20+ products available </h3>
          <p className="breadcrumb-one-content__desc text-center text-black-three">Explore the best premium themes and plugins available for sale. Our unique collection is hand-curated by experts. Find and buy the perfect premium theme.</p>
        
        </div>
      </div>
    </div>
  </div>
</section>


 <div class="col-xl-9 col-lg-8">
                <div class="tab-content" id="pills-tabContent">
                    
                </div>
            </div>


    <div style={{background:"whitesmoke"}} className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabIndex={0}>
          <div style={{margin:"5px"}} className="row gy-4">
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
   </>
  )
}

export default AllProduct