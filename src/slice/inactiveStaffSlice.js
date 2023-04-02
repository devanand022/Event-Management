import { createSlice } from '@reduxjs/toolkit';

const inactiveStaffSlice = createSlice({
    name : 'inactivestaff',
    initialState : {
        loading: false,
    },
    reducers :{
        inactiveStaffRequest(state, action){
            return {
                loading: true
            }
        },
        inactiveStaffSuccess(state, action){
            return {
                loading: false,
                message: action.payload.message
            }
        },
        inactiveStaffFail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = inactiveStaffSlice;

export const { inactiveStaffRequest, inactiveStaffSuccess, inactiveStaffFail } = actions;

export default reducer;