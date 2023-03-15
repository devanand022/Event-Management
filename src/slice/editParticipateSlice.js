import { createSlice } from "@reduxjs/toolkit";

const editParticipateSlice = createSlice({
    name: 'editParticiapte',
    initialState: {
        loading: false
    },
    reducers: {
        editParticipateRequest(state, action){
            return{
                loading: true
            }
        },
        editParticipateSuccess(state, action){
            return{
                loading: false,
                editparticipate: action.payload.editparticipate
            }
        },
        editParticipateFail(state, action){
            return{
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = editParticipateSlice;

export const { editParticipateRequest, editParticipateSuccess, editParticipateFail } = actions;

export default reducer;