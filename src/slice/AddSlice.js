import { createSlice } from '@reduxjs/toolkit';

const addParticipates = createSlice({
    name : 'participate',
    initialState : {
        loading: false,
        add: {}
    },
    reducers :{
        createRequest(state, action){
            return {
                loading: true
            }
        },
        createSuccess(state, action){
            return {
                loading: false,
                message: action.payload.message
            }
        },
        createFail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducers } = addParticipates;

export const { createRequest, createSuccess, createFail } = actions;

export default reducers;