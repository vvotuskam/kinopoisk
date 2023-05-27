import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const FilmFooter = () => {
    return (
        <Navbar
            bg="dark"
            variant="dark"
            expand="lg"
            className="footer">
            <Container style={{display: "flex", justifyContent: "center", height: 100}}>
                <Navbar.Text>
                    © {new Date().getFullYear()} Kinopoisk. All rights reserved.
                </Navbar.Text>
            </Container>
        </Navbar>
    );
};

export default FilmFooter;
