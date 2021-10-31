import React, { useState, useEffect } from 'react';
import ServiceMan from '../ServiceMan/ServiceMan';

import man1 from '../../images/serviceMan/133.jpg'
import man2 from '../../images/serviceMan/44.jpg'
import man3 from '../../images/serviceMan/55.jpg'
import man4 from '../../images/serviceMan/66.jpg'
import man5 from '../../images/serviceMan/77.jpg'
import man6 from '../../images/serviceMan/99.jpg'



const servicesMan = [
    {
        img: man1,
        name:"Pullen"
      

    },
    {
        img: man2,
        name:"Fillmore"

    },
    {
        img: man3,
        name:"Mangle"

    },
    {
        img: man4,
        name:"Ken Hurt"

    },
    {
        img: man5,
        name:"Lipp"

    },
    {
        img: man6,
        name:"Toothaker"

    },
  
    
]

const ServicesMan = () => {
    // const [serviceMan, setServiceMan] = useState([]);

    // useEffect(() => {
    //     fetch('servicesMan.json')
    //         .then(res => res.json())
    //         .then(data => setServiceMan(data))

    // }, [])
    return (
        <div id="servicesMan">
            <h2 className="my-5 textStyle1">Our Hotel Services Man</h2>
            <div className="container">
                {

                    servicesMan.map(service => <ServiceMan
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