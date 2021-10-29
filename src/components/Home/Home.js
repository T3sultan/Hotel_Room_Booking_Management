import React from 'react';
import Banner from '../Banner/Banner';
import ExclusiveFeatures from '../ExclusiveFeatures/ExclusiveFeatures';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import ServicesMan from '../ServicesMan/ServicesMan';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ExclusiveFeatures></ExclusiveFeatures>
            <ServicesMan></ServicesMan>
            <Footer></Footer>
        </div>
    );
};

export default Home;