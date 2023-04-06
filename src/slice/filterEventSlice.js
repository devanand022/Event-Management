import { createSlice } from '@reduxjs/toolkit';

const filterEventSlice = createSlice({
    name : 'filterEvent',
    initialState : {
        loading: false,
    },
    reducers :{
        filterEventRequest(state, action){
            return {
                loading: true
            }
        },
        filterEventSuccess(state, action){
            return {
                loading: false,
                filterevent: action.payload.filterevent
            }
        },
        filterEventFail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = filterEventSlice;

export const { filterEventRequest, filterEventSuccess, filterEventFail } = actions;

export default reducer;