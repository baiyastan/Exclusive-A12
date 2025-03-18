import React from 'react'
import "./List.scss"
import Card from '../Card/Card'
import { useSelector } from 'react-redux'
import Loading from '../Loading/Loading'

function ProductList({data}) {
    const {products, loading, error, categoryList} = useSelector((state) => state.products)

    if(loading) {
      return <Loading/>
    }
    
  return (
    <div className='products container'>
        {
            data.map((item) => (
                <Card key={item.id} pro={item}/>
            ))
        }
    </div>
  )
}

export default ProductList
