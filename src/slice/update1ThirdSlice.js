import { createSlice } from '@reduxjs/toolkit';

const update1ThirdSlice = createSlice({
    name : 'update1third',
    initialState : {
        loading: false,
    },
    reducers :{
        update1ThirdRequest(state, action){
            return {
                loading: true
            }
        },
        update1ThirdSuccess(state, action){
            return {
                loading: false,
                message: action.payload.message
            }
        },
        update1ThirdFail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = update1ThirdSlice;

export const { update1ThirdRequest, update1ThirdSuccess, update1ThirdFail } = actions;

export default reducer;