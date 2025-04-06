import React from 'react'
import { Link } from 'react-router-dom'
// import ShoppingCart from './ShoppingCart'
import breadcrumbgradient from "../Assets/gradients/breadcrumb-gradient-bg.png"
import moon3 from "../Assets/shapes/element-moon3.png"
import moon1 from "../Assets/shapes/element-moon1.png"
import white1 from "../Assets/icons/process-white1.svg"
import white2 from "../Assets/icons/process-white2.svg"
import white3 from "../Assets/icons/process-white3.svg"
import white4 from "../Assets/icons/process-white4.svg"









function CartPage() {
  return (
    
    <>
   <section className="breadcrumb breadcrumb-four padding-static-y-60 section-bg position-relative z-index-1 overflow-hidden">
  <img src={breadcrumbgradient} alt className="bg--gradient" />
  <img src={moon3} alt className="element one" />
  <img src={moon1} alt className="element three" />
  <div className="container container-two">
    <div className="row justify-content-center">
      <div className="col-lg-12">
        <div className="breadcrumb-four-content">
          <h3  className="breadcrumb-four-content__title text-center mb-3 text-capitalize">Shopping Cart</h3>
          
          <ul className="process-list">
            <li className="process-list__item activePage">
              <a href="cart.html" className="process-list__link">
                <div className="icons">
                  <span className="icon white"><img src={white1} alt /></span>
                </div>
                <span className="text">Shopping Cart</span>
              </a>
            </li>
            <li className="process-list__item activePage">
              <a href="cart-personal.html" className="process-list__link">
                <div className="icons">
                  <span className="icon white"><img src={white2} alt /></span>
                  <span className="icon colored"><img src="assets/images/icons/process2.svg" alt /></span>
                </div>
                <span className="text">Mailing Address</span>
              </a>
            </li>
            <li className="process-list__item activePage">
              <a href="cart-payment.html" className="process-list__link">
                <div className="icons">
                  <span className="icon white"><img src={white3} alt /></span>
                  <span className="icon colored"><img src="assets/images/icons/process3.svg" alt /></span>
                </div>
                <span className="text">Payment Methods</span>
              </a>
            </li>
            <li className="process-list__item">
              <a href="cart-thank-you.html" className="process-list__link">
                <div className="icons">
                  <span className="icon white"><img src={white4} alt /></span>
                  <span className="icon colored"><img src={white4} alt /></span>
                </div>
                <span className="text">Preview Order</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

  {/* <ShoppingCart /> */}
    </>



  )
}

export default CartPage


