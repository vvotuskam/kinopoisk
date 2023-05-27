import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    favourites: []
}

export const favouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
        toggleFavourite: (state, {payload}) => {
            const film = payload
            if (state.favourites.some(i => i.kinopoiskId === film.kinopoiskId)) {
                state.favourites = state.favourites.filter(i => i.kinopoiskId !== film.kinopoiskId)
            } else {
                state.favourites.push(film)
            }
        }
    }
})

export const {actions, reducer} = favouriteSlice