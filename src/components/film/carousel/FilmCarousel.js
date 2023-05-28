import React from 'react';
import {Carousel} from "react-bootstrap";
import {Link} from "react-router-dom";
import FilmCarouselItem from "../carousel-item/FilmCarouselItem";

const FilmCarousel = ({films}) => {

    return (
        <Carousel>
            {
                films.map((film, index) => (
                    <Carousel.Item key={index}>
                        <Link to={`/${film.filmId}`} style={{textDecoration: "none"}}>
                            <FilmCarouselItem film={film} key={film.filmId}/>
                        </Link>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    );
};

export default FilmCarousel;