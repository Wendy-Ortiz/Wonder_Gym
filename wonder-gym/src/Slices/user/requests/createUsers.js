import { createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk('usuarios/postUsers', async (credentials) => {
    const loginFetch = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            name: credentials.name,
            email: credentials.email,
            password: credentials.password,
        }),
    });

    const user = await loginFetch.json();
    if (loginFetch.status === 200) {
        return user;
    } else {
        return {
            error: true,
            message: user.error.message,
        }
    }
});

export const onCreateUserFullfiled = (state, action) => {
    if (action.payload.error) {
        state.errorMessage = action.payload.message;
    } else {
        state.errorMessage = "";
        state.token = null;
        state.userIsLoggedIn = false;
        state.userSuccessfullyRegistered = true;
    }
};

export const onCreateUserRejected = (state) => {
    state.errorMessage = "Rejected";
    state.token = null;
    state.userIsLoggedIn = false;
    state.userSuccessfullyRegistered = false;
}

