import { createSlice } from "@reduxjs/toolkit";

const VerifyCollegeSlice = createSlice({
    name: 'verifyCollege',
    initialState: {
        loading: false
    },
    reducers: {
        VerifyCollegeRequest(state, action){
            return{
                loading: true
            }
        },
        VerifyCollegeSuccess(state, action){
            return{
                loading: false,
                message: action.payload.message
            }
        },
        VerifyCollegeFail(state, action){
            return{
                laoding: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = VerifyCollegeSlice;

export const { VerifyCollegeRequest, VerifyCollegeSuccess, VerifyCollegeFail } = actions;

export default reducer;