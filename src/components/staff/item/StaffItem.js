import React from 'react';
import {Image, Container, Row, Col, Badge} from 'react-bootstrap';
import './StaffItem.css'

const StaffItem = ({ staff }) => {
    const { staffId, nameRu, nameEn, description, posterUrl, professionText, professionKey } = staff;

    return (
        <Container className="staff-item">
            <Row>
                <Col xs={12} md={4}>
                    <Image src={posterUrl} alt={nameRu} className="staff-image" fluid />
                </Col>
                <Col xs={12} md={8} className="staff-details">
                    <h3 className="staff-name">{nameRu}</h3>
                    <p className="staff-name-en">{nameEn}</p>
                    <p className="staff-description">{description}</p>
                    <p className="staff-profession">Profession: {professionText}</p>
                    <p className="staff-profession-key">
                        <Badge>
                            {professionKey}
                        </Badge>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default StaffItem;
