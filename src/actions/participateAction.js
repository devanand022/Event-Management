import axios from 'axios';
import { createFail, createRequest, createSuccess } from '../slice/addSlice';
import { delParticipateFail, delParticipateRequest, delParticipateSuccess } from '../slice/delParticipateSlice';
import { delSingleParticipateFail, delSingleParticipateRequest, delSingleParticipateSuccess } from '../slice/delSingleParticipateSlice';
import { editParticipateFail, editParticipateRequest, editParticipateSuccess } from '../slice/editParticipateSlice';
import { getParticipateFail, getParticipateRequest, getParticipateSuccess } from '../slice/getParticipateSlice';
import { singleCollegeFail, singleCollegeRequest, singleCollegeSuccess } from '../slice/singleCollegeSlice';
import { singleParticipateFail, singleParticipateRequest, singleParticipateSuccess } from '../slice/singleParticipateSlice';
import { unVerifyParticipateFail, unVerifyParticipateRequest, unVerifyParticipateSuccess } from '../slice/unVerifyParticipateSlice';
import { VerifyParticipateFail, VerifyParticipateRequest, VerifyParticipateSuccess } from '../slice/VerifyParticipateSlice';

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

export const singleParticipate = id => async(dispatch) => {
    try {
        dispatch(singleParticipateRequest());
        const { data } = await axios.get(`http://localhost:5000/api/view/singleparticipate/${id}`);
        dispatch(singleParticipateSuccess(data));
    } catch (error) {
        dispatch(singleParticipateFail(error.response.message));
    }
}

export const editParticipate = (name, email, phone, session, degree, event1, event2, id) => async(dispatch) => {
    try {
        dispatch(editParticipateRequest());
        const { data } = await axios.put(`http://localhost:5000/api/view/editparticipate/${id}`, {name, email, degree, session, event1, phone, event2});
        dispatch(editParticipateSuccess(data));
    } catch (error) {
        dispatch(editParticipateFail(error.response.message));
    }
}

export const VerifyParticipate = id => async(dispatch) => {
    try {
        dispatch(VerifyParticipateRequest());
        const { data } = await axios.put(`http://localhost:5000/api/view/participate/verify/${id}`);
        dispatch(VerifyParticipateSuccess(data));
    } catch (error) {
        dispatch(VerifyParticipateFail(error.response.message));
    }
}

export const unVerifyParticipate = id => async(dispatch) => {
    try {
        dispatch(unVerifyParticipateRequest());
        const { data } = await axios.put(`http://localhost:5000/api/view/participate/unverify/${id}`);
        dispatch(unVerifyParticipateSuccess(data));
    } catch (error) {
        dispatch(unVerifyParticipateFail(error.response.message));
    }
}

export const delParticipate = id => async(dispatch) => {
    try{
        dispatch(delParticipateRequest());
        const { data } = await axios.delete(`http://localhost:5000/api/delete/participate/${id}`);
        dispatch(delParticipateSuccess(data));
    } catch (error) {
        dispatch(delParticipateFail(error.response.message));
    }
}

export const delSingleParticipate = id => async(dispatch) => {
    try{
        dispatch(delSingleParticipateRequest());
        const { data } = await axios.delete(`http://localhost:5000/api/delete/participate/${id}`);
        dispatch(delSingleParticipateSuccess(data));
    } catch (error) {
        dispatch(delSingleParticipateFail(error.response.message));
    }
}