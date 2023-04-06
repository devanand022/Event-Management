import { createSlice } from '@reduxjs/toolkit';

const update2Slice = createSlice({
    name : 'update2',
    initialState : {
        loading: false,
    },
    reducers :{
        update2Request(state, action){
            return {
                loading: true
            }
        },
        update2Success(state, action){
            return {
                loading: false,
                message: action.payload.message
            }
        },
        update2Fail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = update2Slice;

export const { update2Request, update2Success, update2Fail } = actions;

export default reducer;