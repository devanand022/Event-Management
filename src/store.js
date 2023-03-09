import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import collegeReducer from "./slice/collegeSlice";

const reducer = combineReducers({
    collegeState: collegeReducer,
})

const store = configureStore({
    reducer, middleware: [thunk]
})

export default store;