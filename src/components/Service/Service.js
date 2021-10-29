import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const { id, name, description, imgUrl,price } = service;

    return (
        <div className="service pb-3">
            <img src={imgUrl} alt="" />
            <h2>{name}</h2>
            <p className="p-1">{description.slice(0,100)}</p>
            <p><small className="price">{price}</small></p>
            <Link to={`/serviceDetails/${id}`}>
                <button style={{fontSize:"13px"}} className="btn btn-info">Buy Now</button>

            </Link>
        </div>
    );
};

export default Service;