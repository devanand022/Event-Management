import { createSlice } from "@reduxjs/toolkit";

const unVerifyParticipateSlice = createSlice({
    name: 'unVerifyParticipate',
    initialState: {
        loading: false
    },
    reducers: {
        unVerifyParticipateRequest(state, action){
            return{
                loading: true
            }
        },
        unVerifyParticipateSuccess(state, action){
            return{
                loading: false,
                message: action.payload.message
            }
        },
        unVerifyParticipateFail(state, action){
            return{
                laoding: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = unVerifyParticipateSlice;

export const { unVerifyParticipateRequest, unVerifyParticipateSuccess, unVerifyParticipateFail } = actions;

export default reducer;