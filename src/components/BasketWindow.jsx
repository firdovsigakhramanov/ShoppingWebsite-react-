import React, { useEffect } from 'react'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { calculate, setDrawer } from '../redux/slices/basketSlice';

function BasketWindow() {
    const { products, drawer, totalPrice } = useSelector(store => store.basket)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(calculate())
    }, [])
    return (
        <Drawer onClose={() => dispatch(setDrawer())} open={drawer} anchor='right' >
            {
                products && products.map((product) => {
                    return (
                        <div className='basket-product' key={product.id}>
                            <div className='basket-left basket-side'>
                                <img className='basket-img' src={product.image} />
                                <p className='basket-title'>{product.title}</p>
                            </div>
                            <div className='basket-right basket-side'>
                                <p className='basket-count'>({product.count})</p>
                                <p className='basket-price'>{product.price}$</p>
                                <button onClick={dispatch(removeProduct(id))} className='btn basket-btn'>Remove</button>
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