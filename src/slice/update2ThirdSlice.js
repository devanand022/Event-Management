import { createSlice } from '@reduxjs/toolkit';

const update2ThirdSlice = createSlice({
    name : 'update2third',
    initialState : {
        loading: false,
    },
    reducers :{
        update2ThirdRequest(state, action){
            return {
                loading: true
            }
        },
        update2ThirdSuccess(state, action){
            return {
                loading: false,
                message: action.payload.message
            }
        },
        update2ThirdFail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = update2ThirdSlice;

export const { update2ThirdRequest, update2ThirdSuccess, update2ThirdFail } = actions;

export default reducer;