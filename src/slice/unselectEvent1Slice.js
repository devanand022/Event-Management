import { createSlice } from '@reduxjs/toolkit';

const unselectEvent1Slice = createSlice({
    name : 'unselectevent1',
    initialState : {
        loading: false,
    },
    reducers :{
        unselectEvent1Request(state, action){
            return {
                loading: true
            }
        },
        unselectEvent1Success(state, action){
            return {
                loading: false,
                message: action.payload.message
            }
        },
        unselectEvent1Fail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = unselectEvent1Slice;

export const { unselectEvent1Request, unselectEvent1Success, unselectEvent1Fail } = actions;

export default reducer;