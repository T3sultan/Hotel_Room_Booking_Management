import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {

        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="services">
        <h2 className="my-5 textStyle">Hotel Room Services</h2>
        <div className="container">
            {

                services.map(service => <Service
                    key={service.id}
                    service={service}
                >

                </Service>)
            }
        </div>
    </div>
    );
};

export default Services;