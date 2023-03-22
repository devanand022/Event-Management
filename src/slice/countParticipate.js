import { createSlice } from '@reduxjs/toolkit';

const countParticipate = createSlice({
    name : 'countparticipate',
    initialState : {
        loading: false,
    },
    reducers :{
        countParticipateRequest(state, action){
            return {
                loading: true
            }
        },
        countParticipateSuccess(state, action){
            return {
                loading: false,
                participatecount: action.payload.count
            }
        },
        countParticipateFail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = countParticipate;

export const { countParticipateRequest, countParticipateSuccess, countParticipateFail } = actions;

export default reducer;