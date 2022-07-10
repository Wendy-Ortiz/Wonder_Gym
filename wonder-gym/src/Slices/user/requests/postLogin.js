import { createAsyncThunk } from "@reduxjs/toolkit";

export const postLogin = createAsyncThunk('usuarios/postLogin', async (credentials) => {
    const loginFetch = await fetch('http://localhost:3001/users/login', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            email: credentials.username,
            password: credentials.password,
        }),
    });

    const userToken = await loginFetch.json();
    if (loginFetch.status === 200) {
        return userToken;
    } else {
        return {
            error: true,
            message: userToken.error.message,
        }
    }
});

export const onPostLoginFullfiled = (state, action) => {
    if (action.payload.error) {
        state.userIsLoggedIn = false;
        state.token = null;
        state.errorMessage = action.payload.message;
    } else {
        state.userIsLoggedIn = true;

        state.userId = action.payload["id"];
        state.userName = action.payload["name"];
        state.userEmail = action.payload["email"];
        state.token = action.payload["token"];
        state.errorMessage = "";
        try{
            window.localStorage.setItem('token', action.payload["token"]);
        } catch(error){
            console.log(error);
        }
    }
};

export const onPostLoginRejected = (state) => {
    state.errorMessage = "Rejected";
    state.userIsLoggedIn = false;
    state.token = null;
}