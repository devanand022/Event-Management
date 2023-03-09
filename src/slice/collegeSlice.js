import { createSlice } from '@reduxjs/toolkit';

const collegeSlice = createSlice({
    name : 'college',
    initialState : {
        loading: false,
    },
    reducers :{
        collegeRequest(state, action){
            return {
                loading: true
            }
        },
        collegeSuccess(state, action){
            return {
                loading: false,
                message: action.payload.message
            }
        },
        collegeFail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = collegeSlice;

export const { collegeRequest, collegeSuccess, collegeFail } = actions;

export default reducer;