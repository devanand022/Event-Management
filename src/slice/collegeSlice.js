import { createSlice } from '@reduxjs/toolkit';

const CreateCollege = createSlice({
    name : 'college',
    initialState : {
        loading: false,
        college_name: {}
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

const { actions, reducers } = CreateCollege;

export const { collegeRequest, collegeSuccess, collegeFail } = actions;

export default reducers;