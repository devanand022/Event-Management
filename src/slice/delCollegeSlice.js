import { createSlice } from "@reduxjs/toolkit";

const delCollegeSlice = createSlice({
    name: 'delCollege',
    initialState: {
        loading: false
    },
    reducers: {
        delCollegeRequest(state, action){
            return{
                loading: true
            }
        },
        delCollegeSuccess(state, action){
            return{
                loading: false,
                message: action.payload.message
            }
        },
        delCollegeFail(state, action){
            return{
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = delCollegeSlice;

export const { delCollegeRequest, delCollegeSuccess, delCollegeFail } = actions;

export default reducer;