import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { adminReducer } from "./slices/adminSlice"

export const store = configureStore({
    reducer: combineReducers({
        admin: adminReducer.reducer,
    }),

    devTools: process.env.NODE_ENV === 'development',
})