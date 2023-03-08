import axios from 'axios';
import { createFail, createRequest, createSuccess } from '../slice/AddSlice';

export const createParticipates = () => async (dispatch) => {
    try {
        dispatch(createRequest);
        const { data } = await axios.post('http://localhost:5000/api/participate');
        dispatch(createSuccess(data));
    } catch (error) {
        dispatch(createFail(error.response.data.message));
    }
}