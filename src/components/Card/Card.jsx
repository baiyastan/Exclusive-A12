import React from 'react'
import "./Card.scss"

function Card({pro}) {
  return (
    <div className='product-card'>
          <div className="discount-badge">
            <p className='send'>-40%</p>
            <img src={pro.thumbnail} alt="HAVIT HV-G92 Gamepad" />
          </div>

          <div className='pos-img'>
            <img src="" alt="" />
            
            <img src="" alt="" />
          </div>
          
          <div className='texts'>
            <div className="product-title">
              <h2>HAVIT HV-G92 Gamepad</h2>
            </div>
            <div className="price">
              <p>$120</p>
              <del>$160</del>
            </div>

            <div className="rating">
              <img src="" alt="" />
              <span>(88)</span>
            </div>
          </div>
        </div>
  )
}

export default Card
