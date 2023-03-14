import { createSlice } from "@reduxjs/toolkit";

const getParticipateSlice = createSlice({
    name: 'getparticipate',
    initialState: {
        loading: false
    },
    reducers: {
        getParticipateRequest(state, action){
            return{
                loading: true
            }
        },
        getParticipateSuccess(state, action){
            return{
                loading: false,
                participate: action.payload.participate
            }
        },
        getParticipateFail(state, action){
            return{
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = getParticipateSlice;

export const { getParticipateRequest, getParticipateSuccess, getParticipateFail } = actions;

export default reducer;