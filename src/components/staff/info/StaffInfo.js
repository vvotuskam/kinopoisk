import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Image, Container, Row, Col, Badge} from 'react-bootstrap';
import FilmService from '../../../service/FilmService';
import {BiLinkExternal} from "react-icons/bi";
import FilmCarousel from "../../film/carousel/FilmCarousel";

const StaffInfo = () => {
    const params = useParams();
    const [staff, setStaff] = useState(null);

    const getStaffById = async () => {
        try {
            const data = await FilmService.fetchFilmStaffById(params.id);
            setStaff(data);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        getStaffById();
    }, []);

    if (!staff) {
        return <div>No staff data</div>;
    }

    const { nameRu, nameEn, posterUrl, profession, films, webUrl } = staff;

    const getProfessions = () => {
        const array = profession.split(', ')
        return array.map((i, index) => (
            <Badge style={{marginRight: 5}} key={index}>
                {i}
            </Badge>
        ))
    }

    return (
        <Container className="staff-info" style={{marginTop: 50}}>
            <Row>
                <Col xs={12} md={4}>
                    <Image src={posterUrl} alt={nameRu} className="staff-image" fluid />
                </Col>
                <Col xs={12} md={8} className="staff-details">
                    <h2 className="staff-name">{nameRu}</h2>
                    <p className="staff-name-en">
                        <a href={webUrl} target='blank' style={{textDecoration: "none"}}>
                            {nameEn} <BiLinkExternal/>
                        </a>
                    </p>
                    <p className="staff-profession">{getProfessions()}</p>
                    <h4>Films:</h4>
                    <FilmCarousel films={films}/>
                </Col>
            </Row>
        </Container>
    );
};

export default StaffInfo;
