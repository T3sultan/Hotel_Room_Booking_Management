import React from 'react';

const ServiceMan = ({service}) => {
    const { name, img} = service;
    return (
        <div className="doctors pb-4 rounded">
            <img src={img} alt="" />
            <h2 className="textStyle">{name}</h2>
           
            
        </div>

    );
};

export default ServiceMan;