import axios from 'axios'
import { getEventFail, getEventRequest, getEventSuccess } from '../slice/getEventSlice';
import { selectEventFail, selectEventRequest, selectEventSuccess } from '../slice/selectEvent';

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