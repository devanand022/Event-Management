import React, { useEffect } from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getEvent } from '../../actions/eventAction'

const EventPage = () => {
    const dispatch = useDispatch()
    const { getEvents } = useSelector((state) => state.getEventState);
    const navigate = useNavigate()

    const eve = (name) => {
        localStorage.setItem("event", name);
        navigate('/admin/event/dashboard');
    }

    useEffect(() => {
        dispatch(getEvent)
    }, [dispatch])
    return (
        <Container fluid className='adminpage' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', background: '#FFFA65' }}>
            <Card style={{ width: '90%', height: '90vh', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: '5px' }}>
                {
                    getEvents && getEvents.map(x => (
                        <Button onClick={() => eve(x.name)} >{x.name}</Button>
                    ))
                }
            </Card>
        </Container>
    )
}

export default EventPage