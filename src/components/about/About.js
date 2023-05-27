import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container style={{color: "white", marginTop: 40, marginBottom: 230}}>
            <h1>About</h1>
            <p>
                Kinopoisk is a popular online movie database and film recommendation service. It provides comprehensive information about movies, including details about their cast, crew, ratings, reviews, and more.
            </p>
            <p>
                Our mission is to help movie enthusiasts discover new films, explore different genres, and make informed decisions about what to watch. Whether you're a casual viewer or a dedicated cinephile, Kinopoisk has something for everyone.
            </p>
            <p>
                At Kinopoisk, you can browse a vast collection of movies from various countries, genres, and eras. Our database includes both classic masterpieces and the latest releases, ensuring that you stay up-to-date with the ever-evolving world of cinema.
            </p>
            <p>
                We strive to provide accurate and reliable information about movies, including their ratings from popular sources like IMDb and Kinopoisk itself. Additionally, our user community actively contributes reviews, ratings, and recommendations, making it a vibrant hub for film discussions.
            </p>
            <p>
                Kinopoisk is committed to enhancing your movie-watching experience. We continuously update our platform to deliver new features, improve search capabilities, and personalize movie recommendations based on your preferences.
            </p>
            <p>
                Thank you for choosing Kinopoisk as your go-to movie resource. We hope you enjoy exploring the world of cinema and finding your next favorite film!
            </p>
        </Container>
    );
};

export default About;
