import React, { useEffect, useState } from 'react'
import { Button, Card, Form, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { allEvent, inactiveEvents, activeEvents, addEvent } from '../../../../../actions/eventAction'

const Event = () => {

  const dispatch = useDispatch()
  const { events } = useSelector((state) => state.allEventState)
  const [event_name, setEvent_name] = useState("")

  const add_Event = (e) => {
    e.preventDefault();
    dispatch(addEvent(event_name));
    setTimeout(() => dispatch(allEvent), 500);
    setEvent_name("")
  }

  const inactiveEvent = (id) => {
    dispatch(inactiveEvents(id));
    setTimeout(() => dispatch(allEvent), 500);
  }

  const activeEvent = (id) => {
    dispatch(activeEvents(id));
    setTimeout(() => dispatch(allEvent), 500);
  }

  useEffect(() => {
    dispatch(allEvent)
  }, [dispatch])

  return (
    <Card style={{ width: '100%', height: '88vh', border: 'none', display: 'flex', alignItems: 'center' }}>
      <Card
        className='mb-3'
        style={{ width: '97%', height: '20vh', display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center', border: 'none' }}>
        <Card style={{ width: '70%', height: '18vh', border: 'none' }}>
          <h3 className='mb-3 mx-3 my-1'>Add Event</h3>
          <Form className='d-flex' style={{ flexDirection: 'row', justifyContent: 'start' }} onSubmit={add_Event}>
            <Form.Group style={{ width: '65%' }}>
              <Form.Control placeholder='Enter the event name' value={event_name} onChange={e => setEvent_name(e.target.value)} />
            </Form.Group>
            <Button style={{ width: '10%' }} type='submit' className='mx-2' >Add</Button>
          </Form>
        </Card>
      </Card>
      <Card style={{ width: '97%', height: '68vh', border: 'none', display: 'flex', alignItems: 'center', overflowY: 'scroll' }}>
        <Table striped borderless hover style={{ width: '97%' }}>
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              events && events.map(x => (
                <tr>
                  <td>{x.name}</td>
                  { x.status === '1' ? 
                    <td><Button variant='success' onClick={() => inactiveEvent(x.id)} style={{ width: '20%' }}>Active</Button></td> : 
                      <td><Button variant='danger' onClick={() => activeEvent(x.id)} style={{ width: '20%' }}>inActive</Button></td> }
                </tr>
              ))
            }
          </tbody>
        </Table>
      </Card>
    </Card>
  )
}

export default Event