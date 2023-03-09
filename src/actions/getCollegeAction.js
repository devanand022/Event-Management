import axios from 'axios';
import { getCollegeFail, getCollegeRequest, getCollegeSuccess } from '../slice/getCollegeSlice';

export const getCollege = async(dispatch) => {
    try {
        dispatch(getCollegeRequest());
        const { data } = await axios.get('http://localhost:5000/api/view/college');
        dispatch(getCollegeSuccess(data));
    } catch (error) {
        dispatch(getCollegeFail(error.response.message));
    }
}