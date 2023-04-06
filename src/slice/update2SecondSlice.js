import { createSlice } from '@reduxjs/toolkit';

const update2SecondSlice = createSlice({
    name : 'update2second',
    initialState : {
        loading: false,
    },
    reducers :{
        update2SecondRequest(state, action){
            return {
                loading: true
            }
        },
        update2SecondSuccess(state, action){
            return {
                loading: false,
                message: action.payload.message
            }
        },
        update2SecondFail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = update2SecondSlice;

export const { update2SecondRequest, update2SecondSuccess, update2SecondFail } = actions;

export default reducer;