import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'


import banner1 from '../../images/banner/files_299003436_HSF_0842.jpg';
import banner2 from '../../images/banner/files_240457004_IMG_90275.jpg';
import banner3 from '../../images/banner/files_246891891_IMG_6745.jpg';
import banner4 from '../../images/banner/files_296836796_49251.jpg';
import banner5 from '../../images/banner/files_38177641_DSC_9134.jpg';
import banner6 from '../../images/banner/files_8833603_DSC_1681.jpg';




const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="first">Royal Family Suite</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Executive Suite</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Superior King Garden View</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Studio with Sea View</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner5}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Executive Suite with Hill View</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner6}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Royal Paradise Suite</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </>
    );
};

export default Banner;