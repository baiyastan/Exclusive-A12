import React, {useEffect} from 'react'
import Banner from '../components/Banner/Banner'
import ProductList from '../components/ProductList/ProductList'
import { getProduct } from '../redux/product/productSlice'
import { useDispatch, useSelector } from 'react-redux'

function Home() {
  const {products, loading, error, categoryList, search} = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProduct({category: categoryList, search}))
  },[categoryList, search])


  

  return (
    <div>
      <Banner/>
      <ProductList data={products}/>
    </div>
  )
}

export default Home
