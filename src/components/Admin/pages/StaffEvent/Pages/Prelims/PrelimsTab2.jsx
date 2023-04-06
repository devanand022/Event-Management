import React, { useEffect } from 'react'
import { Card, Table } from 'react-bootstrap'
import jwtDecode from 'jwt-decode'
import { useDispatch, useSelector } from 'react-redux'
import { filterevents } from '../../../../../../actions/eventAction'

const PrelimsTab2 = () => {

    const token = localStorage.getItem("userInfo")
    let decodetoken = jwtDecode(token);
    const event = localStorage.getItem("event")
    const dispatch = useDispatch()
    const { filterevent } = useSelector((state) => state.filtereventState);

    useEffect(() => {
        dispatch(filterevents(event))
    }, [dispatch])

    return (
        <Card style={{ height: '88vh', width: '100%', alignItems: 'center', display: 'flex', border: 'none' }}>
            <Card style={{ height: '85vh', width: '97%', border: 'none' }}>
                <h3 className='mx-3 my-3'>Final LIst</h3>
                <Card style={{ height: '85vh', width: '100%', display: 'flex', alignItems: 'center', border: 'none' }}>
                    <Table striped borderless hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Lot NO</th>
                                <th>Email</th>
                                <th>Event</th>
                                <th>Status</th>
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
                                        x.event1 == event ?
                                            <td>{x.event1}</td> : <td>{x.event2}</td>
                                    }
                                    {
                                            x.event1result == 'selected' ?
                                                <td>{x.event1result}</td> : <td>{x.event2result}</td>
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

export default PrelimsTab2