import React from 'react'
import '../css/card.css'
import { useNavigate } from "react-router-dom";


function Card({ card }) {
    const navigate = useNavigate();


    return (
        <div onClick={() => { navigate('/product-details/' + card.id) }} >
            <div className="card">
                <div>
                    <div className="card-img">
                        <img src={card.image} alt="" />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">{card.title}</h3>
                        <p className="card-price">${card.price}</p>
                        <p>{card.description.substring(0, 90).concat("...")}</p>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="card-raiting">
                        {/* <p>{card.rating.rate}</p>
                        <div className="card-raiting__img">
                            <img src='./src/images/star-solid.svg' alt="" />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card