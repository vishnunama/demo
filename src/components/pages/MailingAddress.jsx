import React, { useContext, useState } from "react";
import CartPage from "./CartPage";
import { ShopContext } from "./ShopContext";
import razarpay from "../Assets/razorpay-logo.png"
import cartreverse from "../Assets/icons/cart-reverse.svg"
import cartwhite from "../Assets/icons/cart-white.svg"


import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";


function MailingAddress() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "India",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

 const { all_product, cartItems } = useContext(ShopContext);

  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  // Calculate total amount and item count
const totalAmount = all_product.reduce((total, e) => {
  if (cartItems[e.id] > 0) {
    total += e.new_price * cartItems[e.id];
  }
  return total;
}, 0);

const totalItems = Object.values(cartItems).reduce((count, quantity) => count + quantity, 0);


//   const totalAmount = 274.00; // Replace this with dynamic value if needed

  const handlePayment = () => {
  if (!email) {
    alert("Please enter a valid email address.");
    return;
  }

  if (paymentMethod !== "razorpay") {
    alert("Please select Razorpay as your payment method.");
    return;
  }

  // Total amount with handling fee
  const finalAmount = (totalAmount + 15).toFixed(2);

  const options = {
    key: "rzp_test_vv1FCZvuDRF6lQ", // Replace with your Razorpay key
    amount: finalAmount * 100, // Amount in paise
    currency: "INR",
    name: "Web Mastery",
    description: `Payment for your order (₹${finalAmount})`,
    image: "https://your-logo-url.com/logo.png", // Optional: Add your logo URL
    handler: function (response) {
      console.log("Payment successful! Razorpay ID:", response.razorpay_payment_id);
      alert(`Payment Successful! Amount Paid: ₹${finalAmount}`);
    },
    prefill: {
      email, // Prefill the user's email address
    },
    theme: {
      color: "#07a291", // Customize the theme color
    },
  };

  const paymentGateway = new window.Razorpay(options);
  paymentGateway.open();
};

  return (
    <div style={{backgroundColor:"white"}}>
      <div>
        <CartPage />
      </div>
      <section className="cart-personal padding-y-120">
        <div className="container container-two">
          <div className="row gy-5">
            <div className="col-lg-8 pe-sm-5">
              <div className="cart-personal__content">
                {/* <h5 className="cart-personal__title mb-32">Personal information</h5> */}
                



                <div style={{backgroundColor:"#F5F7F9"}} className="billing-address-container">
  <h3 className="billing-title">Billing Address</h3>
  <form onSubmit={handleSubmit}>
    <div className="form-row">
      <div className="form-group">
        <label className="form-label">First Name</label>
        <input
          className="input-field"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">Last Name</label>
        <input
          className="input-field"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
      </div>
    </div>

    <div className="form-group">
      <label className="form-label">Address Line 1</label>
      <input
        className="input-field"
        type="text"
        name="address1"
        value={formData.address1}
        onChange={handleChange}
        placeholder="Address line 1"
        required
      />
    </div>
    <div className="form-group">
      <label className="form-label">Address Line 2</label>
      <input
        className="input-field"
        type="text"
        name="address2"
        value={formData.address2}
        onChange={handleChange}
        placeholder="Address line 2"
      />
    </div>

    <div className="form-row">
      <div className="form-group">
        <label className="form-label">City</label>
        <input
          className="input-field"
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">State</label>
        <input
          className="input-field"
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="State"
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">Postal Code</label>
        <input
          className="input-field"
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          placeholder="Postal Code"
          required
        />
      </div>
    </div>

    <div className="form-group">
      <label className="form-label">Country</label>
      <select
        className="select-field"
        name="country"
        value={formData.country}
        onChange={handleChange}
      >
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
      </select>
    </div>
    <button
      className="btn btn-outline-light pill btn-lg w-100 mt-32"
    >
Submit
    </button>
  </form>
</div>

   
              </div>

              {/* Payment Method */}
              <div className="card common-card shadow mt-4">
                <div className="card-header p-4 bg-white">
                  <h6 className="mb-0">Payment Method</h6>
                </div>
                <div className="card-body p-4">
                  <div className="payment-select-card-wrapper">
                     <form>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="form-label font-18 mb-2 fw-500 font-heading"
                    >
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="common-input"
                      id="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </form>
                    <div className="payment-select-card mb-4">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-3">
                          <div className="common-check common-radio mb-0">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="radio"
                              id="razorpay"
                              value="razorpay"
                              onChange={(e) => setPaymentMethod(e.target.value)}
                              required
                            />
                            <label className="form-check-label" htmlFor="razorpay"> </label>
                          </div>
                          <div>
                            <h6 className="font-16 mb-0">Razorpay</h6>
                            <p className="font-14">Secure payment gateway for your transactions.</p>
                          </div>
                        </div>
                        <div className="payment-select-card__logo">
                          <img
                          src={razarpay}
                            alt="Razorpay Logo"
                            width="100"
                          />
                        </div>
                      </div>
                      
                    </div>
                    
                  </div>
                </div>
              </div>

              {/* Purchase Button */}
              <div className="cart-content__bottom flx-between gap-2">
                <Link to="/cart" >
                <a
                 
                  className="btn btn-outline-light flx-align gap-2 pill btn-lg"
                >
                  <span className="icon line-height-1 font-20">
<FaArrowLeft style={{ fontSize: "14px", color: "#000" }} /> 
                 </span>
                  Back
                </a>
                </Link>
                <button
                  type="button"
                  className="btn btn-main flx-align gap-2 pill btn-lg"
                  onClick={handlePayment}
                >
Process To Payment   
                </button>
              </div>
            </div>
          <div className="col-lg-4">
  <div className="order-summary">
    <h5 className="order-summary__title mb-32">Order Summary</h5>
    <ul className="billing-list">
      {/* Display Total Item Price */}
      <li className="billing-list__item flx-between">
        <span className="text text-heading fw-500">You have {totalItems} items</span>
        <span className="amount text-heading fw-500">₹{totalAmount.toFixed(2)}</span>
      </li>
      
      {/* Handling Fee */}
      <li className="billing-list__item flx-between">
        <span className="text text-heading fw-500">Handling Fee</span>
        <span className="amount text-body">₹15.00</span>
      </li>
      
      {/* Grand Total */}
      <li className="billing-list__item flx-between">
        <span className="text text-heading fw-500">Total</span>
        <span className="amount text-heading font-20 fw-500 font-heading">
          ₹{(totalAmount + 15).toFixed(2)}
        </span>
      </li>
    </ul>
    
    <button
      className="btn btn-outline-light pill btn-lg w-100 mt-32"
      onClick={handlePayment}
    >
      <span class="icon icon-left">
<img src={cartreverse} alt classname="white-version" />
<img src={cartwhite} alt className="dark-version" />
   </span> 
      Purchase Now
    </button>
  </div>
</div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default MailingAddress;
