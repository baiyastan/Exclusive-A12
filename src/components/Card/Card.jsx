import React from 'react'
import "./Card.scss"

function Card({pro}) {

  function findPrice (a,b) {
  }
  return (
    <div className='product-card'>
          <div className="discount-badge">
            <p className='send'>-{pro.discountPercentage}</p>
            <img src={pro.thumbnail} alt="HAVIT HV-G92 Gamepad" />
          </div>

          <div className='pos-img'>
            <img src="" alt="" />
            
            <img src="" alt="" />
          </div>
          
          <div className='texts'>
            <div className="product-title">
              <h2>{pro.title}</h2>
            </div>
            <div className="price">
              <p>${findPrice(pro.price, pro.discountPercentage)}</p>
              <del>${pro.price}</del>
            </div>

            <div className="rating">
              <img src="" alt="" />
              <span>({pro.stock})</span>
            </div>
          </div>
        </div>
  )
}

export default Card
