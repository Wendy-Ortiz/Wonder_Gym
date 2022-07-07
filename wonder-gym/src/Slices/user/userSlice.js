import { createSlice } from "@reduxjs/toolkit";
import { onPostLoginFullfiled, onPostLoginRejected, postLogin } from "./requests/postLogin";

const userSlice = createSlice({
    name: 'user',
    initialState:{
        token: null,
        userIsLoggedIn: false,
        errorMessage: "",
    },
    reducers:{
        login: (state, action) =>{
            state.userIsLoggedIn = true;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.userIsLoggedIn = false;
            state.token = null;
            window.localStorage.removeItem('token');
        }
    },
    extraReducers(builder) {
        builder
            .addCase(postLogin.fulfilled, onPostLoginFullfiled)
            .addCase(postLogin.rejected, onPostLoginRejected)
    },
    });

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;