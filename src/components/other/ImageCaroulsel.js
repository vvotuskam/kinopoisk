import React, { useState } from 'react';
import { Container, Carousel, Row, Col } from 'react-bootstrap';
import './ImageCarousel.css'

const ImageCarousel = ({ images }) => {

    if (images === null || images === undefined || images.length === 0) {
        return <div></div>;
    }

    const renderImages = () => {
        const items = [];
        for (let i = 0; i < images.length; i += 3) {
            const imageGroup = images.slice(i, i + 3);
            items.push(
                <Carousel.Item key={i}>
                    <Row>
                        {imageGroup.map((image, index) => (
                            <Col key={index} xs={4}>
                                <div className="image-wrapper">
                                    <img className="d-block w-100" src={image.previewUrl} alt={`Slide ${i + index}`} />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
            );
        }
        return items;
    };

    return (
        <Container>
            <Carousel style={{marginTop: 15, marginBottom: 50}}>
                {renderImages()}
            </Carousel>
        </Container>
    );
};

export default ImageCarousel;
