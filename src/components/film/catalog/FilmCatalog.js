import React, { useEffect, useState } from 'react';
import FilmService from "../../../service/FilmService";
import {Col, Container, Form, Pagination, Row} from "react-bootstrap";
import axios from "axios";
import FilmItem from "../item/FilmItem";
import './FilmCatalog.css'
import {Link} from "react-router-dom";
import FilmPagination from "../other/FilmPagination";
import FilmSelect from "../other/FilmSelect";

const FilmCatalog = () => {
    const [films, setFilms] = useState([]);
    const [total, setTotal] = useState();
    const [totalPages, setTotalPages] = useState(-1);
    const [currentPage, setCurrentPage] = useState(1);
    const [order, setOrder] = useState('')

    const getFilms = async () => {
        try {
            const data = await FilmService.fetchAllFilms(currentPage, order);
            setFilms(data.items);
            setTotal(data.total);
            setTotalPages(data.totalPages);
        } catch (e) {
            console.error(e);
        }
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0)
    }

    const handleSelect = (e) => {
        setOrder(e.target.value)
    }

    useEffect(() => {
        getFilms();
    }, [currentPage, order]);

    // const renderPagination = () => {
    //     if (totalPages === -1) return null;
    //
    //     const paginationItems = [];
    //     for (let i = 1; i <= totalPages; i++) {
    //         paginationItems.push(
    //             <Pagination.Item
    //                 key={i}
    //                 active={i === currentPage}
    //                 onClick={() => handlePageChange(i)}
    //             >
    //                 {i}
    //             </Pagination.Item>
    //         );
    //     }
    //
    //     return (
    //         <Pagination className="custom-pagination">
    //             {paginationItems}
    //         </Pagination>
    //     );
    // }

    return (
        <div className='catalog'>
            <div style={{width: '100%', margin: 10}}>
                <Row style={{float: "right"}}>
                    <Col className='d-flex align-items-center'>
                        <FilmSelect handleSelect={handleSelect}/>
                    </Col>
                </Row>
            </div>
            <div className='items'>
                {
                    films
                        .filter(film => film.nameRu !== 'BadComedian')
                        .map(film => (
                            <Link to={`/${film.kinopoiskId}`} style={{textDecoration: "none"}}>
                                <FilmItem key={film.kinopoiskId} film={film}/>
                            </Link>
                        ))
                }
            </div>
            {/*{*/}
            {/*    renderPagination()*/}
            {/*}*/}
            <FilmPagination totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange}/>
        </div>
    );
};

export default FilmCatalog;
