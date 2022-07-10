import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import appSlice from "./Slices/appSlice";
import userSlice from "./Slices/user/userSlice";

const rootPersistConfig = {
    key: "root",
    storage,
};

const reducers = combineReducers({
    app: appSlice,
    user: userSlice,
});

const persistedReducer = persistReducer(rootPersistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});


export default store;