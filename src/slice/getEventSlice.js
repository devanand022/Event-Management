import { createSlice } from "@reduxjs/toolkit";


const getEventSlice = createSlice({
    name: 'getevent',
    initialState: {
        loading: false,
        events: {}
    },
    reducers:{
        getEventRequest(state, action){
            return {
                loading: false
            }
        },
        getEventSuccess(state, action){
            return {
                loading: true,
                events: action.payload.event
            }
        },
        getEventFail(state, action){
            return {
                loading : false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = getEventSlice;

export const { getEventRequest, getEventSuccess, getEventFail } = actions;

export default reducer;