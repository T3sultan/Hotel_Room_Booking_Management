import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    const {loading} = useAuth()

    useEffect(() => {

        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="services">
        <h2 className="my-5 textStyle">Hotel Room Services</h2>
        {/* <Spinner itemType={loading} animation="border" variant="dark" /> */}
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