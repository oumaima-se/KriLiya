import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';

export class CarouselCover extends Component {
    render() {
        return (
            <div className="cover">
                <Carousel>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src="/images/img-cover1.jpg"
                            alt="First slide"
                            weight="200px"
                            height="900px"
                        />
                        <Carousel.Caption>
                        <h3>Krilya</h3>
                        <p>Trouver la location la plus convenable et les collocataires les plus adequats.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src="/images/img-cover2.jpg"
                            alt="Second slide"
                            weight="200px"
                            height="900px"
                        />
                        <Carousel.Caption>
                        <h3>Krilya</h3>
                        <p>Trouver la location la plus convenable et les collocataires les plus adequats.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src="/images/img-cover3.jpg"
                            alt="Third slide"
                            weight="200px"
                            height="900px"
                        />
                        <Carousel.Caption>
                        <h3>Krilya</h3>
                        <p>Trouver la location la plus convenable et les collocataires les plus adequats.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel> 
            </div>
        )
    }
}

export default CarouselCover;
