import { createSlice } from '@reduxjs/toolkit';

const update2FirstSlice = createSlice({
    name : 'update2first',
    initialState : {
        loading: false,
    },
    reducers :{
        update2FirstRequest(state, action){
            return {
                loading: true
            }
        },
        update2FirstSuccess(state, action){
            return {
                loading: false,
                message: action.payload.message
            }
        },
        update2FirstFail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = update2FirstSlice;

export const { update2FirstRequest, update2FirstSuccess, update2FirstFail } = actions;

export default reducer;