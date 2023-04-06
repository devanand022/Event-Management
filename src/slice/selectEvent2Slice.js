import { createSlice } from '@reduxjs/toolkit';

const selectEvent2Slice = createSlice({
    name : 'selectevent2',
    initialState : {
        loading: false,
    },
    reducers :{
        selectEvent2Request(state, action){
            return {
                loading: true
            }
        },
        selectEvent2Success(state, action){
            return {
                loading: false,
                message: action.payload.message
            }
        },
        selectEvent2Fail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = selectEvent2Slice;

export const { selectEvent2Request, selectEvent2Success, selectEvent2Fail } = actions;

export default reducer;