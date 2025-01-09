import { createSlice } from '@reduxjs/toolkit';

const searchCarSlice = createSlice({
  name: 'searchCar',
  initialState: { value: '' },
  reducers: {
    setSearchCar: (state, action) => {
      state.value = action.payload;
    },
    clearSearchCar: (state) => {
      state.value = '';
    },
  },
});

export const { setSearchCar, clearSearchCar } = searchCarSlice.actions;
export default searchCarSlice.reducer;
