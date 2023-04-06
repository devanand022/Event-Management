import { createSlice } from '@reduxjs/toolkit';

const update1SecondSlice = createSlice({
    name : 'update1second',
    initialState : {
        loading: false,
    },
    reducers :{
        update1SecondRequest(state, action){
            return {
                loading: true
            }
        },
        update1SecondSuccess(state, action){
            return {
                loading: false,
                message: action.payload.message
            }
        },
        update1SecondFail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = update1SecondSlice;

export const { update1SecondRequest, update1SecondSuccess, update1SecondFail } = actions;

export default reducer;