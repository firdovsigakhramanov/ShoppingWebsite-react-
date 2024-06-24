import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice'
import Card from './Card'
import '../css/product-list.css'

function ProductList() {
    const dispatch = useDispatch()
    const { products } = useSelector((store) => store.product)
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])
    return (
        <div className='product-container'>
            {
                products && products.map(card => (
                    <Card key={card.id} card={card} />
                ))
            }
        </div>
    )
}

export default ProductList