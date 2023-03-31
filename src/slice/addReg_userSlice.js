import { createSlice } from '@reduxjs/toolkit';

const addReg_userSlice = createSlice({
    name : 'addreguser',
    initialState : {
        loading: false,
    },
    reducers :{
        addReguserRequest(state, action){
            return {
                loading: true
            }
        },
        addReguserSuccess(state, action){
            return {
                loading: false,
                message: action.payload.message
            }
        },
        addReguserFail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = addReg_userSlice;

export const { addReguserRequest, addReguserSuccess, addReguserFail } = actions;

export default reducer;