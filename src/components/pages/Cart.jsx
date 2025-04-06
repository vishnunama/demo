// import React, { useContext } from 'react';
// import { ShopContext } from './ShopContext';
// import carticon from "../Assets/icons/add-to-cart.svg"

// const Cart = ({ product }) => {
//   const { addToCart } = useContext(ShopContext);

//   const handleAddToCart = () => {
//     addToCart(product); // Add product to the cart
//   };

//   return (
    // <button
    //   type="button"
    //   className="btn btn-main d-flex w-100 justify-content-center align-items-center gap-2 pill px-sm-5 mt-32"
    //   onClick={handleAddToCart}
    // >
    //   <img src={carticon} alt="Add to Cart" />
    //   Add To Cart
    // </button>
//   );
// };

// export default Cart;

import React from 'react'
import CartItem from './CartItem';
// import CartItem from './CartItem';

function Cart() {
  return (
    <div>

        
      <CartItem />
    </div>
  )
}

export default Cart;