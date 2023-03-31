import React, { useEffect, useState } from 'react'
import { Card, Form, Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getEvent, addStaffusers } from '../../../../../actions/eventAction';

const StaffUser = () => {

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [event_name, setEvent_name] = useState("");
  const { getEvents } = useSelector((state) => state.getEventState);
  const dispatch = useDispatch();

  const addStaffuser = (e) => {
    e.preventDefault();
    dispatch(addStaffusers(user, pass, event_name));
    setUser("");
    setPass("");
    setEvent_name("");
  }

  useEffect(() => {
    dispatch(getEvent);
  }, [dispatch])

  return (
    <Card style={{width: '100%', height: '88vh', border: 'none', alignItems: 'center', display: 'flex'}}>
      <Card style={{width: '97%', height: '20vh', border: 'none'}}>
        <h3 className='mx-4 my-3'>Add Users</h3>
        <Form style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}} onSubmit={addStaffuser}>
          <Form.Group style={{width: '26%'}}>
            <Form.Control placeholder="Enter the Username" value={user} onChange={e => setUser(e.target.value)} />
          </Form.Group>
          <Form.Group style={{width: '26%'}}>
            <Form.Control placeholder="Enter the password" value={pass} onChange={e => setPass(e.target.value)} />
          </Form.Group>
          <Form.Group style={{width: '26%'}}>
            <Form.Select name='event_name' onChange={e => setEvent_name(e.target.value)}>
              <option>Select</option>
              {
                getEvents && getEvents.map(x => (
                  <option value={x.name}>{x.name}</option>
                ))
              }
            </Form.Select>
          </Form.Group>
          <Button style={{width: '10%'}} type="submit">Add</Button>
        </Form>
      </Card>
      <Card style={{width: '97%', height: '68vh', border: 'none'}}>
        <Table striped borderless hover>
          <thead>
            <tr>
              <th>Staff User</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Staff1</td>
              <td>
                <Button variant="success" style={{width: '20%'}}>Active</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </Card>
  )
}

export default StaffUser