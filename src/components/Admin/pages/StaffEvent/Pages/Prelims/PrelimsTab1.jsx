import React, { useEffect } from 'react'
import { Card, Table, Button } from 'react-bootstrap'
// import jwtDecode from 'jwt-decode'
import { selectEvent1s, selectEvent2s, staffEvents, unselectEvent1s, unselectEvent2s } from '../../../../../../actions/eventAction'
import { useDispatch, useSelector } from 'react-redux'

const PrelimsTab1 = () => {

    // const token = localStorage.getItem("userInfo")
    // let decodetoken = jwtDecode(token);
    const event = localStorage.getItem("event");
    const dispatch = useDispatch()
    const { staffevent } = useSelector((state) => state.staffEventState)

    const selectEvent1 = (id) => {
        dispatch(selectEvent1s(id, event))
        setTimeout(() => dispatch(staffEvents(event)), 500);
    }

    const selectEvent2 = (id) => {
        dispatch(selectEvent2s(id, event))
        setTimeout(() => dispatch(staffEvents(event)), 500);
    }

    const unselectEvent1 = (id) => {
        dispatch(unselectEvent1s(id, event))
        setTimeout(() => dispatch(staffEvents(event)), 500);
    }

    const unselectEvent2 = (id) => {
        dispatch(unselectEvent2s(id, event))
        setTimeout(() => dispatch(staffEvents(event)), 500);
    }

    useEffect(() => {
        dispatch(staffEvents(event))
    }, [event, dispatch])

    return (
        <Card style={{ height: '88vh', width: '100%', alignItems: 'center', display: 'flex', border: 'none' }}>
            <Card style={{ height: '85vh', width: '97%', border: 'none' }}>
                <h3 className='mx-3 my-3'>Final</h3>
                <Card style={{ height: '85vh', width: '100%', display: 'flex', alignItems: 'center', border: 'none' }}>
                    <Table striped borderless hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Lot No</th>
                                <th>Email</th>
                                <th>Event</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                staffevent && staffevent.map(x => (
                                    <tr>
                                        <td>{x.id}</td>
                                        <td>{x.name}</td>
                                        <td>{x.lot_no}</td>
                                        <td>{x.email}</td>
                                        {
                                            x.event1 === event ?
                                                <td>{x.event1}</td> : <td>{x.event2}</td>
                                        }
                                        {
                                            x.event1 === event ?
                                                <td>
                                                    {
                                                        x.event1result === null ? <Button onClick={() => selectEvent1(x.id)}>Select</Button> :
                                                            <Button variant="danger" onClick={() => unselectEvent1(x.id)}>UnSelect</Button>

                                                    }
                                                </td> : <td>
                                                    {
                                                        x.event2result === null ? <Button onClick={() => selectEvent2(x.id)}>Select</Button> :
                                                            <Button variant="danger" onClick={() => unselectEvent2(x.id)}>UnSelect</Button>

                                                    }
                                                </td>
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Card>
            </Card>
        </Card>
    )
}

export default PrelimsTab1