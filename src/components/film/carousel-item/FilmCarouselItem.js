import React from 'react';
import {Container, Row, Col, Badge} from 'react-bootstrap';

const FilmCarouselItem = ({ film }) => {
    const { nameRu, nameEn, description, professionKey } = film;

    return (
        <Container className="film-carousel-item d-flex justify-content-center">
            <Row>
                <Col className={'d-flex justify-content-center flex-column align-items-center'}>
                    <h3 className="text-muted">{nameEn}</h3>
                    <p>{description}</p>
                    <Badge>{professionKey}</Badge>
                </Col>
            </Row>
        </Container>
    );
};

export default FilmCarouselItem;
