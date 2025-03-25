import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"
import search from "../../assets/svg/search.svg"
import wishlist from "../../assets/svg/wishlist.svg"
import cart from "../../assets/svg/cart.svg"
import { useDispatch } from 'react-redux'
import { setSearch } from '../../redux/product/productSlice'
import { useTranslation } from 'react-i18next'


function Header() {
  const [title, setTitle] = useState()
  const dispatch = useDispatch()
  const {t, i18n} = useTranslation()

  function handleKeyDown(e) {
    if(e.keyCode == 13) {
      dispatch(setSearch(title))
      setTitle("")
    }
  }

  function handleChangeLng(event){
    let lng =event.target.value;

    i18n.changeLanguage(lng)
  }

  return (
    <div className='header'>
      <div className='top-header'>
        <div className='header-content container'>
          <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <Link>ShopNow</Link>
          </p>
          <select onChange={handleChangeLng}>
            <option value="kg">KGZ</option>
            <option value="en">ENG</option>
            <option value="ru">RUS</option>
          </select>
        </div>
      </div>
      <div className='main-header container'>
        <div className='header-left'>
          <Link to="/">{t("logo")}</Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/register">Sign Up</Link>
            </li>
          </ul>
        </div>
        <div className='header-right'>
          <div className='search'>
            <input 
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
              type="text" 
              placeholder='What are you looking for?'
              onKeyDown={handleKeyDown}
               />
            <img src={search} alt="" />
          </div>
          <div className='icons'>
            <Link to="/wishlist">
              <img src={wishlist} alt="" />
            </Link>
            <img src={cart} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
