import { createSlice } from '@reduxjs/toolkit';

const CarMakesSlice = createSlice({
  name: 'chooseCarMakes',
  initialState: { value: NaN },
  reducers: {
    setCarMakes: (state, action) => {
      state.value = action.payload;
    },
    clearCarMakes: (state) => {
      state.value = NaN;
    },
  },
});

export const { setCarMakes, clearCarMakes } = CarMakesSlice.actions;
export default CarMakesSlice.reducer;
