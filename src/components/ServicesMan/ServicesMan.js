import React, { useState, useEffect } from 'react';
import ServiceMan from '../ServiceMan/ServiceMan';

const ServicesMan = () => {
    const [serviceMan, setServiceMan] = useState([]);

    useEffect(() => {
        fetch('servicesMan.json')
            .then(res => res.json())
            .then(data => setServiceMan(data))

    }, [])
    return (
        <div id="servicesMan">
            <h2 className="my-5 textStyle1">Our Hotel Services Man</h2>
            <div className="container">
                {

                    serviceMan.map(service => <ServiceMan
                        key={service.id}
                        service={service}
                    >

                    </ServiceMan>)
                }
            </div>
        </div>
    );
};

export default ServicesMan;