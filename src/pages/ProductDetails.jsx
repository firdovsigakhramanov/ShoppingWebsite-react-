import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice'
import '../css/product-details.css'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket } from '../redux/slices/basketSlice'

function ProductDetails() {
    const { id } = useParams()
    const { products, selectedProduct } = useSelector((store) => store.product)
    const dispatch = useDispatch()
    const [count, setCount] = useState(0);
    const { image, price, description, title } = selectedProduct

    useEffect(() => {
        getProductById()
    }, [])

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product))
            }
        })
    }
    const addBasket = () => {
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count
        }
        dispatch(addToBasket(payload))
    }

    return (
        <div className="card-details">
            <div className="card-details__img">
                <img
                    src={selectedProduct.image}
                    alt=""
                />
            </div>
            <div className="card-details__content">
                <h1 className="">
                    {selectedProduct.title}
                </h1>
                <button onClick={addBasket} className="card-details__button btn">Add to cart</button>
                <p className="card-details__price">${selectedProduct.price}</p>
                <div className="card-details__raiting">
                    <CiCircleMinus onClick={() => (count > 0 ? setCount(count - 1) : setCount(0))} className='card-details__minus-icon' /> <span className='card-details__product-count'>{count}</span> <CiCirclePlus onClick={() => setCount(count + 1)} className='card-details__plus-icon' />
                </div>
                <p className="card-details__description">
                    {selectedProduct.description}
                </p>
            </div>
        </div>
    )
}

export default ProductDetails