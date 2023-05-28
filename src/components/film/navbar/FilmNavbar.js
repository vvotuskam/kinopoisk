import React, {useState} from 'react';
import {Navbar, Nav, Form, Button} from 'react-bootstrap';
import {Link, useNavigate} from "react-router-dom";

const FilmNavbar = () => {

    const navigate = useNavigate()

    const [keyword, setKeyword] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        setKeyword(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        navigate('/search/' + keyword)
    }

    return (
        <Navbar bg="#ffd500" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Kinopoisk</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to={'/'} style={{textDecoration: "none", color: "white", marginRight: 10}}>Home</Link>
                    <Link to={'/favourites'} style={{textDecoration: "none", color: "white", marginRight: 10}}>Favourites</Link>
                    <Link to={'/about'} style={{textDecoration: "none", color: "white"}}>About</Link>
                </Nav>
                <Form className="d-flex" onSubmit={handleSearch}>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={handleChange}
                    />
                    <Button variant="outline-success" onClick={handleSearch}>
                        Search
                    </Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default FilmNavbar;
