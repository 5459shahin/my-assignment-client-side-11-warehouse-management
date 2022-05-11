import React from 'react';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../images/bicycle1.png'
import image2 from '../images/bicycle2.png'
import image3 from '../images/biycle3.png'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    return (
        <div className='container'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item height={70} className='Width 25%'>
                    <img
                        height={700}
                        className=" d-block w-100 img-fluid"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item height={70} className='Width 25%'>
                    <img
                        className="d-block w-100 img-fluid"
                        src={image2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item height={70} className='Width 25%'>
                    <img
                        className="d-block w-100 img-fluid"
                        src={image3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;