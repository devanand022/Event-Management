import { createSlice } from '@reduxjs/toolkit';

const getReguserSlice = createSlice({
    name : 'getreguser',
    initialState : {
        loading: false,
    },
    reducers :{
        getReguserRequest(state, action){
            return {
                loading: true
            }
        },
        getReguserSuccess(state, action){
            return {
                loading: false,
                reguser: action.payload.reguser
            }
        },
        getReguserFail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = getReguserSlice;

export const { getReguserRequest, getReguserSuccess, getReguserFail } = actions;

export default reducer;