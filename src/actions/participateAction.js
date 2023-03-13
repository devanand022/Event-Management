import axios from 'axios';
import { createFail, createRequest, createSuccess } from '../slice/addSlice';

export const createParticipates = add => async(dispatch) => {
    try {
        dispatch(createRequest());
        const { data } = await axios.post('http://localhost:5000/api/participate', {add});
        dispatch(createSuccess(data));
    } catch (error) {
        dispatch(createFail(error.response.data.message));
    }
}