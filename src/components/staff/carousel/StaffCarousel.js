import React, {useEffect, useState} from 'react';
import FilmService from "../../../service/FilmService";
import {Carousel} from "react-bootstrap";
import StaffItem from "../item/StaffItem";
import {Link} from "react-router-dom";

const StaffCarousel = ({filmId}) => {

    const [staff, setStaff] = useState()

    const getStaff = async () => {
        try {
            const data = await FilmService.fetchFilmStaff(filmId)
            setStaff(data)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getStaff()
    }, [])

    if (!staff) {
        return <div>No staff info</div>
    }

    return (
        <Carousel>
            {
                staff.map(s => (
                    <Carousel.Item>
                        <Link to={`/staff/${s.staffId}`} style={{textDecoration: "none"}}>
                            <StaffItem staff={s} key={s.staffId}/>
                        </Link>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    );
};

export default StaffCarousel;