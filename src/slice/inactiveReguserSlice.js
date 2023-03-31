import { createSlice } from '@reduxjs/toolkit';

const inactiveReguserSlice = createSlice({
    name : 'inactivereguser',
    initialState : {
        loading: false,
    },
    reducers :{
        inactiveReguserRequest(state, action){
            return {
                loading: true
            }
        },
        inactiveReguserSuccess(state, action){
            return {
                loading: false,
                reguser: action.payload.reguser
            }
        },
        inactiveReguserFail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = inactiveReguserSlice;

export const { inactiveReguserRequest, inactiveReguserSuccess, inactiveReguserFail } = actions;

export default reducer;