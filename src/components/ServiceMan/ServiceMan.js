import React from 'react';

const ServiceMan = ({service}) => {
    const { name, imgUrl} = service;
    return (
        <div className="doctors pb-4 rounded">
            <img src={imgUrl} alt="" />
            <h2 className="textStyle">{name}</h2>
           
            
        </div>

    );
};

export default ServiceMan;