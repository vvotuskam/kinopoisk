import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from "react-router-dom";
import FilmItem from "../item/FilmItem";
import {Button} from "react-bootstrap";
import {IoMdRemoveCircleOutline} from "react-icons/io";
import {actions} from "../../../store/favourite/favouriteSlice";
import {CiBookmarkRemove} from "react-icons/ci";

const FilmFavourite = () => {
    const state = useSelector(state => state.favourites.favourites);
    const [favourites, setFavourites] = useState(state)
    const dispatch = useDispatch()

    useEffect(() => {
        setFavourites(state)
    }, [state])

    const handleRemove = (film) => {
        dispatch(actions.toggleFavourite(film))
    }

    if (favourites.length === 0) {
        return <div className='d-flex justify-content-center align-items-center' style={{margin: 50}}>
            No favourites
        </div>
    }

    return (
        <>
            {
                favourites.map(film => (
                    <div>
                        <div className={'items'}>
                            <div className='d-flex align-items-start'>
                                <div style={{marginRight: 25}}>
                                    <Link to={`/${film.kinopoiskId}`} style={{textDecoration: "none"}}>
                                        <FilmItem key={film.kinopoiskId} film={film}/>
                                    </Link>
                                </div>
                                <div >
                                    <CiBookmarkRemove onClick={() => handleRemove(film)} style={{color: "#ff4545", fontSize: 46, cursor: 'pointer'}}/>
                                </div>
                            </div>
                        </div>
                    </div>

                ))
            }
        </>
    );
};

export default FilmFavourite;
