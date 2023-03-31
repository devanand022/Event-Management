import { createSlice } from '@reduxjs/toolkit';

const activeReguserSlice = createSlice({
    name : 'activereguser',
    initialState : {
        loading: false,
    },
    reducers :{
        activeReguserRequest(state, action){
            return {
                loading: true
            }
        },
        activeReguserSuccess(state, action){
            return {
                loading: false,
                reguser: action.payload.reguser
            }
        },
        activeReguserFail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = activeReguserSlice;

export const { activeReguserRequest, activeReguserSuccess, activeReguserFail } = actions;

export default reducer;