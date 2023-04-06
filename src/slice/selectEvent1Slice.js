import { createSlice } from '@reduxjs/toolkit';

const selectEvent1Slice = createSlice({
    name : 'selectevent1',
    initialState : {
        loading: false,
    },
    reducers :{
        selectEvent1Request(state, action){
            return {
                loading: true
            }
        },
        selectEvent1Success(state, action){
            return {
                loading: false,
                message: action.payload.message
            }
        },
        selectEvent1Fail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
});

const { actions, reducer } = selectEvent1Slice;

export const { selectEvent1Request, selectEvent1Success, selectEvent1Fail } = actions;

export default reducer;