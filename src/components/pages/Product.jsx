import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from './ShopContext';
import ProductDisplay from './ProductDisplay';
import ProductDetails from './ProductDetails';

function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  if (!product) {
    // Product nahi mila, is case ko handle karo
    return <p>Product nahi mila</p>;
  }
  
  return (
    <div>
     
      {/* <ProductDisplay product={product} onClick={window.scrollTo(0,0)} /> */}
      <ProductDetails product={product} onClick={window.scrollTo(0,0)} />
    </div>
  );
}


export default Product;





