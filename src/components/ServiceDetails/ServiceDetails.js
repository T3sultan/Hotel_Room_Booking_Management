import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})

    useEffect(() => {
      
        fetch(`http://localhost:5000/serviceDetails/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))

    }, []);
    return (
        <div>
            <h2>Details of: {service.name}</h2>
            <h2>Booking :{serviceId}</h2>
        </div>
    );
};

export default ServiceDetails;