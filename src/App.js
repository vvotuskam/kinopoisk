import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FilmCatalog from "./components/film/catalog/FilmCatalog";
import FilmNavbar from "./components/film/navbar/FilmNavbar";
import FilmFooter from "./components/film/other/FilmFooter";
import FilmInfo from "./components/film/info/FilmInfo";
import About from "./components/about/About";
import FilmFavourite from "./components/film/favourite/FilmFavourite";
import StaffCarousel from "./components/staff/carousel/StaffCarousel";
import StaffInfo from "./components/staff/info/StaffInfo";
import FilmSearch from "./components/film/FilmSearch";

const App = () => {



    return (

        <>

            <BrowserRouter>
                <FilmNavbar/>
                <Routes>
                    <Route path='/' element={<FilmCatalog/>}/>
                    <Route path='/:id' element={<FilmInfo/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/favourites' element={<FilmFavourite/>}/>
                    <Route path='/staff/:id' element={<StaffInfo/>}/>
                    <Route path='/search/:keyword' element={<FilmSearch/>}/>
                </Routes>
            </BrowserRouter>

            {/*<FilmFooter/>*/}
        </>

    );
};

export default App;