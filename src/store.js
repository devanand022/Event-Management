import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import collegeReducer from "./slice/collegeSlice";
import getCollegeReducer from './slice/getCollegeSlice';
import getEventReducer from './slice/getEventSlice';
import addReducer from './slice/addSlice';
import getUnVerifiedCollegeReducer from './slice/getUnVerifiedCollegeSlice';
import getVerifiedCollegeReducer from './slice/getVerifiedCollegeSlice';
import singleCollegeReducer from './slice/singleCollegeSlice';
import getParticipateReducer from './slice/getParticipateSlice';
import singleParticipateReducer from './slice/singleParticipateSlice';

const reducer = combineReducers({
    collegeState: collegeReducer,
    getCollegeState: getCollegeReducer,
    addState: addReducer,
    getEventState: getEventReducer,
    getUnVerifiedCollegeState: getUnVerifiedCollegeReducer,
    getVerifiedCollegeState: getVerifiedCollegeReducer,
    singleCollegeState: singleCollegeReducer,
    getParticipateState: getParticipateReducer,
    singleParticipateState: singleParticipateReducer
})

const store = configureStore({
    reducer, middleware: [thunk]
})

export default store;