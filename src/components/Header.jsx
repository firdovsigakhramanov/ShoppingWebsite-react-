import React, { useState } from 'react'
import '../css/header.css'
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/basketSlice';



function Header() {
  const [theme, setTheme] = useState(true)
  const navigate = useNavigate()
  const { products } = useSelector((store) => store.basket)
  const [basket, setBasket] = useState(false)
  const dispatch = useDispatch()
  const changeTheme = () => {
    const root = document.getElementById("root");
    setTheme(!theme);
    if (theme) {
      root.style.backgroundColor = "black"
      root.style.color = "white"
    }
    else {
      root.style.backgroundColor = "white"
      root.style.color = "black"
    }
  }
  return (
    <div className='header'>
      <div className='header-logo' onClick={() => (navigate("/"))}>
        <img src="./src/images/total-logo-energia-download-logos-2.png" alt="" />
        <p className='header-logo__name'>Shop Shop</p>
      </div>
      <div className='header__right-side'>

        <input type="text" className='header__search-input' placeholder='Enter product name...' />
        <div className='header-icons'>
          {
            theme ? <FaMoon onClick={changeTheme} /> : <CiLight onClick={changeTheme} />
          }
          <Badge badgeContent={products.length} color="error">
            <CiShoppingBasket onClick={() => dispatch(setDrawer())} />
          </Badge>
        </div>
      </div>
    </div>
  )
}

export default Header