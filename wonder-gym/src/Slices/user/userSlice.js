import { createSlice } from "@reduxjs/toolkit";
import { onPostLoginFullfiled, onPostLoginRejected, postLogin } from "./requests/postLogin";

const userSlice = createSlice({
    name: 'app',
    initialState:{
        user: null,
        userIsLoggedIn: false,
        errorMessage: "",
    },
    reducers:{
        login: (state, action) =>{
            state.userIsLoggedIn = true;
            state.user = action.payload.user;
        },
        logout: (state) => {
            state.userIsLoggedIn = false;
            state.user = null;
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