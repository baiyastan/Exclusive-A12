import React from 'react'
import "./List.scss"
import Card from '../Card/Card'

function ProductList({data}) {
  return (
    <div>
        {
            data.map((item) => (
                <Card key={item.id} pro={item}/>
            ))
        }
    </div>
  )
}

export default ProductList
