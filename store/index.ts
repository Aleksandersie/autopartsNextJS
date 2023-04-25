import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { searchApi } from "./api/searchApi";
import languageSliceReducer from "./languageSlice"


export const store = configureStore({
    reducer:{
        languageSliceReducer,
        [searchApi.reducerPath] : searchApi.reducer   
    },
    middleware: getDefaultMiddleware =>getDefaultMiddleware().concat(searchApi.middleware)

    

})

