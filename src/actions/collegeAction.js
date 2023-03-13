import axios from 'axios';
import { collegeFail, collegeRequest, collegeSuccess } from '../slice/collegeSlice';
import { getCollegeFail, getCollegeRequest, getCollegeSuccess } from '../slice/getCollegeSlice';
import { getUnVerifiedCollegeFail, getUnVerifiedCollegeRequest, getUnVerifiedCollegeSuccess } from '../slice/getUnVerifiedCollegeSlice';

export const createCollege = college_name => async(dispatch) => {
    try {
        dispatch(collegeRequest());
        const { data } = await axios.post('http://localhost:5000/api/college', {college_name});
        dispatch(collegeSuccess(data));
    } catch (error) {
        dispatch(collegeFail(error.response.message));
    }
}

export const getCollege = async(dispatch) => {
    try {
        dispatch(getCollegeRequest());
        const { data } = await axios.get('http://localhost:5000/api/view/college');
        dispatch(getCollegeSuccess(data));
    } catch (error) {
        dispatch(getCollegeFail(error.response.message));
    }
}

export const getUnVerifiedCollege = async(dispatch) => {
    try {
        dispatch(getUnVerifiedCollegeRequest());
        const { data } = await axios.get('http://localhost:5000/api/view/college/unverified');
        dispatch(getUnVerifiedCollegeSuccess(data));
    } catch (error) {
        dispatch(getUnVerifiedCollegeFail(error.response.message));
    }
}