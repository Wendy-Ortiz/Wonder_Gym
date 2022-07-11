import { createSlice } from "@reduxjs/toolkit";
import { onPostLoginFullfiled, onPostLoginRejected, postLogin } from "./requests/postLogin";
import { onCreateUserFullfiled, onCreateUserRejected, createUser } from "./requests/createUsers";

const userSlice = createSlice({
    name: 'user',
    initialState:{
        userId: null,
        userName: null,
        userEmail: null,
        token: null,
        userIsLoggedIn: false,
        userSuccessfullyRegistered: false,
        errorMessage: "",
    },
    reducers:{
        logout: (state) => {
            state.userIsLoggedIn = false;
            state.userId = null;
            state.userName = null;
            state.userEmail = null;
            state.token = null;
            window.localStorage.removeItem('token');
        }
    },
    extraReducers(builder) {
        builder
            .addCase(postLogin.fulfilled, onPostLoginFullfiled)
            .addCase(postLogin.rejected, onPostLoginRejected)
            .addCase(createUser.fulfilled, onCreateUserFullfiled)
            .addCase(createUser.rejected, onCreateUserRejected)
    },
    });

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;