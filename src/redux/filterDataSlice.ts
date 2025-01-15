import {createSlice} from '@reduxjs/toolkit';

const CarMakesSlice = createSlice({
    name: 'filterData',
    initialState: {
        value: {
            searchId: '',
            searchYear: NaN,
            toggleDisplayResult: false

        }
    },
    reducers: {
        setFilterData: (state, action) => {
            state.value = action.payload;
        },
        setDisplayToFalse: (state) => {
            state.value.toggleDisplayResult = false;
        },

        setFilterDataToDefault: (state) => {
            state.value = {
                searchId: '',
                searchYear: NaN,
                toggleDisplayResult: false
            };
        }
    },
});

export const {
    setFilterData,
    setDisplayToFalse,
    setFilterDataToDefault,
} = CarMakesSlice.actions;
export default CarMakesSlice.reducer;
