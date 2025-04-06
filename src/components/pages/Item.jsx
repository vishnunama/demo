import React from 'react'
import { Link } from 'react-router-dom';

function Item(props) {
  return (
    <div className='Item'>
      <Link  to={`/product/${props.id}`}><img   src={props.image} alt="" /></Link>
      
      <p>{props.name}</p>
      <div className="Item-prices">
        <div className="Item-price-new">
          ${props.new_price}
        </div>
        <div className="Item-price-old">
          ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item;