import React, { useEffect, useState } from 'react';
import {Link, useParams} from "react-router-dom";import FilmService from "../../service/FilmService";
import FilmItem from "./item/FilmItem";
import FilmPagination from "./other/FilmPagination";

const FilmSearch = () => {

    const params = useParams()

    const [films, setFilms] = useState([]);
    const [totalPages, setTotalPages] = useState(-1);
    const [currentPage, setCurrentPage] = useState(1);
    const [keyword, setKeyword] = useState('')

    const getFilms = async () => {

        const keyword = params.keyword

        try {
            const filmsData = await FilmService.fetchFilmByKeyword(keyword, currentPage)

            setFilms(filmsData.films)
            setTotalPages(filmsData.pagesCount)
            setKeyword(keyword)
        } catch (e) {
            console.error(e);
        }
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        getFilms();
    }, [currentPage, params.keyword]);

    return (
        <div className='catalog'>
            <h2>Search result for "{keyword}"</h2>
            <br/>
            <div className='items'>
                {
                    films
                        .filter(film => film.nameRu !== 'BadComedian')
                        .map(film => (
                            <Link to={`/${film.filmId}`} style={{textDecoration: "none"}}>
                                <FilmItem key={film.filmId} film={film}/>
                            </Link>
                        ))
                }
            </div>
            <FilmPagination totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange}/>
        </div>
    );
};

export default FilmSearch;
