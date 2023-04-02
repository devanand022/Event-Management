import { createSlice } from '@reduxjs/toolkit';

const activeStaffSlice = createSlice({
    name : 'activestaff',
    initialState : {
        loading: false,
    },
    reducers :{
        activeStaffRequest(state, action){
            return {
                loading: true
            }
        },
        activeStaffSuccess(state, action){
            return {
                loading: false,
                message: action.payload.message
            }
        },
        activeStaffFail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = activeStaffSlice;

export const { activeStaffRequest, activeStaffSuccess, activeStaffFail } = actions;

export default reducer;