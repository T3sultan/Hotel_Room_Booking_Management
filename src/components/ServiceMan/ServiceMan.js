import React from 'react';

const ServiceMan = ({service}) => {
    const { name, imgUrl, profession } = service;
    return (
        <div className="doctors pb-4 rounded">
            <img src={imgUrl} alt="" />
            <h2 className="textStyle">{name}</h2>
            <p className="professionStyle rounded-circle">{profession}</p>
            
        </div>

    );
};

export default ServiceMan;