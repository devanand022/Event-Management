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
import allEventReducer from './slice/allEventSlice';
import activeEventReducer from './slice/activeEventSlice';
import inactiveEventReducer from './slice/inactiveEventSlice';
import addEventReducer from './slice/addEventSlice';
import addReguserReducer from './slice/addReg_userSlice';
import getReguserReducer from './slice/getReguserSlice';
import inactiveReguserReducer from './slice/inactiveReguserSlice';
import activeReguserReducer from './slice/activeReguserSlice';
import addStaffuserReducer from './slice/addStaffuserSlice';
import getStaffuserReducer from './slice/getStaffuserSlice';
import activeStaffuserReducer from './slice/activeStaffSlice';
import inactiveStaffuserReducer from './slice/inactiveStaffSlice';
import staffEventReducer from './slice/staffEventSlice';
import selectEvent1Reducer from './slice/selectEvent1Slice';
import selectEvent2Reducer from './slice/selectEvent2Slice';
import unselectEvent1Reducer from './slice/unselectEvent1Slice';
import unselectEvent2Reducer from './slice/unselectEvent2Slice';
import filterEventReducer from './slice/filterEventSlice';
import update1FirstReducer from './slice/update1FirstSlice';
import update1SecondReducer from './slice/update1SecondSlice';
import update1ThirdReducer from './slice/update1ThirdSlice';
import update1Reducer from './slice/update1Slice';
import update2FirstReducer from './slice/update2FirstSlice';
import update2SecondReducer from './slice/update2SecondSlice';
import update2ThirdReducer from './slice/update2ThirdSlice';
import update2Reducer from './slice/update2Slice';
import finalResultReducer from './slice/finalResultSlice';

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
    allEventState: allEventReducer,
    activeEventState: activeEventReducer,
    inactiveEventState: inactiveEventReducer,
    addEventState: addEventReducer,
    addReguserState: addReguserReducer,
    getReguserState: getReguserReducer,
    inactiveReguserState: inactiveReguserReducer,
    activeReguserState: activeReguserReducer,
    addStaffuserState: addStaffuserReducer,
    getStaffuserState: getStaffuserReducer,
    activeStaffState: activeStaffuserReducer,
    inactiveStaffState: inactiveStaffuserReducer,
    staffEventState: staffEventReducer,
    selectEvent1State: selectEvent1Reducer,
    selectEvent2State: selectEvent2Reducer,
    unselectEvent1State: unselectEvent1Reducer,
    unselectEvent2State: unselectEvent2Reducer,
    filtereventState: filterEventReducer,
    update1FirstState: update1FirstReducer,
    update1SecondState: update1SecondReducer,
    update1ThirdState: update1ThirdReducer,
    update1State: update1Reducer,
    update2FirstState: update2FirstReducer,
    update2SecondState: update2SecondReducer,
    update2ThirdState: update2ThirdReducer,
    update2State: update2Reducer,
    finalResultState: finalResultReducer
})

const store = configureStore({
    reducer, middleware: [thunk]
})

export default store;