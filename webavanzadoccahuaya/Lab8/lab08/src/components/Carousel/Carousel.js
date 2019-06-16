import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../assets/img/slide1.jpg';
import slide2 from '../../assets/img/slide2.jpg';
import slide3 from '../../assets/img/slide3.jpg';
import slide4 from '../../assets/img/slide4.jpg';
const CarouselComponent = props => {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={slide1} alt="First slide" />
                <Carousel.Caption>
                    <h3>Firs slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={slide2} alt="Third slide" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={slide3} alt="Third slide" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Present commodo cursis magna, vel .....</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={slide4} alt="Third slide" />
                <Carousel.Caption>
                    <h3>Fourth slide label</h3>
                    <p>Present commodo cursus magna, vel scelerasque nisil consectertur</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};
export default CarouselComponent;