import { createSlice } from '@reduxjs/toolkit';

const addStaffuserSlice = createSlice({
    name : 'addstaffuser',
    initialState : {
        loading: false,
    },
    reducers :{
        addStaffuserRequest(state, action){
            return {
                loading: true
            }
        },
        addStaffuserSuccess(state, action){
            return {
                loading: false,
                message: action.payload.message
            }
        },
        addStaffuserFail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = addStaffuserSlice;

export const { addStaffuserRequest, addStaffuserSuccess, addStaffuserFail } = actions;

export default reducer;