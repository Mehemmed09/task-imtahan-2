import React, { useContext } from 'react'
import { BasketContext } from '../../context/context'
import './Card.scss'
const Cards = ({id,image,text,title,product,price}) => {
  const{AddBasket}=useContext(BasketContext)
  return (
<>
<div className="card" width="18rem">
    <div className="card-image">
    <img className='card-image-top' src={image} alt="Card image cap" />
    </div>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{text}</p>
<button className='btn ' onClick={()=>AddBasket(product)}>Add to Basket</button>
<button className='btn'>Details</button>
  </div>
</div>
</>
  )
}

export default Cards