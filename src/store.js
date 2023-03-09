import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import collegeReducer from "./slice/collegeSlice";
import getCollegeReducer from "./slice/getCollegeSlice";
import getEventReducer from "./slice/getEventSlice";

const reducer = combineReducers({
    collegeState: collegeReducer,
    getCollegeState: getCollegeReducer,
    getEventState: getEventReducer
})

const store = configureStore({
    reducer, middleware: [thunk]
})

export default store;