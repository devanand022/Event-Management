import { createSlice } from "@reduxjs/toolkit";


const getEventSlice = createSlice({
    name: 'getevents',
    initialState: {
        loading: false
    },
    reducers: {
        getEventRequest(state, action){
            return {
                loading: true
            }
        },
        getEventSuccess(state, action){
            return {
                loading: false,
                getEvents: action.payload.event
            }
        },
        getEventFail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = getEventSlice;

export const { getEventRequest, getEventSuccess, getEventFail } = actions;

export default reducer;