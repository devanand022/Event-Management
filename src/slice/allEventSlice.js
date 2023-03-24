import { createSlice } from '@reduxjs/toolkit';

const allEventSlice = createSlice({
    name : 'allevent',
    initialState : {
        loading: false,
    },
    reducers :{
        allEventRequest(state, action){
            return {
                loading: true
            }
        },
        allEventSuccess(state, action){
            return {
                loading: false,
                events: action.payload.allevent
            }
        },
        allEventFail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = allEventSlice;

export const { allEventRequest, allEventSuccess, allEventFail } = actions;

export default reducer;