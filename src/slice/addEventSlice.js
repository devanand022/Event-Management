import { createSlice } from '@reduxjs/toolkit';

const addEventSlice = createSlice({
    name : 'addEvent',
    initialState : {
        loading: false,
    },
    reducers :{
        addEventRequest(state, action){
            return {
                loading: true
            }
        },
        addEventSuccess(state, action){
            return {
                loading: false,
                message: action.payload.message
            }
        },
        addEventFail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = addEventSlice;

export const { addEventRequest, addEventSuccess, addEventFail } = actions;

export default reducer;