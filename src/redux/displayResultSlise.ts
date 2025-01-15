import { createSlice } from '@reduxjs/toolkit';

const toggleResultSlise = createSlice({
    name: 'toggleResultAction',
    initialState: { value: false },
    reducers: {
        allowSearch: (state, action) => {
            state.value = true;
        },
        prohibitSearch: (state) => {
            state.value = false;
        },
    },
});

export const { allowSearch, prohibitSearch } = toggleResultSlise.actions;
export default toggleResultSlise.reducer;
