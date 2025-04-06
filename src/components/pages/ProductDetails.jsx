import React, { useContext, useState } from 'react'
import { ShopContext } from './ShopContext';
import banner1 from "../Assets/gradients/breadcrumb-gradient-bg.png"
import icon1 from "../Assets/icons/cart-icon.svg"
import icon2 from "../Assets/icons/cart-white.svg"
import icon3 from "../Assets/icons/check-icon-white.svg"
import icon4 from "../Assets/icons/check-icon.svg"
import { FaChevronRight, FaStar } from 'react-icons/fa';
import shareicon from "../Assets/icons/share-icon.svg"
import Cart from './Cart';
import carticon from "../Assets/icons/add-to-cart.svg"
import { Link } from 'react-router-dom';
import Popup from './Popup';
import all_product from '../Assets/all_product';
import checkcircle from "../Assets/icons/check-cirlce.svg"
import eyeoutline from "../Assets/icons/eye-outline.svg"
import logoicon from "../Assets/thumbs/author-details-img.png"
import badge1 from "../Assets/thumbs/badge1.png"
import badge2 from "../Assets/thumbs/badge2.png"
import badge3 from "../Assets/thumbs/badge3.png"
import badge4 from "../Assets/thumbs/badge4.png"
import badge5 from "../Assets/thumbs/badge5.png"
import badge6 from "../Assets/thumbs/badge6.png"
import badge7 from "../Assets/thumbs/badge7.png"
import badge8 from "../Assets/thumbs/badge8.png"
import { BsCart3 } from "react-icons/bs";













function ProductDetails(props) {

   const {product } = props;
  const {addToCart}=useContext(ShopContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentComments, setCurrentComments] = useState([]);

  const openModal = (comments) => {
    setCurrentComments(comments);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  

  

  return (
    < >
    
   <section  className="breadcrumb border-bottom p-0 d-block section-bg position-relative z-index-1">
  <div className="breadcrumb-two">
    <img src={banner1} alt className="bg--gradient" />
    <div  className="container container-two">
      <div className="row justify-content-center">
        <div  className="col-lg-12">
          <div    className="breadcrumb-two-content">
            <ul style={{paddingLeft:"0px"}} className="breadcrumb-list flx-align gap-2 mb-2 ">
              <li className="breadcrumb-list__item font-14 text-body">
                <Link to="/"  style={{fontWeight:"600"}}  className="breadcrumb-list__link text-body hover-text-main">Home</Link>
              </li>
              <li className="breadcrumb-list__item font-14 text-body">
                <span className="breadcrumb-list__icon font-10"><FaChevronRight className="fas fa-chevron-right" /></span>
              </li>
              <li className="breadcrumb-list__item font-14 text-body">
                <a  style={{fontWeight:"600"}} className="breadcrumb-list__link text-body hover-text-main">Products</a>
              </li>
              
            </ul>

                      <h3 style={{paddingLeft:"0px", textAlign:"left", fontWeight:"700", fontSize:"37px"}} className="breadcrumb-content flx-align mb-3 text-capitalize">{product.name}</h3>

            <div className="breadcrumb-content flx-align gap-3">
              <div className="breadcrumb-content__item text-heading fw-500 flx-align gap-2">
                <span  style={{fontWeight:"600"}} className="text">By <a className="link text-main fw-600">Oviousdev</a> </span>
              </div>
              <div className="breadcrumb-content__item text-heading fw-500 flx-align gap-2">
                <span className="icon">
                  <img src={icon1} alt className="white-version" />
                  <img src={icon2} alt className="dark-version w-20" />
                </span>
                <span  style={{fontWeight:"600"}} className="text">{product.sales} sales</span>
              </div>
              <div className="breadcrumb-content__item text-heading fw-500 flx-align gap-2">
                <span  className="icon">
                  <img src={icon4} alt className="white-version" />
                  <img src={icon3} alt className="dark-version" />
                </span>
                <span style={{fontWeight:"600"}} className="text">Recently Updated</span>
              </div>
              <div className="breadcrumb-content__item text-heading fw-500 flx-align gap-2">
                <span className="icon">
                  <img src={icon4} alt className="white-version" />
                  <img src={icon3} alt className="dark-version" />
                </span>
                <span  style={{fontWeight:"600"}} className="text">Well Documented</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container container-two">
    <div className="breadcrumb-tab flx-wrap align-items-start gap-lg-4 gap-2">
      <ul style={{flex:"none"}} className="nav tab-bordered nav-pills" id="pills-tab" role="tablist">
        
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-rating-tab" data-bs-toggle="pill" data-bs-target="#pills-rating" type="button" role="tab" aria-controls="pills-rating" aria-selected="false">
            <span className="d-flex align-items-center gap-1">
              <div className="star-rating">
      <span className="star-rating__item font-11"><FaStar /></span>
      <span className="star-rating__item font-11"><FaStar /></span>
      <span className="star-rating__item font-11"><FaStar /></span>
      <span className="star-rating__item font-11"><FaStar /></span>
      <span className="star-rating__item font-11"><FaStar /></span>
    </div>
              <span className="star-rating__text text-body"> 5.0</span>
              <span className="star-rating__text text-body">{product.sales}</span>
            </span>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-comments-tab" data-bs-toggle="pill" data-bs-target="#pills-comments" type="button" role="tab" aria-controls="pills-comments" aria-selected="false">Comments({product.comment})</button>
        </li>
      </ul>
      <div className="social-share">
        <button type="button" className="social-share__button">
          <img src={shareicon} alt />
        </button>
        <div className="social-share__icons">
          <ul className="social-icon-list colorful-style">
            <li className="social-icon-list__item">
              <a href="https://www.facebook.com/" className="social-icon-list__link text-body flex-center"><i className="fab fa-facebook-f" /></a> 
            </li>
            <li className="social-icon-list__item">
              <a href="https://www.twitter.com/" className="social-icon-list__link text-body flex-center"> <i className="fab fa-linkedin-in" /></a>
            </li>
            <li className="social-icon-list__item">
              <a href="https://www.google.com/" className="social-icon-list__link text-body flex-center"> <i className="fab fa-twitter" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<div style={{backgroundColor:"white"}} className="product-details mt-32 padding-b-120">
  <div className="container container-two">
    <div  className="row gy-4">
      <div className="col-lg-8">
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-product-details" role="tabpanel" aria-labelledby="pills-product-details-tab" tabIndex={0}>
            <div className="product-details">
              <div className="product-details__thumb">
                <img src={product.image} alt />
              </div>
              <div className="product-details__buttons flx-align justify-content-center gap-3">
                <a target='blank' href={product.livedemo} className="btn btn-main d-inline-flex align-items-center gap-2 pill px-sm-5 justify-content-center">Live Preview 
                  <img src={eyeoutline} alt /> 
                </a>
        <div  >

           

          {/* <a 
          
           className="btn btn-main d-inline-flex align-items-center gap-2 pill px-sm-5 justify-content-center" 
            onClick={() => openModal(product.comments)}
          >
            View Comments
          </a> */}

      {/* <Popup
        isOpen={isModalOpen}
        onClose={closeModal}
        comments={currentComments}
      /> */}
    </div>              </div>
              <p className="product-details__desc">{product.description}</p>
              <div className="product-details__item">
                <h5 className="product-details__title mb-3">Template Features</h5>
                <ul className="product-list">
                  <li className="product-list__item">Modern and Professional design</li>
                  <li className="product-list__item">Built with Elementor Pro</li>
                  <li className="product-list__item">100% Responsive &amp; mobile-friendly</li>
                  <li className="product-list__item">12+ pre-built templates</li>
                  <li className="product-list__item">Easy to customize</li>
                  <li className="product-list__item">Fully responsive website</li>
                </ul>
              </div>
              <div className="product-details__item">
                <h5 className="product-details__title mb-3">Layout Features</h5>
                <ul className="product-list">
                  <li className="product-list__item">One-Click demo import</li>
                  <li className="product-list__item">Unlimited color style</li>
                  <li className="product-list__item">850+ google fonts</li>
                  <li className="product-list__item">Powered by dpmarket</li>
                  <li className="product-list__item">Hight resolution images</li>
                  <li className="product-list__item">Easy to customize</li>
                </ul>
              </div>
              <div className="product-details__item">
                <h5 className="product-details__title mb-3">Font Family</h5>
                <ul className="product-list">
                  <li className="product-list__item text-heading">
                    <a href="https://fonts.google.com/specimen/Fira+Sans?query=fira" className="link text-body hover-text-main hover-text-decoration-underline">Fira Sans</a>
                  </li>
                  <li className="product-list__item text-heading">
                    <a href="https://fonts.google.com/specimen/Inter?query=inter" className="link text-body hover-text-main hover-text-decoration-underline">Inter</a>
                  </li>
                </ul>
              </div>
              <div className="product-details__item">
                <h5 className="product-details__title mb-3">Support</h5>
                <p className="product-details__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              </div>
           
            </div>
            {/* Product Details Content End */}
          </div>
          <div className="tab-pane fade" id="pills-rating" role="tabpanel" aria-labelledby="pills-rating-tab" tabIndex={0}>
            <div className="product-review-wrapper">
              <div className="product-review">
                <div className="product-review__top flx-between">
                  <div className="product-review__rating flx-align">
                    <div className="d-flex align-items-center gap-1">
                      <ul className="star-rating">
                        <li className="star-rating__item font-11"><i className="fas fa-star" /></li>
                        <li className="star-rating__item font-11"><i className="fas fa-star" /></li>
                        <li className="star-rating__item font-11"><i className="fas fa-star" /></li>
                        <li className="star-rating__item font-11"><i className="fas fa-star" /></li>
                        <li className="star-rating__item font-11"><i className="fas fa-star" /></li>
                      </ul>
                      <span className="star-rating__text text-body"> 5.0</span>
                    </div>
                    <span className="product-review__reason">For <span className="product-review__subject">Customer Support</span> </span>
                  </div>
                  <div className="product-review__date">
                    by <a href="#" className="product-review__user text--base">John Doe </a> 2 month ago
                  </div>
                </div>
                <div className="product-review__body">
                  <p className="product-review__desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam itaque vitae ex possimus delectus? Voluptas expedita accusantium aperiam quo quod dolore dignissimos rerum praesentium deserunt libero recusandae quisquam est accusamus eos dolorum sit explicabo, sapiente pariatur voluptates veniam aut veritatis, magnam velit similique! Ex similique magni labore aperiam, eius quas molestiae accusantium porro eaque esse minus amet doloribus quo odit illo doloremque.</p>
                </div>
              </div>
              <div className="product-review">
                <div className="product-review__top flx-between">
                  <div className="product-review__rating flx-align">
                    <div className="d-flex align-items-center gap-1">
                      <ul className="star-rating">
                        <li className="star-rating__item font-11"><i className="fas fa-star" /></li>
                        <li className="star-rating__item font-11"><i className="fas fa-star" /></li>
                        <li className="star-rating__item font-11"><i className="fas fa-star" /></li>
                        <li className="star-rating__item font-11"><i className="fas fa-star" /></li>
                        <li className="star-rating__item font-11"><i className="fas fa-star" /></li>
                      </ul>
                      <span className="star-rating__text text-body"> 5.0</span>
                    </div>
                    <span className="product-review__reason">For <span className="product-review__subject">Customer Support</span> </span>
                  </div>
                  <div className="product-review__date">
                    by <a href="#" className="product-review__user text--base">John Doe </a> 2 month ago
                  </div>
                </div>
                <div className="product-review__body">
                  <p className="product-review__desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam itaque vitae ex possimus delectus? Voluptas expedita accusantium aperiam quo quod dolore dignissimos rerum praesentium deserunt libero recusandae quisquam est accusamus eos dolorum sit explicabo, sapiente pariatur voluptates veniam aut veritatis, magnam velit similique! Ex similique magni labore aperiam, eius quas molestiae accusantium porro eaque esse minus amet doloribus quo odit illo doloremque.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-comments" role="tabpanel" aria-labelledby="pills-comments-tab" tabIndex={0}>
            {/* Comment Start */}
            <div className="comment mt-64 mb-64">
              <h5 className="mb-32">2 Comments</h5>
              <ul className="comment-list">
                <li className="comment-list__item d-flex align-items-start gap-sm-4 gap-3">
                  <div className="comment-list__thumb flex-shrink-0">
                    <img src="assets/images/thumbs/comment1.png" className="cover-img" alt />
                  </div>
                  <div className="comment-list__content">
                    <div className="flx-between gap-2 align-items-start">
                      <div>
                        <h6 className="comment-list__name font-18 mb-sm-2 mb-1">Jenny Wilson</h6>
                        <span className="comment-list__date font-14">Jan 21, 2024 at 11:25 pm</span>
                      </div>
                      <a className="comment-list__reply fw-500 flx-align gap-2 hover-text-decoration-underline" href="#comment-box"> 
                        Reply 
                        <span className="icon"><img src="assets/images/icons/reply-icon.svg" alt /></span>
                      </a>
                    </div>
                    <p className="comment-list__desc mt-3">Lorem ipsum dolor sit amet consectetur. Nec nunc pellentesque massa pretium. Quam sapien nec venenatis vivamus sed cras faucibus mi viverra. Quam faucibus morbi cras vitae neque. Necnunc pellentesque massa pretium.</p>
                  </div>
                </li>
                <li>
                  <ul className="comment-list comment-list--two">
                    <li className="comment-list__item d-flex align-items-start gap-sm-4 gap-3">
                      <div className="comment-list__thumb flex-shrink-0">
                        <img src="assets/images/thumbs/comment2.png" className="cover-img" alt />
                      </div>
                      <div className="comment-list__content">
                        <div className="flx-between gap-2 align-items-start">
                          <div>
                            <h6 className="comment-list__name font-18 mb-sm-2 mb-1">Courtney Henry</h6>
                            <span className="comment-list__date font-14">Jan 21, 2024 at 11:25 pm</span>
                          </div>
                          <a className="comment-list__reply fw-500 flx-align gap-2 hover-text-decoration-underline" href="#comment-box"> 
                            Reply 
                            <span className="icon"><img src="assets/images/icons/reply-icon.svg" alt /></span>
                          </a>
                        </div>
                        <p className="comment-list__desc mt-3">Lorem ipsum dolor sit amet consectetur. Nec nunc pellentesque massa pretium. Quam sapien nec venenatis vivamus sed cras faucibus.</p>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* Comment End */}
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        {/* ======================= Product Sidebar Start ========================= */}
        <div style={{backgroundColor:"#F5F7F9"}} className="product-sidebar ">
        
      
        

          <button
          onClick={()=>{addToCart(product.id)}}
      type="button"
      className="btn btn-main d-flex w-100 justify-content-center align-items-center gap-2 pill px-sm-5 mt-32"
    >
      <img src={carticon} alt="Add to Cart" />
      Add To Cart
    </button>
   





          {/* <Cart/> */}


          {/* Author Details Start*/}
      
          {/* Author Details End */}
          {/* Meta Attribute List Start */}
          <ul className="meta-attribute">
            <li className="meta-attribute__item">
              <span className="name">Last Update</span>
              <span className="details">{product.updatedate}</span>
            </li>
            <li className="meta-attribute__item">
              <span className="name">Published</span>
              <span className="details">{product.published}</span>
            </li>
            <li className="meta-attribute__item">
              <span className="name">Technology</span>
              <span className="details">{product.technology}</span>
            </li>
           
            <li className="meta-attribute__item">
              <span className="name">High Resolution</span>
              <span className="details">Yes</span>
            </li>
           
            <li className="meta-attribute__item">
              <span className="name">File size</span>
              <span className="details">85 MB</span>
            </li>
            <li className="meta-attribute__item">
              <span className="name">Framework</span>
              <span className="details">Underscores</span>
            </li>
           
           
            <li className="meta-attribute__item">
              <span className="name">Layout</span>
              <span className="details">Responsive</span>
            </li>
            <li className="meta-attribute__item">
              <span className="name">Tags</span>
              <span className="details">
                <a href="#" className="hover-text-decoration-underline">theme,</a>
                <a href="#" className="hover-text-decoration-underline">web design,</a>
                <a href="#" className="hover-text-decoration-underline">minimal design,</a>
                <a href="#" className="hover-text-decoration-underline">trendy,</a>
                <a href="#" className="hover-text-decoration-underline">responsive,</a>
                <a href="#" className="hover-text-decoration-underline">wordpress,</a>
                <a href="#" className="hover-text-decoration-underline">saas,</a>
                <a href="#" className="hover-text-decoration-underline">dashboard,</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  </div>
    <div className="fixed-buttons">
      <div onClick={()=>{addToCart(product.id)}}
       className="cart">
        <span className="cart-icon">
          <BsCart3 /> Add to Cart
        </span>
      </div>
      
      <Link  to='/MailingAddress' className="buy-now">Buy Now</Link>

      
    </div>
  
</div>

    
    </>


  )
}

export default ProductDetails