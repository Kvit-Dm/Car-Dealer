import { configureStore } from '@reduxjs/toolkit';
import counterReducer  from './counterSlice';
import searchCarReducer from './searchCarSlice'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        searchCar: searchCarReducer,

    },
    devTools: process.env.NODE_ENV !== 'production',
});