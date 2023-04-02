import React, { useEffect, useState } from 'react'
import { Card, Form, Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getEvent, addStaffusers, getStaffuser, activeStaffs, inactiveStaffs } from '../../../../../actions/eventAction';

const StaffUser = () => {

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [event_name, setEvent_name] = useState("");
  const { getEvents } = useSelector((state) => state.getEventState);
  const dispatch = useDispatch();
  const { staffuser } = useSelector((state) => state.getStaffuserState);

  const addStaffuser = (e) => {
    e.preventDefault();
    dispatch(addStaffusers(user, pass, event_name));
    setUser("");
    setPass("");
    setEvent_name("");
    setTimeout(() => dispatch(getStaffuser), 500);
  }

  const activeStaff = (id) => {
    dispatch(activeStaffs(id));
    setTimeout(() => dispatch(getStaffuser), 500);
  }

  const inactiveStaff = (id) => {
    dispatch(inactiveStaffs(id));
    setTimeout(() => dispatch(getStaffuser), 500);
  }

  useEffect(() => {
    dispatch(getEvent);
    dispatch(getStaffuser);
  }, [dispatch])

  return (
    <Card style={{ width: '100%', height: '88vh', border: 'none', alignItems: 'center', display: 'flex' }}>
      <Card style={{ width: '97%', height: '20vh', border: 'none' }}>
        <h3 className='mx-4 my-3'>Add Users</h3>
        <Form style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }} onSubmit={addStaffuser}>
          <Form.Group style={{ width: '26%' }}>
            <Form.Control placeholder="Enter the Username" value={user} onChange={e => setUser(e.target.value)} />
          </Form.Group>
          <Form.Group style={{ width: '26%' }}>
            <Form.Control placeholder="Enter the password" value={pass} onChange={e => setPass(e.target.value)} />
          </Form.Group>
          <Form.Group style={{ width: '26%' }}>
            <Form.Select name='event_name' onChange={e => setEvent_name(e.target.value)}>
              <option>Select</option>
              {
                getEvents && getEvents.map(x => (
                  <option value={x.name}>{x.name}</option>
                ))
              }
            </Form.Select>
          </Form.Group>
          <Button style={{ width: '10%' }} type="submit">Add</Button>
        </Form>
      </Card>
      <Card style={{ width: '97%', height: '68vh', border: 'none' }}>
        <Table striped borderless hover>
          <thead>
            <tr>
              <th>Staff User</th>
              <th>Event</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              staffuser && staffuser.map(x => (
                <tr>
                  <td>{x.username}</td>
                  <td>{x.event}</td>
                  {x.status === '1' ?
                    <td><Button variant='success' onClick={() => inactiveStaff(x.id)} style={{ width: '20%' }}>Active</Button></td> :
                    <td><Button variant='danger' onClick={() => activeStaff(x.id)} style={{ width: '20%' }}>inActive</Button></td>}
                </tr>
              ))
            }
          </tbody>
        </Table>
      </Card>
    </Card>
  )
}

export default StaffUser