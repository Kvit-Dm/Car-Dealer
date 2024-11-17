import { configureStore } from '@reduxjs/toolkit';

import searchCarReducer from './searchCarSlice'
import CarMakesSlice from "@/redux/CarMakesSlice";


export const store = configureStore({
    reducer: {
        searchCar: searchCarReducer,
        chooseCarMakes: CarMakesSlice,

    },
    devTools: process.env.NODE_ENV !== 'production',
});