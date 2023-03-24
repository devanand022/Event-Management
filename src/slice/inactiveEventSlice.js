import { createSlice } from "@reduxjs/toolkit";

const inactiveEventSlice = createSlice({
    name: 'inactivebtn',
    initialState: {
        loading: false
    },
    reducers: {
        inactiveEventRequest(state, action){
            return{
                loading: true
            }
        },
        inactiveEventSuccess(state, action){
            return{
                loading: false,
                message: action.payload.message
            }
        },
        inactiveEventFail(state, action){
            return{
                laoding: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = inactiveEventSlice;

export const { inactiveEventRequest, inactiveEventSuccess, inactiveEventFail } = actions;

export default reducer;