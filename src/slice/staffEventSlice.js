import { createSlice } from '@reduxjs/toolkit';

const staffEventSlice = createSlice({
    name : 'staffEvent',
    initialState : {
        loading: false,
    },
    reducers :{
        staffEventRequest(state, action){
            return {
                loading: true
            }
        },
        staffEventSuccess(state, action){
            return {
                loading: false,
                staffevent: action.payload.staffevent
            }
        },
        staffEventFail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } =staffEventSlice;

export const { staffEventRequest, staffEventSuccess, staffEventFail } = actions;

export default reducer;