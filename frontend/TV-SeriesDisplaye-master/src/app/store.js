import { configureStore } from "@reduxjs/toolkit";
import chanalReducer from "../apis/chanalSlice";
import movieReducer from "../apis/movieSlice"
import loginSlice from "../apis/loginSlice";
import dashboardSlice from "../apis/dashboardSlice";
import typesSlice from "../apis/typesSlice";

import categorySlice from "../apis/categorySlice";
import programcountSlice from "../apis/programSlice";
import  fetchusersCountreducer from "../apis/userDashboardSlice";
import fetchchanalCountreducer from "../apis/chanalcountSlice";
import musicSlice from "../apis/cardSlice";



// import todoReducer from "../api/mapSlice"

export const store = configureStore({
    reducer: {
        chanals: chanalReducer,
        programs:movieReducer,
        logins:loginSlice,
        dashboars:dashboardSlice,

        catagories:categorySlice,
        types:typesSlice,
        programcount:programcountSlice,
        users:fetchusersCountreducer,
        chanalcount: fetchchanalCountreducer,
        music:musicSlice,

    }
});

