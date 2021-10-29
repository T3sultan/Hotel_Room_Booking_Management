import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import ServicesMan from '../ServicesMan/ServicesMan';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ServicesMan></ServicesMan>
            <Footer></Footer>
        </div>
    );
};

export default Home;