import { createSlice } from "@reduxjs/toolkit";

const delSingleParticipateSlice = createSlice({
    name: 'delSingleParticipate',
    initialState: {
        loading: false
    },
    reducers: {
        delSingleParticipateRequest(state, action){
            return{
                loading: true
            }
        },
        delSingleParticipateSuccess(state, action){
            return{
                loading: false,
                message: action.payload.message
            }
        },
        delSingleParticipateFail(state, action){
            return{
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = delSingleParticipateSlice;

export const { delSingleParticipateRequest, delSingleParticipateSuccess, delSingleParticipateFail } = actions;

export default reducer;