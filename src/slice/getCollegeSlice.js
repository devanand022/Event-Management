import { createSlice } from "@reduxjs/toolkit";


const getCollegeSlice = createSlice({
    name: 'getColleges',
    initialState: {
        loading: false
    },
    reducers: {
        getCollegeRequest(state, action){
            return {
                loading: true
            }
        },
        getCollegeSuccess(state, action){
            return {
                loading: false,
                getColleges: action.payload.college
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

const { actions, reducer } = getCollegeSlice;

export const { getCollegeRequest, getCollegeSuccess, getCollegeFail } = actions;

export default reducer;