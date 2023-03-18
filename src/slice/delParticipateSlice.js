import { createSlice } from "@reduxjs/toolkit";

const delParticipateSlice = createSlice({
    name: 'delParticipate',
    initialState: {
        loading: false
    },
    reducers: {
        delParticipateRequest(state, action){
            return{
                loading: true
            }
        },
        delParticipateSuccess(state, action){
            return{
                loading: false,
                message: action.payload.message
            }
        },
        delParticipateFail(state, action){
            return{
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = delParticipateSlice;

export const { delParticipateRequest, delParticipateSuccess, delParticipateFail } = actions;

export default reducer;