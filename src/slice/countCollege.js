import { createSlice } from '@reduxjs/toolkit';

const countCollege = createSlice({
    name : 'countcollege',
    initialState : {
        loading: false,
    },
    reducers :{
        countCollegeRequest(state, action){
            return {
                loading: true
            }
        },
        countCollegeSuccess(state, action){
            return {
                loading: false,
                collegecount: action.payload.count
            }
        },
        countCollegeFail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = countCollege;

export const { countCollegeRequest, countCollegeSuccess, countCollegeFail } = actions;

export default reducer;