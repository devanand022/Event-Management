import { createSlice } from "@reduxjs/toolkit";

const getVerifiedCollegeSlice = createSlice({
    name: 'getVerifiedCollege',
    initialState: {
        loading: false
    },
    reducers: {
        getVerifiedCollegeRequest(state, action){
            return{
                loading: true
            }
        },
        getVerifiedCollegeSuccess(state, action){
            return{
                loading: false,
                verifiedcolleges: action.payload.verifiedcollege
            }
        },
        getVerifiedCollegeFail(state, action){
            return{
                laoding: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = getVerifiedCollegeSlice;

export const { getVerifiedCollegeRequest, getVerifiedCollegeSuccess, getVerifiedCollegeFail } = actions;

export default reducer;