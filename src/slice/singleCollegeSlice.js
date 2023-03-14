import { createSlice } from "@reduxjs/toolkit";

const singleCollegeSlice = createSlice({
    name: 'singleCollegeSlice',
    initialState: {
        loading: false
    },
    reducers: {
        singleCollegeRequest(state, action){
            return{
                loading: true
            }
        },
        singleCollegeSuccess(state, action){
            return{
                loading: false,
                collegedetails: action.payload.singlecollege
            }
        },
        singleCollegeFail(state, action){
            return{
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = singleCollegeSlice;

export const { singleCollegeRequest, singleCollegeSuccess, singleCollegeFail } = actions;

export default reducer;