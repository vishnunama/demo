import React, { useContext } from 'react';
import "./ProductDisplay.css";
import { ShopContext } from './ShopContext';




function ProductDisplay(props) {
  
  const {product } = props;
  const {addToCart}=useContext(ShopContext);

  

  return (
    <div className='productdisplay'>
      
      <div className="productdisplay-left">
        
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
        </div>
        
      </div>
      <div className="productdisplay-right">
          <h3>{product.name}</h3>
       
        <div className="productdisplay-right-star">
        
        
        </div>
        
          <span className='stock'>100 In Stock</span>
        
        <div className="productdisplay-right-price">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="color-div">
          <span>Color </span>
          <div  style={{backgroundColor:"black", width:"25px",borderRadius:"50%"}}>1
          </div>
          <div  style={{backgroundColor:"black", width:"25px",borderRadius:"50%"}}>2</div>

        </div>
        <div className='Buy-Cart-button'>
          <button  className='buy-button'>Buy Now</button>
          <button onClick={()=>{addToCart(product.id)}} className='cart-button'>Add To Cart</button>
        </div>
        

        
      </div>
    </div>
  );
}

export default ProductDisplay;







