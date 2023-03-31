import { createSlice } from '@reduxjs/toolkit';

const activeEventSlice = createSlice({
    name : 'activeEvent',
    initialState : {
        loading: false,
    },
    reducers :{
        activeEventRequest(state, action){
            return {
                loading: true
            }
        },
        activeEventSuccess(state, action){
            return {
                loading: false,
                message: action.payload.message
            }
        },
        activeEventFail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = activeEventSlice;

export const { activeEventRequest, activeEventSuccess, activeEventFail } = actions;

export default reducer;