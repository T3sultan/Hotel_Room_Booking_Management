import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const { _id, name, description,image ,price,title } = service;

    return (
        <div className="service pb-3">
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p className="p-1">{description.slice(0,100)}</p>
            <p><small className="price">{price} TK</small></p>
            <Link to={`/serviceDetails/${_id}`}>
                <button style={{fontSize:"13px"}} className="btn btn-info">Buy Now</button>

            </Link>
        </div>
    );
};

export default Service;