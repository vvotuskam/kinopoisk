import React, { Component } from 'react';
import FilmService from "../../../service/FilmService";
import { Col, Row } from "react-bootstrap";
import FilmItem from "../item/FilmItem";
import './FilmCatalog.css'
import { Link } from "react-router-dom";
import FilmPagination from "../other/FilmPagination";
import FilmSelect from "../other/FilmSelect";

class FilmCatalog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: [],
            totalPages: -1,
            currentPage: 1,
            order: ''
        };
    }

    componentDidMount() {
        this.getFilms();
    }

    componentDidUpdate(prevProps, prevState) {
        const { currentPage, order } = this.state;

        if (currentPage !== prevState.currentPage || order !== prevState.order) {
            this.getFilms();
        }
    }

    getFilms = async () => {
        try {
            const { currentPage, order } = this.state;
            const data = await FilmService.fetchAllFilms(currentPage, order);
            this.setState({
                films: data.items,
                totalPages: data.totalPages
            });
        } catch (e) {
            console.error(e);
        }
    }

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
        window.scrollTo(0, 0);
    }

    handleSelect = (e) => {
        this.setState({ order: e.target.value });
    }

    render() {
        const { films, totalPages, currentPage } = this.state;

        return (
            <div className='catalog'>
                <div style={{ width: '100%', margin: 10 }}>
                    <Row style={{ float: "right" }}>
                        <Col className='d-flex align-items-center'>
                            <FilmSelect handleSelect={this.handleSelect} />
                        </Col>
                    </Row>
                </div>
                <div className='items'>
                    {
                        films
                            .filter(film => film.nameRu !== 'BadComedian' && film.nameRu !== 'Лорды раздевалки')
                            .map(film => (
                                <Link to={`/${film.kinopoiskId}`} style={{ textDecoration: "none" }} key={film.kinopoiskId}>
                                    <FilmItem key={film.kinopoiskId} film={film} />
                                </Link>
                            ))
                    }
                </div>
                <FilmPagination totalPages={totalPages} currentPage={currentPage} handlePageChange={this.handlePageChange} />
            </div>
        );
    }
}

export default FilmCatalog;
