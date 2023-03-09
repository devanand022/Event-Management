import axios from 'axios';
import { collegeFail, collegeRequest, collegeSuccess } from '../slice/collegeSlice';

export const createCollege = (college) => async (dispatch) => {
    try {
        dispatch(collegeRequest);
        const { data } = await axios.post('http://localhost:5000/api/college', {college});
        dispatch(collegeSuccess(data));
    } catch (error) {
        dispatch(collegeFail(error.response.message));
    }
}