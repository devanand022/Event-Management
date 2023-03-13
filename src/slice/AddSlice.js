import { createSlice } from '@reduxjs/toolkit';

const addSlice = createSlice({
    name : 'add',
    initialState : {
        loading: false,
    },
    reducers :{
        createRequest(state, action){
            return {
                loading: true
            }
        },
        createSuccess(state, action){
            return {
                loading: false,
                addmessage: action.payload.message
            }
        },
        createFail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = addSlice;

export const { createRequest, createSuccess, createFail } = actions;

export default reducer;