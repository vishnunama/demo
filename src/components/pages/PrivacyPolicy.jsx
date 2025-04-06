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
import { FiChevronRight } from 'react-icons/fi'

function PrivacyPolicy() {
  return (
    <>
      <div>
        <section style={{ height: "30vh" }} className="breadcrumb breadcrumb-four padding-static-y-60 section-bg position-relative z-index-1 overflow-hidden">
          <img src={breadcrumbgradient} alt className="bg--gradient" />
          <img src={moon3} alt className="element one" />
          <img src={moon1} alt className="element three" />
          <div className="container container-two">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div style={{ marginTop: "70px" }} className="breadcrumb-four-content">
                  <h4 style={{ fontWeight: "800", fontSize: "35px" }} className="breadcrumb-four-content__title text-center mb-3 text-capitalize">Privacy policy</h4>
                  <ul style={{ marginRight: "25px" }} className="breadcrumb-list flx-align justify-content-center gap-2 mb-2">
                    <li className="breadcrumb-list__item font-14 text-body">
                      <Link to="/" href="index-2.html" className="breadcrumb-list__link text-body hover-text-main">Home</Link>
                    </li>
                    <li className="breadcrumb-list__item font-14 text-body">
                      <span className="breadcrumb-list__icon font-10">
                        <FiChevronRight />
                      </span>
                    </li>
                    <li className="breadcrumb-list__item font-14 text-body">
                      <span className="breadcrumb-list__text">Privacy policy</span>
                    </li>
                  </ul>

                </div>

              </div>
            </div>

          </div>

        </section>

        <div style={{ margin: "20px 20px", background: "white", padding: "20px", borderRadius: "20px" }} className="privacy-policy-container">
          <h2 style={{ fontWeight: "bold" }}>Privacy Policy</h2>
          <p className="effective-date">Effective Date: 21/08/2009</p>

          <h4 style={{ fontWeight: "bold" }}>1. Introduction</h4>
          <p>
            Welcome to Game Script Shop. This Privacy Policy explains how we collect,
            use, and protect your personal information when you use our website or
            purchase digital items from us.
          </p>

          <h4 style={{ fontWeight: "bold" }}>2. Information We Collect</h4>
          <p>
            We collect the following information to provide and improve our services:
          </p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email, address, payment details, and phone number.</li>
            <li><strong>Technical Data:</strong> Browser type, operating system, and IP address.</li>
            <li><strong>Usage Data:</strong> Pages visited and time spent on our site.</li>
          </ul>

          <h4 style={{ fontWeight: "bold" }}>3. How We Use Your Information</h4>
          <p>
            Your information is used to process orders, provide customer support,
            send updates about our services, and improve our website.
          </p>

          <h4 style={{ fontWeight: "bold" }}>4. How We Protect Your Information</h4>
          <p>
            We use encryption and secure servers to protect your data. However, no
            system is completely secure, so we recommend keeping your account
            information private.
          </p>

          <h4 style={{ fontWeight: "bold" }}>5. Your Rights</h4>
          <ul>
            <li>Access your personal data.</li>
            <li>Request corrections to inaccurate information.</li>
            <li>Request the deletion of your data.</li>
            <li>Opt-out of marketing communications.</li>
          </ul>

          <h4 style={{ fontWeight: "bold" }}>6. Cookies</h4>
          <p>
            We use cookies to improve your experience on our site. You can manage or
            disable cookies through your browser settings.
          </p>

          <h4 style={{ fontWeight: "bold" }}>7. Changes to This Policy</h4>
          <p>
            We may update this policy from time to time. Any changes will be posted
            here with an updated effective date.
          </p>

          <h4 style={{ fontWeight: "bold" }}>8. Contact Us</h4>
          <p>
            If you have any questions about this policy, please contact us at:
            <br />
            <strong>Email:</strong> support@gamescriptshop.com
          </p>

          {/* New Sections */}
          <h4 style={{ fontWeight: "bold" }}>9. Information We Share</h4>
          <p>
            We may share your information with third-party service providers for the
            purpose of processing payments, providing customer support, and analyzing
            website usage.
          </p>

          <h4 style={{ fontWeight: "bold" }}>10. Data Retention</h4>
          <p>
            We retain your personal data only for as long as necessary to fulfill the
            purposes outlined in this policy or as required by law.
          </p>

          <h4 style={{ fontWeight: "bold" }}>11. Third-Party Links</h4>
          <p>
            Our website may contain links to external sites. We are not responsible for
            the privacy practices of these external sites and recommend reviewing their
            privacy policies.
          </p>

          <h4 style={{ fontWeight: "bold" }}>12. User Rights</h4>
          <ul>
            <li>You have the right to access, correct, or delete your personal information.</li>
            <li>You have the right to object to processing for direct marketing purposes.</li>
            <li>You have the right to withdraw consent at any time if processing is based on consent.</li>
          </ul>

          <h4 style={{ fontWeight: "bold" }}>13. International Transfers</h4>
          <p>
            If you are located outside of our operating region, your personal data may
            be transferred to and processed in other countries. We ensure that such
            transfers comply with applicable data protection laws.
          </p>

        </div>
      </div>
      {/* <ShoppingCart /> */}
    </>
  )
}

export default PrivacyPolicy
