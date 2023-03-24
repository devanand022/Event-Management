import axios from 'axios'
import { allEventFail, allEventRequest, allEventSuccess } from '../slice/allEventSlice';
import { getEventFail, getEventRequest, getEventSuccess } from '../slice/getEventSlice';
import { selectEventFail, selectEventRequest, selectEventSuccess } from '../slice/selectEvent';
import { inactiveEventFail, inactiveEventRequest, inactiveEventSuccess } from '../slice/inactiveEventSlice';
import { activeEventFail, activeEventRequest, activeEventSuccess } from '../slice/inactiveEventSlice';

export const getEvent = async(dispatch) => {
    try {
        dispatch(getEventRequest());
        const { data } = await axios.get('http://localhost:5000/api/view/event');
        dispatch(getEventSuccess(data));
    } catch (error) {
        dispatch(getEventFail(error.response.data.message));
    }
}

export const selectEvent = event => async(dispatch) => {
    try {
        dispatch(selectEventRequest());
        const { data } = await axios.get(`http://localhost:5000/api/view/selectevent/${event}`);
        dispatch(selectEventSuccess(data));
    } catch (error) {
        dispatch(selectEventFail(error.response.data.message));
    }
}

export const allEvent = async(dispatch) => {
    try {
        dispatch(allEventRequest());
        const { data } = await axios.get('http://localhost:5000/api/view/allevent');
        dispatch(allEventSuccess(data));
    } catch (error) {
        dispatch(allEventFail(error.response.message));
    }
}

export const inactiveEvent = id => async(dispatch) => {
    try {
        dispatch(inactiveEventRequest());
        const { data } = await axios.put(`http://localhost:5000/api/inactive/event/${id}`);
        dispatch(inactiveEventSuccess(data));
    } catch (error) {
        dispatch(inactiveEventFail(error.response.message));
    }
}

export const activeEvent = id => async(dispatch) => {
    try {
        dispatch(activeEventRequest());
        const { data } = await axios.put(`http://localhost:5000/api/active/event/${id}`);
        dispatch(activeEventSuccess(data));
    } catch (error) {
        dispatch(activeEventFail(error.response.message));
    }
}