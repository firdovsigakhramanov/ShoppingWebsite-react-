import React, { useEffect, useState } from 'react'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { calculate, setDrawer, removeProduct } from '../redux/slices/basketSlice';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import '../css/header.css'

function BasketWindow() {
    const { products, drawer, totalPrice } = useSelector(store => store.basket)
    const dispatch = useDispatch()
    const [count, setCount] = useState(1);

    useEffect(() => {
        dispatch(calculate())
    }, [products])



    return (
        <Drawer onClose={() => dispatch(setDrawer())} open={drawer} anchor='right' >
            {
                products && products.map((product) => {
                    return (
                        <div className='basket-product' key={product.id}>
                            <div className='basket-left basket-side'>
                                <img className='basket-img' src={product.image} />
                                <div className='basket-left__title-and-count'>
                                    <p className='basket-title'>{product.title}</p>
                                    <p className='basket-count'>
                                        <CiCircleMinus onClick={() => (count > 1 ? setCount(count - 1) : setCount(1))} className='card-details__minus-icon' />
                                        <span className='card-details__product-count'>{count}</span>
                                        <CiCirclePlus  onClick={() => setCount(count + 1)} className='card-details__plus-icon' />
                                    </p>
                                </div>
                            </div>
                            <div className='basket-right basket-side'>
                                <p className='basket-price'>{product.price}$</p>
                                <button onClick={() => dispatch(removeProduct(product.id))} className='btn basket-btn'>Remove</button>
                            </div>
                        </div>
                    )
                })

            }
            <div className='total-price__container'>
                <p>Total Price:</p>
                <span>{totalPrice.toFixed(2)}$</span>
            </div>
        </Drawer >
    )
}

export default BasketWindow