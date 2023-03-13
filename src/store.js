import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import collegeReducer from "./slice/collegeSlice";
import getCollegeReducer from './slice/getCollegeSlice';
import getEventReducer from './slice/getEventSlice';
import addReducer from './slice/addSlice';
import getUnVerifiedCollegeReducer from './slice/getUnVerifiedCollegeSlice';

const reducer = combineReducers({
    collegeState: collegeReducer,
    getCollegeState: getCollegeReducer,
    addState: addReducer,
    getEventState: getEventReducer,
    getUnVerifiedCollegeState: getUnVerifiedCollegeReducer
})

const store = configureStore({
    reducer, middleware: [thunk]
})

export default store;