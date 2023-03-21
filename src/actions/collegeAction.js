import axios from 'axios';
import { collegeFail, collegeRequest, collegeSuccess } from '../slice/collegeSlice';
import { countCollegeFail, countCollegeRequest, countCollegeSuccess } from '../slice/countCollege';
import { delCollegeFail, delCollegeRequest, delCollegeSuccess } from '../slice/delCollegeSlice';
import { getCollegeFail, getCollegeRequest, getCollegeSuccess } from '../slice/getCollegeSlice';
import { getUnVerifiedCollegeFail, getUnVerifiedCollegeRequest, getUnVerifiedCollegeSuccess } from '../slice/getUnVerifiedCollegeSlice';
import { getVerifiedCollegeFail, getVerifiedCollegeRequest, getVerifiedCollegeSuccess } from '../slice/getVerifiedCollegeSlice';
import { unVerifyCollegeFail, unVerifyCollegeRequest, unVerifyCollegeSuccess } from '../slice/unVerifyCollegeSlice';
import { VerifyCollegeFail, VerifyCollegeRequest, VerifyCollegeSuccess } from '../slice/VerifyCollegeSlice';

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
        const { data } = await axios.get('http://localhost:5000/api/view/colleges');
        dispatch(getCollegeSuccess(data));
    } catch (error) {
        dispatch(getCollegeFail(error.response.message));
    }
}

export const getUnVerifiedCollege = async(dispatch) => {
    try {
        dispatch(getUnVerifiedCollegeRequest());
        const { data } = await axios.get('http://localhost:5000/api/view/colleges/unverified');
        dispatch(getUnVerifiedCollegeSuccess(data));
    } catch (error) {
        dispatch(getUnVerifiedCollegeFail(error.response.message));
    }
}

export const getVerifiedCollege = async(dispatch) => {
    try {
        dispatch(getVerifiedCollegeRequest());
        const { data } = await axios.get('http://localhost:5000/api/view/colleges/verified');
        dispatch(getVerifiedCollegeSuccess(data));
    } catch (error) {
        dispatch(getVerifiedCollegeFail(error.response.message));
    }
}

export const verifyCollege = id => async(dispatch) => {
    try{
        dispatch(VerifyCollegeRequest());
        const { data } = await axios.put(`http://localhost:5000/api/view/college/verify/${id}`);
        dispatch(VerifyCollegeSuccess(data));
    } catch (error) {
        dispatch(VerifyCollegeFail(error.response.message));
    }
}

export const unVerifyCollege = id => async(dispatch) => {
    try{
        dispatch(unVerifyCollegeRequest());
        const { data } = await axios.put(`http://localhost:5000/api/view/college/unverify/${id}`);
        dispatch(unVerifyCollegeSuccess(data));
    } catch (error) {
        dispatch(unVerifyCollegeFail(error.response.message));
    }
}

export const delCollege = id => async(dispatch) => {
    try{
        dispatch(delCollegeRequest());
        const { data } = await axios.delete(`http://localhost:5000/api/delete/college/${id}`);
        dispatch(delCollegeSuccess(data));
    } catch (error) {
        dispatch(delCollegeFail(error.response.message));
    }
}

export const countCollege = async(dispatch) => {
    try {
        dispatch(countCollegeRequest());
        const { data } = await axios.get('http://localhost:5000/api/count/college');
        dispatch(countCollegeSuccess(data));
    } catch (error) {
        dispatch(countCollegeFail(error.response.message));
    }
}