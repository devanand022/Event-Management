import { createSlice } from '@reduxjs/toolkit';

const unselectEvent2Slice = createSlice({
    name : 'unselectevent2',
    initialState : {
        loading: false,
    },
    reducers :{
        unselectEvent2Request(state, action){
            return {
                loading: true
            }
        },
        unselectEvent2Success(state, action){
            return {
                loading: false,
                message: action.payload.message
            }
        },
        unselectEvent2Fail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = unselectEvent2Slice;

export const { unselectEvent2Request, unselectEvent2Success, unselectEvent2Fail } = actions;

export default reducer;