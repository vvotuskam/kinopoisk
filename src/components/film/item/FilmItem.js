import React from 'react';
import { Row, Col, Image, Badge } from 'react-bootstrap';

const FilmItem = ({ film }) => {

    const getTitle = () => {
        if (film.nameRu === null || film.nameRu === undefined || film.nameRu.trim() === '') {
            return 'Увлекательный фильм'
        }
        return film.nameRu
    }

    return (
        <Row className="film-item p-3 border rounded mb-3" style={{ width: '650px', height: '350px', color: "white", cursor: 'pointer' }}>
            <Col xs={4}>
                <Image
                    src={film.posterUrlPreview}
                    alt={film.nameOriginal}
                    fluid
                    className="film-image"
                    style={{ marginTop: 25}}
                />
            </Col>
            <Col xs={8} className="d-flex flex-column justify-content-center">
                <h3>{getTitle()}</h3>
                <p className="mb-1">Original Name: {film.nameOriginal}</p>
                <p className="mb-1">Country: {film.countries[0]?.country}</p>
                <p className="mb-1">
                    Genres: {
                        film.genres.map((genre, index) => <Badge bg="primary" className="mr-1" key={index} >{genre.genre}</Badge>)
                    }
                </p>
                <p className="mb-1">Kinopoisk Rating: {film.ratingKinopoisk}</p>
                <p className="mb-1">IMDb Rating: {film.ratingImdb}</p>
                <p className="mb-0">Year: {film.year}</p>
            </Col>
        </Row>
    );
};

export default FilmItem;
