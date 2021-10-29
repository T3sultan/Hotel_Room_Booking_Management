import React from 'react';
import './Features.css'

const Features = ({ feature }) => {
    const { img, name } = feature;

    return (
        <div className="container ">
            <div>
                <img style={{ width: "200px" }} className="imgStyle rounded" src={img} alt="" />
            </div>
            <div className="text">

                <h2 className="textStyle2">{name}</h2>

            </div>


        </div>
    );
};

export default Features;