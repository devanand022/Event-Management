import { createSlice } from "@reduxjs/toolkit";

const unVerifyCollegeSlice = createSlice({
    name: 'unVerifyCollege',
    initialState: {
        loading: false
    },
    reducers: {
        unVerifyCollegeRequest(state, action){
            return{
                loading: true
            }
        },
        unVerifyCollegeSuccess(state, action){
            return{
                loading: false,
                message: action.payload.message
            }
        },
        unVerifyCollegeFail(state, action){
            return{
                laoding: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = unVerifyCollegeSlice;

export const { unVerifyCollegeRequest, unVerifyCollegeSuccess, unVerifyCollegeFail } = actions;

export default reducer;