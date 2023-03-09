import { createSlice } from "@reduxjs/toolkit";

const getCollegeSlice = createSlice({
    name: 'getcollege',
    initialState: {
        loading: false,
        colleges: {}
    },
    reducers: {
        getCollegeRequest(state, action){
            return {
                loading: true
            }
        },
        getCollegeSuccess(state, action){
            return {
                loading: true,
                colleges: action.payload.result
            }
        },
        getCollegeFail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const {actions, reducer} = getCollegeSlice;

export const { getCollegeRequest, getCollegeSuccess, getCollegeFail } = actions;

export default reducer;