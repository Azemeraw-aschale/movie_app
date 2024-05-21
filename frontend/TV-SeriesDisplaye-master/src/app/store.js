import { configureStore } from "@reduxjs/toolkit";
import chanalReducer from "../apis/chanalSlice";
import movieReducer from "../apis/movieSlice"

// import todoReducer from "../api/mapSlice"

export const store = configureStore({
    reducer: {
        chanals: chanalReducer,
        programs:movieReducer,
    }
});

