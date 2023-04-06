import { createSlice } from '@reduxjs/toolkit';

const finalResultSlice = createSlice({
    name : 'finalresult',
    initialState : {
        loading: false,
    },
    reducers :{
        finalResultRequest(state, action){
            return {
                loading: true
            }
        },
        finalResultSuccess(state, action){
            return {
                loading: false,
                finalresult: action.payload.finalresult
            }
        },
        finalResultFail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = finalResultSlice;

export const { finalResultRequest, finalResultSuccess, finalResultFail } = actions;

export default reducer;