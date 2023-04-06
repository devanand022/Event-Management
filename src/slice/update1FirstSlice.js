import { createSlice } from '@reduxjs/toolkit';

const update1FirstSlice = createSlice({
    name : 'update1first',
    initialState : {
        loading: false,
    },
    reducers :{
        update1FirstRequest(state, action){
            return {
                loading: true
            }
        },
        update1FirstSuccess(state, action){
            return {
                loading: false,
                message: action.payload.message
            }
        },
        update1FirstFail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = update1FirstSlice;

export const { update1FirstRequest, update1FirstSuccess, update1FirstFail } = actions;

export default reducer;