import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import CartPage from './CartPage';
import { Link } from 'react-router-dom';

function CartItem() {
  const { all_product, cartItems } = useContext(ShopContext);

  return (
    <>
      <div>
        <CartPage />
      </div>

      <div className="cart padding-y-120">
        <div className="container">
          <div className="cart-content">
            <div className="table-responsive">
              <table className="table style-two">
                <thead>
                  <tr>
                    <th>Product Details</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {all_product.map((e) => {
                    if (cartItems[e.id] > 0) {
                      return (
                        <tr key={e.id}>
                          <td>
                            <div className="cart-item">
                              <div className="d-flex align-items-center gap-3">
                                <div className="cart-item__thumb">
                                  <a href="product-details.html" className="link">
                                    <img
                                      src={e.image}
                                      alt={e.name}
                                      className="cover-img"
                                      style={{ width: '100px' }}
                                    />
                                  </a>
                                </div>
                                <div className="cart-item__content">
                                  <h6 className="cart-item__title font-heading fw-700 text-capitalize font-18 mb-4">
                                    <a href="product-details.html" className="link">
                                      {e.name}
                                    </a>
                                  </h6>
                                  <span className="cart-item__price font-18 text-heading fw-500">
                                    Unit Price: <span className="text-body font-14">${e.new_price}</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="cart-item__totalPrice text-body font-18 fw-400 mb-0">
                              ${e.new_price}
                            </span>
                          </td>
                          <td>
                            <span className="cart-item__totalPrice text-body font-18 fw-400 mb-0">
                              ${e.new_price * cartItems[e.id]}
                            </span>
                          </td>
                        </tr>
                      );
                    }
                    return null;
                  })}
                </tbody>
              </table>
            </div>
            <div className="cart-content__bottom flx-between gap-2">
              

              <Link to="/MailingAddress">
                <a className="btn btn-main flx-align gap-2 pill btn-lg">
                  Next
                  <span className="icon line-height-1 font-20">
                    <FaArrowRight style={{ fontSize: "14px" }} className="las la-arrow-right" />
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;





//  <main className="bg_gray">
//   <div className="container margin_30">
//     <div className="page_header">
//       <div className="breadcrumbs">
//         <ul>
//           <li><a href="#">Home</a></li>
//           <li><a href="#">Category</a></li>
//           <li>Page active</li>
//         </ul>
//       </div>
//       <h1>Cart page</h1>
//     </div>
//     {/* /page_header */}
//     <table className="table table-striped cart-list">
//       <thead>
//         <tr>
//           <th>
//             Product
//           </th>
//           <th>
//             Price
//           </th>
//           <th>
//             Quantity
//           </th>
//           <th>
//             Subtotal
//           </th>
//           <th>
//           </th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>
//             <div className="thumb_cart">
//               <img src="img/products/product_placeholder_square_small.jpg" data-src="img/products/shoes/1.jpg" className="lazy" alt="Image" />
//             </div>
//             <span className="item_cart">Armor Air x Fear</span>
//           </td>
//           <td>
//             <strong>$140.00</strong>
//           </td>
//           <td>
//             <div className="numbers-row">
//               <input type="text" defaultValue={1} id="quantity_1" className="qty2" name="quantity_1" />
//               <div className="inc button_inc">+</div>
//               <div className="dec button_inc">-</div>
//             </div>
//           </td>
//           <td>
//             <strong>$140.00</strong>
//           </td>
//           <td className="options">
//             <a href="#"><i className="ti-trash" /></a>
//           </td>
//         </tr>
//         <tr>
//           <td>
//             <div className="thumb_cart">
//               <img src="img/products/product_placeholder_square_small.jpg" data-src="img/products/shoes/2.jpg" className="lazy" alt="Image" />
//             </div>
//             <span className="item_cart">Armor Okwahn II</span>
//           </td>
//           <td>
//             <strong>$110.00</strong>
//           </td>
//           <td>
//             <div className="numbers-row">
//               <input type="text" defaultValue={1} id="quantity_2" className="qty2" name="quantity_2" />
//               <div className="inc button_inc">+</div>
//               <div className="dec button_inc">-</div>
//             </div>
//           </td>
//           <td>
//             <strong>$110.00</strong>
//           </td>
//           <td className="options">
//             <a href="#"><i className="ti-trash" /></a>
//           </td>
//         </tr>
//         <tr>
//           <td>
//             <div className="thumb_cart">
//               <img src="img/products/product_placeholder_square_small.jpg" data-src="img/products/shoes/3.jpg" className="lazy" alt="Image" />
//             </div>
//             <span className="item_cart">Armor Air Wildwood ACG</span>
//           </td>
//           <td>
//             <strong>$90.00</strong>
//           </td>
//           <td>
//             <div className="numbers-row">
//               <input type="text" defaultValue={1} id="quantity_3" className="qty2" name="quantity_3" />
//               <div className="inc button_inc">+</div>
//               <div className="dec button_inc">-</div>
//             </div>
//           </td>
//           <td>
//             <strong>$90.00</strong>
//           </td>
//           <td className="options">
//             <a href="#"><i className="ti-trash" /></a>
//           </td>
//         </tr>
//       </tbody>
//     </table>
//     <div className="row add_top_30 flex-sm-row-reverse cart_actions">
//       <div className="col-sm-4 text-end">
//         <button type="button" className="btn_1 gray">Update Cart</button>
//       </div>
//       <div className="col-sm-8">
//         <div className="apply-coupon">
//           <div className="form-group">
//             <div className="row g-2">
//               <div className="col-md-6"><input type="text" name="coupon-code" defaultValue placeholder="Promo code" className="form-control" /></div>
//               <div className="col-md-4"><button type="button" className="btn_1 outline">Apply Coupon</button></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* /cart_actions */}
//   </div>
//   {/* /container */}
//   <div className="box_cart">
//     <div className="container">
//       <div className="row justify-content-end">
//         <div className="col-xl-4 col-lg-4 col-md-6">
//           <ul>
//             <li>
//               <span>Subtotal</span> $240.00
//             </li>
//             <li>
//               <span>Shipping</span> $7.00
//             </li>
//             <li>
//               <span>Total</span> $247.00
//             </li>
//           </ul>
//           <a href="checkout.html" className="btn_1 full-width cart">Proceed to Checkout</a>
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* /box_cart */}
// </main>

    



