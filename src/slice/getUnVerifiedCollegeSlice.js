import { createSlice } from "@reduxjs/toolkit";

const getUnVerifiedCollegeSlice = createSlice({
    name: 'getUnverifiedCollege',
    initialState: {
        loading: true
    },
    reducers: {
        getUnVerifiedCollegeRequest(state, action){
            return{
                loading: true
            }
        },
        getUnVerifiedCollegeSuccess(state, action){
            return{
                loading: false,
                unverifiedcolleges: action.payload.unverifiedcollege
            }
        },
        getUnVerifiedCollegeFail(state, action){
            return{
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = getUnVerifiedCollegeSlice;

export const { getUnVerifiedCollegeRequest, getUnVerifiedCollegeSuccess, getUnVerifiedCollegeFail } = actions;

export default reducer;