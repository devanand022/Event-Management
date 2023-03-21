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
import verifyCollegeReducer from './slice/VerifyCollegeSlice';
import unVerifyCollegeReducer from './slice/unVerifyCollegeSlice';
import verifyParticipateReducer from './slice/VerifyParticipateSlice';
import unVerifyParticipateReducer from './slice/unVerifyParticipateSlice';
import delCollegeReducer from './slice/delCollegeSlice';
import delParticipateReducer from './slice/delParticipateSlice';
import delSingleParticipateReducer from './slice/delSingleParticipateSlice';
import selectEventReducer from './slice/selectEvent';
import countCollegeReducer from './slice/countCollege';
import countParticipateReducer from './slice/countParticipate';

const reducer = combineReducers({
    collegeState: collegeReducer,
    getCollegeState: getCollegeReducer,
    addState: addReducer,
    getEventState: getEventReducer,
    getUnVerifiedCollegeState: getUnVerifiedCollegeReducer,
    getVerifiedCollegeState: getVerifiedCollegeReducer,
    singleCollegeState: singleCollegeReducer,
    getParticipateState: getParticipateReducer,
    singleParticipateState: singleParticipateReducer,
    verifyCollegeState: verifyCollegeReducer,
    unVerifyCollegeState: unVerifyCollegeReducer,
    verifyParticipateState: verifyParticipateReducer,
    unVerifyParticipateState: unVerifyParticipateReducer,
    delCollegeState: delCollegeReducer,
    delParticipateState: delParticipateReducer,
    delSingleParticipateState: delSingleParticipateReducer,
    selectEventState: selectEventReducer,
    countCollegeState: countCollegeReducer,
    countParticipateState: countParticipateReducer,
})

const store = configureStore({
    reducer, middleware: [thunk]
})

export default store;