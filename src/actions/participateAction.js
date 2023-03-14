import axios from 'axios';
import { createFail, createRequest, createSuccess } from '../slice/addSlice';
import { getParticipateFail, getParticipateRequest, getParticipateSuccess } from '../slice/getParticipateSlice';
import { singleCollegeFail, singleCollegeRequest, singleCollegeSuccess } from '../slice/singleCollegeSlice';

export const createParticipates = add => async(dispatch) => {
    try {
        dispatch(createRequest());
        const { data } = await axios.post('http://localhost:5000/api/participate', {add});
        dispatch(createSuccess(data));
    } catch (error) {
        dispatch(createFail(error.response.message));
    }
}

export const singleCollege = id => async(dispatch) => {
    try {
        dispatch(singleCollegeRequest());
        const { data } = await axios.get(`http://localhost:5000/api/view/singlecollege/${id}`);
        dispatch(singleCollegeSuccess(data));
    } catch (error) {
        dispatch(singleCollegeFail(error.response.message));
    }
}

export const getParticipate = async(dispatch) => {
    try {
        dispatch(getParticipateRequest());
        const { data } = await axios.get('http://localhost:5000/api/view/participates');
        dispatch(getParticipateSuccess(data));
    } catch (error) {
        dispatch(getParticipateFail(error.response.message));
    }
}