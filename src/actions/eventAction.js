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
import { staffEventFail, staffEventRequest, staffEventSuccess } from '../slice/staffEventSlice';
import { selectEvent1Fail, selectEvent1Request, selectEvent1Success } from '../slice/selectEvent1Slice';
import { selectEvent2Fail, selectEvent2Request, selectEvent2Success } from '../slice/selectEvent2Slice';
import { unselectEvent1Fail, unselectEvent1Request, unselectEvent1Success } from '../slice/unselectEvent1Slice';
import { unselectEvent2Fail, unselectEvent2Request, unselectEvent2Success } from '../slice/unselectEvent2Slice';
import { filterEventFail, filterEventRequest, filterEventSuccess } from '../slice/filterEventSlice';
import { update1FirstFail, update1FirstRequest, update1FirstSuccess } from '../slice/update1FirstSlice';
import { update2SecondFail, update2SecondRequest, update2SecondSuccess } from '../slice/update2SecondSlice';
import { update1SecondFail, update1SecondRequest, update1SecondSuccess } from '../slice/update1SecondSlice';
import { update1ThirdFail, update1ThirdRequest, update1ThirdSuccess } from '../slice/update1ThirdSlice';
import { update1Fail, update1Request, update1Success } from '../slice/update1Slice';
import { update2FirstFail, update2FirstRequest, update2FirstSuccess } from '../slice/update2FirstSlice';
import { update2ThirdFail, update2ThirdRequest, update2ThirdSuccess } from '../slice/update2ThirdSlice';
import { update2Fail, update2Request, update2Success } from '../slice/update2Slice';
import { finalResultFail, finalResultRequest, finalResultSuccess } from '../slice/finalResultSlice';

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

export const staffEvents = event => async(dispatch) => {
    try {
        dispatch(staffEventRequest());
        const { data } = await axios.get(`http://localhost:5000/api/staffevent/${event}`);
        dispatch(staffEventSuccess(data));
    } catch (error) {
        dispatch(staffEventFail(error.response.data.message));
    }
}

export const selectEvent1s = (id, event) => async(dispatch) => {
    try {
        dispatch(selectEvent1Request());
        const { data } = await axios.put(`http://localhost:5000/api/select/event1/${id}`, {event});
        dispatch(selectEvent1Success(data));
    } catch (error) {
        dispatch(selectEvent1Fail(error.response.data.message));
    }
}

export const selectEvent2s = (id, event) => async(dispatch) => {
    try {
        dispatch(selectEvent2Request());
        const { data } = await axios.put(`http://localhost:5000/api/select/event2/${id}`, {event});
        dispatch(selectEvent2Success(data));
    } catch (error) {
        dispatch(selectEvent2Fail(error.response.data.message));
    }
}

export const unselectEvent1s = (id, event) => async(dispatch) => {
    try {
        dispatch(unselectEvent1Request());
        const { data } = await axios.put(`http://localhost:5000/api/unselect/event1/${id}`, {event});
        dispatch(unselectEvent1Success(data));
    } catch (error) {
        dispatch(unselectEvent1Fail(error.response.data.message));
    }
}

export const unselectEvent2s = (id, event) => async(dispatch) => {
    try {
        dispatch(unselectEvent2Request());
        const { data } = await axios.put(`http://localhost:5000/api/unselect/event2/${id}`, {event});
        dispatch(unselectEvent2Success(data));
    } catch (error) {
        dispatch(unselectEvent2Fail(error.response.data.message));
    }
}

export const filterevents = (event) => async(dispatch) => {
    try{
        dispatch(filterEventRequest());
        const { data } = await axios.get(`http://localhost:5000/api/filterevent/${event}`);
        dispatch(filterEventSuccess(data));
    } catch (error) {
        dispatch(filterEventFail(error.response.data.message));
    }
}

export const update1firsts = (id, event) => async(dispatch) => {
    try {
        dispatch(update1FirstRequest());
        const { data } = await axios.put(`http://localhost:5000/api/update1first/${id}`, { event });
        dispatch(update1FirstSuccess(data));
    } catch (error) {
        dispatch(update1FirstFail(error.response.data.message));
    }
}

export const update1seconds = (id, event) => async(dispatch) => {
    try {
        dispatch(update1SecondRequest());
        const { data } = await axios.put(`http://localhost:5000/api/update1second/${id}`, { event });
        dispatch(update1SecondSuccess(data));
    } catch (error) {
        dispatch(update1SecondFail(error.response.data.message));
    }
}

export const update1thirds = (id, event) => async(dispatch) => {
    try {
        dispatch(update1ThirdRequest());
        const { data } = await axios.put(`http://localhost:5000/api/update1third/${id}`, { event });
        dispatch(update1ThirdSuccess(data));
    } catch (error) {
        dispatch(update1ThirdFail(error.response.data.message));
    }
}

export const update1s = (id, event) => async(dispatch) => {
    try {
        dispatch(update1Request());
        const { data } = await axios.put(`http://localhost:5000/api/update1/${id}`, { event });
        dispatch(update1Success(data));
    } catch (error) {
        dispatch(update1Fail(error.response.data.message));
    }
}

export const update2firsts = (id, event) => async(dispatch) => {
    try {
        dispatch(update2FirstRequest());
        const { data } = await axios.put(`http://localhost:5000/api/update2first/${id}`, { event });
        dispatch(update2FirstSuccess(data));
    } catch (error) {
        dispatch(update2FirstFail(error.response.data.message));
    }
}

export const update2seconds = (id, event) => async(dispatch) => {
    try {
        dispatch(update2SecondRequest());
        const { data } = await axios.put(`http://localhost:5000/api/update2second/${id}`, { event });
        dispatch(update2SecondSuccess(data));
    } catch (error) {
        dispatch(update2SecondFail(error.response.data.message));
    }
}

export const update2thirds = (id, event) => async(dispatch) => {
    try {
        dispatch(update2ThirdRequest());
        const { data } = await axios.put(`http://localhost:5000/api/update3third/${id}`, { event });
        dispatch(update2ThirdSuccess(data));
    } catch (error) {
        dispatch(update2ThirdFail(error.response.data.message));
    }
}

export const update2s = (id, event) => async(dispatch) => {
    try {
        dispatch(update2Request());
        const { data } = await axios.put(`http://localhost:5000/api/update2/${id}`, { event });
        dispatch(update2Success(data));
    } catch (error) {
        dispatch(update2Fail(error.response.data.message));
    }
}

export const finalresults = (event) => async(dispatch) => {
    try {
        dispatch(finalResultRequest());
        const { data } = await axios.get(`http://localhost:5000/api/finalresult/${event}`);
        dispatch(finalResultSuccess(data));
    } catch (error) {
        dispatch(finalResultFail(error.response.data.message));
    }
}