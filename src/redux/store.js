import { configureStore } from '@reduxjs/toolkit';

import searchCarReducer from './searchCarSlice';
import CarMakesSlice from '@/redux/CarMakesSlice';
import displayResultSlise from "@/redux/displayResultSlise";
import filterData from '@/redux/filterDataSlice';

export const store = configureStore({
  reducer: {
    searchCar: searchCarReducer,
    chooseCarMakes: CarMakesSlice,
    toggleResultAction: displayResultSlise,
    filterData: filterData,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
