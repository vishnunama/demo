import React from 'react'
function Breadcrum(props) {
    const {product} = props;
  return (
    <div className="breadcrum">
      <p>{product.name}</p> 
    
      
    </div>
  )
}

export default Breadcrum;