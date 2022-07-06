import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState:{
        language: 'es',
        loading: false,
    },
    reducers:{
        toggleLoading: (state) =>{
            state.loading = !state.loading;
        }
    }
});

export const { toggleLoading } = appSlice.actions;

export default appSlice.reducer;