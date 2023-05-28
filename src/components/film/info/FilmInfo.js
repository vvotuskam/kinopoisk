import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import FilmService from "../../../service/FilmService";
import {Badge, Button, Col, Container, Dropdown, Form, Image, Row, Table} from "react-bootstrap";
import './FilmInfo.css'
import {BsBookmarks, BsBookmarksFill} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../../store/favourite/favouriteSlice";
import StaffCarousel from "../../staff/carousel/StaffCarousel";
import ImageCarousel from "../../other/ImageCaroulsel";

const FilmInfo = () => {

    const [film, setFilm] = useState()
    const [awards, setAwards] = useState()
    const [isFavourite, setIsFavourite] = useState(false);
    const [images, setImages] = useState()
    const [staff, setStaff] = useState()

    const params = useParams()
    const navigate = useNavigate()

    const { favourites } = useSelector(state => state.favourites);
    const dispatch = useDispatch()

    const setUp = async () => {
        try {
            const filmData = await FilmService.fetchFilmById(params.id)
            const awardsData = await FilmService.fetchFilmAwardsById(params.id)
            const staffData = await FilmService.fetchFilmStaff(params.id)
            const imagesData = await FilmService.fetchFilmImages(params.id)

            setIsFavourite(favourites.some(f => f.kinopoiskId === filmData.kinopoiskId))
            setFilm(filmData)
            setAwards(awardsData.items)
            setStaff(staffData)
            setImages(imagesData)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        setUp();
    }, [])


    if (!film || !awards) {
        return <div>Film not found</div>
    }

    const handleFavourite = () => {
        dispatch(actions.toggleFavourite(film))
        setIsFavourite(!isFavourite)
    }

    return (
        <Container style={{color: "white"}}>
            <Row className="film-info">
                <Col xs={12} md={4} className="text-center">
                    <Image src={film.posterUrlPreview} alt={film.nameOriginal} fluid className="film-poster" />
                    <Button style={{width: '100%', marginTop: 10, borderRadius: 10}}
                            onClick={() => {
                                handleFavourite()
                                // navigate('/favourites')
                                console.log(favourites)
                            }}>
                        {
                            isFavourite && <BsBookmarksFill/>
                        }
                        {
                            !isFavourite && <BsBookmarks/>
                        }
                    </Button>
                </Col>
                <Col xs={12} md={8} className="film-details">
                    <h3 className="film-name">{film.nameRu}</h3>
                    <p className="film-original-name" key={1}>Original Name: {film.nameOriginal}</p>
                    <p className="film-year" key={2}>Year: {film.year}</p>
                    <p className="film-countries" key={3}>
                        Countries: {film.countries.map((country, index) => (
                        <Badge variant="secondary" className="mr-1" key={index}>
                            {country.country}
                        </Badge>
                    ))}
                    </p>
                    <p className="film-genres" key={4}>
                        Genres: {film.genres.map((genre, index) => (
                        <Badge variant="secondary" className="mr-1" key={index}>
                            {genre.genre}
                        </Badge>
                    ))}
                    </p>
                    <p className="film-rating-kinopoisk" key={9}>Kinopoisk Rating: {film.ratingKinopoisk}</p>
                    <p className="film-rating-imdb" key={8}>IMDb Rating: {film.ratingImdb}</p>
                    <p className="film-description" key={7}>{film.description}</p>
                    <p className="film-slogan" key={6}>Slogan: {film.slogan}</p>
                </Col>
            </Row>

            <Row>
                <ImageCarousel images={images}/>
            </Row>

            {
                awards.length !== 0 && (
                    <Row>
                        <Table striped bordered hover responsive variant={'dark'}>
                            <thead>
                            <tr>
                                <th>Award</th>
                                <th>Nomination</th>
                                <th>Year</th>
                            </tr>
                            </thead>
                            <tbody>
                            {awards.map((award, index) => (
                                <tr key={index} >
                                    <td>{award.name}</td>
                                    <td>{award.nominationName}</td>
                                    <td>{award.year}</td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </Row>
                )
            }
            <br/>
            <h1>Staff</h1>
            <br/>
            <StaffCarousel filmId={film.kinopoiskId}/>
        </Container>
    );
};

export default FilmInfo;