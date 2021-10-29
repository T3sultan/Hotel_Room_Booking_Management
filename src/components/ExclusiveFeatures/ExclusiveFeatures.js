import React from 'react';
import './ExclusiveFeatures.css'
import features1 from '../../images/features/undraw_access_denied_re_awnf.png'
import features2 from '../../images/features/undraw_Around_the_world_re_n353.png'
import features3 from '../../images/features/undraw_authentication_fsn5.png'
import features4 from '../../images/features/undraw_Credit_card_payment_re_o911.png'
import features5 from '../../images/features/undraw_Emails_re_cqen.png'
import features6 from '../../images/features/undraw_Forms_re_pkrt.png'
import features7 from '../../images/features/undraw_Message_sent_re_q2kl.png'
import features8 from '../../images/features/undraw_Responsive_re_e1nn.png'
import features9 from '../../images/features/undraw_Secure_server_re_8wsq.png'
import features10 from '../../images/features/undraw_Travel_booking_re_6umu.png'
import Features from '../Features/Features';



const features = [
    {
        img: features1,
        name:"Role Permission"
      

    },
    {
        img: features2,
        name:"Multiple Languages"

    },
    {
        img: features3,
        name:"Payroll System"

    },
    {
        img: features4,
        name:"Multiple Payment Gateway"

    },
    {
        img: features5,
        name:"Email Configuration"

    },
    {
        img: features6,
        name:"Payment Setup"

    },
    {
        img: features7,
        name:"SMS Configuration"

    },
    {
        img: features8,
        name:"Fully Responsive"

    },
    {
        img: features9,
        name:"Secured System"

    },
    {
        img: features10,
        name:"Online/Offline Booking System"

    },
]

const ExclusiveFeatures = () => {
    return (
        <div id="exclusive">
            <h2 className="my-5 textStyle1">Exclusive Features</h2>
            <div className="container">
                {

                    features.map(feature => <Features
                        key={feature.img}
                        feature={feature}
                    >

                    </Features>)
                }
            </div>
        </div>
    );
};

export default ExclusiveFeatures;