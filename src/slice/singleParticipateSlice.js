import { createSlice } from "@reduxjs/toolkit";

const singleParticipateSlice = createSlice({
    name: 'singleParticiapte',
    initialState: {
        loading: false
    },
    reducers: {
        singleParticipateRequest(state, action){
            return{
                loading: true
            }
        },
        singleParticipateSuccess(state, action){
            return{
                loading: false,
                singleparticipate: action.payload.singleparticipate
            }
        },
        singleParticipateFail(state, action){
            return{
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = singleParticipateSlice;

export const { singleParticipateRequest, singleParticipateSuccess, singleParticipateFail } = actions;

export default reducer;