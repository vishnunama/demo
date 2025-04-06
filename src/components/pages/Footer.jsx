import React from 'react'
import patten from "../Assets/shapes/pattern.png"
import element1 from "../Assets/shapes/element1.png"
import element2 from "../Assets/shapes/element2.png"
import footergradient from "../Assets/gradients/footer-gradient.png"
import whitelogo from "../Assets/logo/white-logo.png"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaYoutube } from 'react-icons/fa';





function Footer() {
  return (
    <>
    <footer style={{backgroundColor:"#020525"}} className="footer-section ">
  <img src={patten} alt className="bg-pattern" />
  <img src={element1} alt className="element one" />
  <img src={element2} alt className="element two" />
  <img src={footergradient} alt className="bg--gradient" />
  <div className="container container-two">
    <div className="row gy-5">
      <div className="col-xl-3 col-sm-6">
        <div className="footer-widget">
          <div className="footer-widget__logo">
            <a href="index-2.html"> <img src={whitelogo} alt /></a>
          </div>
          <p className="footer-widget__desc">Lorem consultancy elitsed do eiusmod tempor inci didunt ut labore dolore magna aliqua sed do eiusmod.</p>                    
          <div className="footer-widget__social">
      <ul className="social-icon-list">
        <li className="social-icon-list__item">
          <a href="https://www.facebook.com/" className="social-icon-list__link flx-center">
            <FaFacebookF />
          </a>
        </li>
        <li className="social-icon-list__item">
          <a href="https://www.twitter.com/" className="social-icon-list__link flx-center">
            <FaTwitter />
          </a>
        </li>
        <li className="social-icon-list__item">
          <a href="https://www.linkedin.com/" className="social-icon-list__link flx-center">
            <FaLinkedinIn />
          </a>
        </li>
        <li className="social-icon-list__item">
          <a href="https://www.pinterest.com/" className="social-icon-list__link flx-center">
            <FaPinterestP />
          </a>
        </li>
        <li className="social-icon-list__item">
          <a href="https://www.youtube.com/" className="social-icon-list__link flx-center">
            <FaYoutube />
          </a>
        </li>
      </ul>
    </div>
        </div>
      </div>
      <div className="col-xl-2 col-sm-6 col-xs-6">
        <div className="footer-widget">
          <h5 className="footer-widget__title text-white">Useful Link</h5>
          <ul className="footer-lists">
            <li className="footer-lists__item"><a href="all-product.html" className="footer-lists__link">Product </a></li>
            <li className="footer-lists__item"><a href="product-details.html" className="footer-lists__link">Product Details</a></li>
            <li className="footer-lists__item"><a href="profile.html" className="footer-lists__link">Profile </a></li>
            <li className="footer-lists__item"><a href="cart.html" className="footer-lists__link">Shopping Cart</a></li>
            <li className="footer-lists__item"><a href="dashboard.html" className="footer-lists__link">Dashboard</a></li>
          </ul>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 col-xs-6 ps-xl-5">
        <div className="footer-widget">
          <h5 className="footer-widget__title text-white">Quick Links</h5>
          <ul className="footer-lists">
            <li className="footer-lists__item"><a href="dashboard.html" className="footer-lists__link">Dashboard </a></li>
            <li className="footer-lists__item"><a href="login.html" className="footer-lists__link">Login </a></li>
            <li className="footer-lists__item"><a href="register.html" className="footer-lists__link">Register</a></li>
            <li className="footer-lists__item"><a href="blog.html" className="footer-lists__link">Blog </a></li>
            <li className="footer-lists__item"><a href="blog-details.html" className="footer-lists__link">Blog Details</a></li>
          </ul>
        </div>
      </div>
      <div className="col-xl-4 col-sm-6">
        <div className="footer-widget">
          <h5 className="footer-widget__title text-white">Subscribe</h5>
          <p className="footer-widget__desc">Subscribe our newsletter to get updated the latest news</p>
          <form action="#" className="mt-4 subscribe-box d-flex align-items-center flex-column gap-2">
            <input type="text" className="form-control common-input pill text-white" placeholder="Enter Mail" />
            <button type="submit" className="btn btn-main btn-lg w-100 pill">Subscribe Now</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer