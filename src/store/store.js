import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer} from "./favourite/favouriteSlice";

const reducers = combineReducers({
    favourites: reducer
})

export const store = configureStore({
    reducer: reducers
})