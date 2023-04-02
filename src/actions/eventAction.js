import axios from 'axios'
import { allEventFail, allEventRequest, allEventSuccess } from '../slice/allEventSlice';
import { getEventFail, getEventRequest, getEventSuccess } from '../slice/getEventSlice';
import { selectEventFail, selectEventRequest, selectEventSuccess } from '../slice/selectEvent';
import { inactiveEventFail, inactiveEventRequest, inactiveEventSuccess } from '../slice/inactiveEventSlice';
import { activeEventFail, activeEventRequest, activeEventSuccess } from '../slice/activeEventSlice';
import { addEventFail, addEventRequest, addEventSuccess } from '../slice/addEventSlice';
import { addReguserFail, addReguserRequest, addReguserSuccess } from '../slice/addReg_userSlice';
import { getReguserFail, getReguserRequest, getReguserSuccess } from '../slice/getReguserSlice';
import { inactiveReguserFail, inactiveReguserRequest, inactiveReguserSuccess } from '../slice/inactiveReguserSlice';
import { activeReguserFail, activeReguserRequest, activeReguserSuccess } from '../slice/activeReguserSlice';
import { addStaffuserFail, addStaffuserRequest, addStaffuserSuccess } from '../slice/addStaffuserSlice';
import { getStaffuserFail, getStaffuserRequest, getStaffuserSuccess } from '../slice/getStaffuserSlice';
import { inactiveStaffFail, inactiveStaffRequest, inactiveStaffSuccess } from '../slice/inactiveStaffSlice';
import { activeStaffFail, activeStaffRequest, activeStaffSuccess } from '../slice/activeStaffSlice';

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
        dispatch(allEventFail(error.response.data.message));
    }
}

export const inactiveEvents = id => async(dispatch) => {
    try {
        dispatch(inactiveEventRequest());
        const { data } = await axios.put(`http://localhost:5000/api/inactive/event/${id}`);
        dispatch(inactiveEventSuccess(data));
    } catch (error) {
        dispatch(inactiveEventFail(error.response.data.message));
    }
}

export const activeEvents = id => async(dispatch) => {
    try {
        dispatch(activeEventRequest());
        const { data } = await axios.put(`http://localhost:5000/api/active/event/${id}`);
        dispatch(activeEventSuccess(data));
    } catch (error) {
        dispatch(activeEventFail(error.response.data.message));
    }
}

export const addEvent = event_name => async(dispatch) => {
    try {
        dispatch(addEventRequest());
        const { data } = await axios.post('http://localhost:5000/api/create_event', { event_name });
        dispatch(addEventSuccess(data));
    } catch (error) {
        dispatch(addEventFail(error.response.data.message));
    }
}

export const addReguser = (user, pass) => async(dispatch) => {
    try {
        dispatch(addReguserRequest());
        const { data } = await axios.post('http://localhost:5000/api/addreguser', { user, pass});
        dispatch(addReguserSuccess(data));
    } catch (error) {
        dispatch(addReguserFail(error.response.data.message));
    }
}

export const getReguser = async(dispatch) => {
    try {
        dispatch(getReguserRequest());
        const { data } = await axios.get('http://localhost:5000/api/getreguser');
        dispatch(getReguserSuccess(data));
    } catch (error) {
        dispatch(getReguserFail(error.response.data.message));
    }
}

export const inactiveRegs = id => async(dispatch) => {
    try {
        dispatch(inactiveReguserRequest());
        const { data } = await axios.put(`http://localhost:5000/api/inactive/reg/${id}`);
        dispatch(inactiveReguserSuccess(data));
    } catch (error) {
        dispatch(inactiveReguserFail(error.response.data.message));
    }
}

export const activeRegs = id => async(dispatch) => {
    try {
        dispatch(activeReguserRequest());
        const { data } = await axios.put(`http://localhost:5000/api/active/reg/${id}`);
        dispatch(activeReguserSuccess(data));
    } catch (error) {
        dispatch(activeReguserFail(error.response.data.message));
    }
}

export const addStaffusers = (user, pass, event_name) => async(dispatch) => {
    try {
        dispatch(addStaffuserRequest());
        const { data } = await axios.post('http://localhost:5000/api/add/staffuser', {user, pass, event_name});
        dispatch(addStaffuserSuccess(data));
    } catch (error) {
        dispatch(addStaffuserFail(error.response.data.message))
    }
}

export const getStaffuser = async(dispatch) => {
    try {
        dispatch(getStaffuserRequest());
        const { data } = await axios.get('http://localhost:5000/api/getstaffuser');
        dispatch(getStaffuserSuccess(data));
    } catch (error) {
        dispatch(getStaffuserFail(error.response.data.message));
    }
}

export const inactiveStaffs = id => async(dispatch) => {
    try {
        dispatch(inactiveStaffRequest());
        const { data } = await axios.put(`http://localhost:5000/api/inactive/staff/${id}`);
        dispatch(inactiveStaffSuccess(data));
    } catch (error) {
        dispatch(inactiveStaffFail(error.response.data.message));
    }
}

export const activeStaffs = id => async(dispatch) => {
    try {
        dispatch(activeStaffRequest());
        const { data } = await axios.put(`http://localhost:5000/api/active/staff/${id}`);
        dispatch(activeStaffSuccess(data));
    } catch (error) {
        dispatch(activeStaffFail(error.response.data.message));
    }
}