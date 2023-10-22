import React, { useEffect } from 'react'
import { Card, Table, Button } from 'react-bootstrap'
// import jwtDecode from 'jwt-decode'
import { useDispatch, useSelector } from 'react-redux'
import { filterevents, update1firsts, update1s, update1seconds, update1thirds, update2firsts, update2s, update2seconds, update2thirds } from '../../../../../../actions/eventAction'

const FinalsTab1 = () => {

    // const token = localStorage.getItem("userInfo")
    // let decodetoken = jwtDecode(token);
    const event = localStorage.getItem("event")
    const dispatch = useDispatch()
    const { filterevent } = useSelector((state) => state.filtereventState);

    const update1first = (id) => {
        dispatch(update1firsts(id, event));
        setTimeout(() => dispatch(filterevents(event)), 500);
    }

    const update1second = (id) => {
        dispatch(update1seconds(id, event));
        setTimeout(() => dispatch(filterevents(event)), 500);
    }

    const update1third = (id) => {
        dispatch(update1thirds(id, event));
        setTimeout(() => dispatch(filterevents(event)), 500);
    }

    const update1 = (id) => {
        dispatch(update1s(id, event));
        setTimeout(() => dispatch(filterevents(event)), 500);
    }

    const update2first = (id) => {
        dispatch(update2firsts(id, event));
        setTimeout(() => dispatch(filterevents(event)), 500);
    }

    const update2second = (id) => {
        dispatch(update2seconds(id, event));
        setTimeout(() => dispatch(filterevents(event)), 500);
    }

    const update2third = (id) => {
        dispatch(update2thirds(id, event));
        setTimeout(() => dispatch(filterevents(event)), 500);
    }

    const update2 = (id) => {
        dispatch(update2s(id, event));
        setTimeout(() => dispatch(filterevents(event)), 500);
    }

    useEffect(() => {
        dispatch(filterevents(event))
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
                                <th>College Name</th>
                                <th>Email</th>
                                <th>Event</th>
                                <th>Status</th>
                                <th>Rank</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterevent && filterevent.map(x => (
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
                                        x.event1result === 'selected' ?
                                            <td>{x.event1result}</td> : <td>{x.event2result}</td>
                                    }
                                    {
                                        x.event1 === event && x.event1result === 'selected' ?
                                            <td>{x.event1final}</td> : <td>{x.event2final}</td>
                                    }
                                    {
                                        x.event1 === event && x.event1result === 'selected' ?
                                            <td>
                                                <tr>
                                                    <td>
                                                        <Button onClick={() => update1first(x.id)}>First</Button>
                                                    </td>
                                                    <td>
                                                        <Button onClick={() => update1second(x.id)}>Second</Button>
                                                    </td>
                                                    <td>
                                                        <Button onClick={() => update1third(x.id)}>Third</Button>
                                                    </td>
                                                    <td>
                                                        <Button onClick={() => update1(x.id)}>Select</Button>
                                                    </td>
                                                </tr>
                                            </td> : <td>
                                                <tr>
                                                    <td>
                                                        <Button onClick={() => update2first(x.id)}>First</Button>
                                                    </td>
                                                    <td>
                                                        <Button onClick={() => update2second(x.id)}>Second</Button>
                                                    </td>
                                                    <td>
                                                        <Button onClick={() => update2third(x.id)}>Third</Button>
                                                    </td>
                                                    <td>
                                                        <Button onClick={() => update2(x.id)}>Select</Button>
                                                    </td>
                                                </tr>
                                            </td>
                                    }
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card>
            </Card>
        </Card>
    )
}

export default FinalsTab1