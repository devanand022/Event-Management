import { createSlice } from "@reduxjs/toolkit";

const VerifyParticipateSlice = createSlice({
    name: 'VerifyParticipate',
    initialState: {
        loading: false
    },
    reducers: {
        VerifyParticipateRequest(state, action){
            return{
                loading: true
            }
        },
        VerifyParticipateSuccess(state, action){
            return{
                loading: false,
                message: action.payload.message
            }
        },
        VerifyParticipateFail(state, action){
            return{
                laoding: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = VerifyParticipateSlice;

export const { VerifyParticipateRequest, VerifyParticipateSuccess, VerifyParticipateFail } = actions;

export default reducer;