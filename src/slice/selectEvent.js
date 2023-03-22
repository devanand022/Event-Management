import { createSlice } from '@reduxjs/toolkit';

const selectEvent = createSlice({
    name : 'selectEvent',
    initialState : {
        loading: false,
    },
    reducers :{
        selectEventRequest(state, action){
            return {
                loading: true
            }
        },
        selectEventSuccess(state, action){
            return {
                loading: false,
                selectEvents: action.payload.selectEvents
            }
        },
        selectEventFail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = selectEvent;

export const { selectEventRequest, selectEventSuccess, selectEventFail } = actions;

export default reducer;