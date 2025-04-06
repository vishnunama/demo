import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import breadcrumbgradient from "../Assets/gradients/breadcrumb-gradient-bg.png";
import moon3 from "../Assets/shapes/element-moon3.png";
import moon1 from "../Assets/shapes/element-moon1.png";

function RefundPolicy() {
  return (
    <>
      <div>
        <section
          style={{ height: "30vh" }}
          className="breadcrumb breadcrumb-four padding-static-y-60 section-bg position-relative z-index-1 overflow-hidden"
        >
          <img src={breadcrumbgradient} alt className="bg--gradient" />
          <img src={moon3} alt className="element one" />
          <img src={moon1} alt className="element three" />
          <div className="container container-two">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div
                  style={{ marginTop: "70px" }}
                  className="breadcrumb-four-content"
                >
                  <h4
                    style={{ fontWeight: "800", fontSize: "35px" }}
                    className="breadcrumb-four-content__title text-center mb-3 text-capitalize"
                  >
                    Refund Policy
                  </h4>
                  <ul
                    style={{ marginRight: "25px" }}
                    className="breadcrumb-list flx-align justify-content-center gap-2 mb-2"
                  >
                    <li className="breadcrumb-list__item font-14 text-body">
                      <Link
                        to="/"
                        href="index-2.html"
                        className="breadcrumb-list__link text-body hover-text-main"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-list__item font-14 text-body">
                      <span className="breadcrumb-list__icon font-10">
                        <FiChevronRight />
                      </span>
                    </li>
                    <li className="breadcrumb-list__item font-14 text-body">
                      <span className="breadcrumb-list__text">Refund Policy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          style={{
            margin: "20px 20px",
            background: "white",
            padding: "20px",
            borderRadius: "20px",
          }}
          className="refund-policy-container"
        >
          <h2 style={{ fontWeight: "bold" }}>Refund Policy</h2>
          <p className="effective-date">Effective Date: 21/08/2009</p>

          <h4 style={{ fontWeight: "bold" }}>1. Overview</h4>
          <p>
            At Game Script Shop, customer satisfaction is our priority. This Refund Policy outlines the terms and conditions for refunds on our products and services.
          </p>

          <h4 style={{ fontWeight: "bold" }}>2. Digital Products</h4>
          <p>
            Due to the nature of digital products, all sales are final. Refunds are not provided unless there is a technical issue that we are unable to resolve.
          </p>

          <h4 style={{ fontWeight: "bold" }}>3. Eligibility for Refund</h4>
          <ul>
            <li>The product is defective or unusable as delivered.</li>
            <li>Requests are made within 7 days of purchase.</li>
            <li>No refund is applicable for issues caused by user error or incompatibility.</li>
          </ul>

          <h4 style={{ fontWeight: "bold" }}>4. Refund Process</h4>
          <p>
            To request a refund, please contact our support team at:
            <br />
            <strong>Email:</strong> support@gamescriptshop.com
          </p>
          <p>
            Provide the following details:
            <ul>
              <li>Order ID</li>
              <li>Description of the issue</li>
              <li>Proof of purchase</li>
            </ul>
          </p>

          <h4 style={{ fontWeight: "bold" }}>5. Refund Approval</h4>
          <p>
            Once your request is reviewed, we will notify you about the approval or rejection of your refund. Approved refunds will be processed within 7-10 business days.
          </p>

          <h4 style={{ fontWeight: "bold" }}>6. Changes to This Policy</h4>
          <p>
            We reserve the right to modify this Refund Policy at any time. Changes will be effective upon posting to this page.
          </p>

          {/* Detailed Refund Process Section */}
          <h4 style={{ fontWeight: "bold" }}>Refund Policy Rules</h4>
          <p>
            Please note that we are unable to process refunds for products where the date of purchase is older than:
          </p>
          <ul>
            <li>180 days and over for Script Sell Shop supported items.</li>
            <li>30 days and over for Script Sell Shop unsupported items, including AudioJungle, VideoHive, GraphicRiver, PhotoDune, and 3DOcean items.</li>
            <li>Items purchased but not downloaded within 30 days.</li>
          </ul>

          <h4 style={{ fontWeight: "bold" }}>Before You Ask for a Refund</h4>
          <p>
            If you have purchased an item from our “Web Themes and Templates” or “Code” category and you are experiencing a technical issue, we recommend you first contact the author for troubleshooting.
          </p>

          <h4 style={{ fontWeight: "bold" }}>Refund Circumstances</h4>
          <p>
            Refunds will be considered under the following circumstances:
            <ul>
              <li>Item is not as described or does not work as expected.</li>
              <li>Item has a security vulnerability.</li>
              <li>Item support is promised but not provided.</li>
              <li>Item has not been downloaded within 30 days.</li>
            </ul>
          </p>

          <h4 style={{ fontWeight: "bold" }}>Dispute Resolution</h4>
          <p>
            If you cannot reach an agreement with the author about a refund, you can raise a dispute, and Script Sell Shop will review the case. Any refund issued will be entirely discretionary, and the decision will be final.
          </p>

          <h4 style={{ fontWeight: "bold" }}>Non-Refundable Situations</h4>
          <ul>
            <li>If you change your mind after downloading the item.</li>
            <li>If the item did not meet your expectations or you find it of low quality.</li>
            <li>If you bought the item by mistake.</li>
            <li>If you don't have sufficient expertise to use the item.</li>
            <li>If you cannot provide sufficient information for your refund request.</li>
            <li>If you can no longer access the item due to removal or inactivity of the author.</li>
            <li>If the purchase was made over 180 days ago (for Script Sell Shop supported items) or over 30 days ago (for other items).</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default RefundPolicy;
