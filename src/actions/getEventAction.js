import axios from 'axios';
import { getEventFail, getEventRequest, getEventSuccess } from '../slice/getEventSlice';

export const getEvent = async(dispatch) => {
    try {
        dispatch(getEventRequest());
        const { data } = await axios.get('http://localhost:5000/api/view/event');
        dispatch(getEventSuccess(data));
    } catch (error) {
        dispatch(getEventFail(error.response.message));
    }
}