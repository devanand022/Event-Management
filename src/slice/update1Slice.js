import { createSlice } from '@reduxjs/toolkit';

const update1Slice = createSlice({
    name : 'update1',
    initialState : {
        loading: false,
    },
    reducers :{
        update1Request(state, action){
            return {
                loading: true
            }
        },
        update1Success(state, action){
            return {
                loading: false,
                message: action.payload.message
            }
        },
        update1Fail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = update1Slice;

export const { update1Request, update1Success, update1Fail } = actions;

export default reducer;