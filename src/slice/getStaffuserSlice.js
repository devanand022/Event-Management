import { createSlice } from '@reduxjs/toolkit';

const getStaffuserSlice = createSlice({
    name : 'getstaffuser',
    initialState :{
        loading: false,
    },
    reducers :{
        getStaffuserRequest(state, action){
            return {
                loading: true
            }
        },
        getStaffuserSuccess(state, action){
            return {
                loading: false,
                staffuser: action.payload.staffuser
            }
        },
        getStaffuserFail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = getStaffuserSlice;

export const { getStaffuserRequest, getStaffuserSuccess, getStaffuserFail } = actions;

export default reducer;