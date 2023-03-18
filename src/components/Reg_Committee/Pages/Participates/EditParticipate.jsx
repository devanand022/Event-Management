import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Form, Row, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getCollege } from '../../../../actions/collegeAction'
import { getEvent } from '../../../../actions/eventAction'
import { editParticipate, singleParticipate } from '../../../../actions/participateAction'

const EditParticipate = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const { getColleges } = useSelector((state) => state.getCollegeState);
    const { getEvents } = useSelector((state) => state.getEventState);
    const { single } = useSelector((state) => state.singleParticipateState);
    const [name, setName] = useState("");
    const [college, setCollege] = useState("");
    const [email, setEmail] = useState("");
    const [degree, setDegree] = useState("");
    const [phone, setPhone] = useState("");
    const [session, setSession] = useState("");
    const [event1, setEvent1] = useState("");
    const [event2, setEvent2] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getCollege);
        dispatch(getEvent);
        dispatch(singleParticipate(id));
    }, [dispatch, id])

    useEffect(() => {
        single && single.map(x => (
            setName(x.name),
            setCollege(x.lot_no),
            setDegree(x.degree),
            setEmail(x.email),
            setPhone(x.phone),
            setSession(x.session),
            setEvent1(x.event1),
            setEvent2(x.event2)
        ))
    }, [single])

    const editHandle = (e) => {
        e.preventDefault();
        dispatch(editParticipate(name, email, phone, session, degree, event1, event2, id));
        navigate('/reg/participate');
    }

    return (
        <Container fluid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', background: '#FFFA65' }}>
            <Card style={{ width: '90%', height: '90vh', border: 'none', display: 'flex', alignItems: 'center' }}>
                <Form onSubmit={editHandle} style={{ width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Card style={{ width: '90%', height: '30vh', border: 'none' }} className='mt-5'>
                        <Row>
                            <Col md={4}>
                                <Form.Group className='m-2'>
                                    <Form.Control name='name' value={name} onChange={e => setName(e.target.value)} />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className='m-2'>
                                    <Form.Select name='college' onChange={e => setCollege(e.target.value)}>
                                        {
                                            getColleges && getColleges.map(y => (
                                                college == y.lot_no ? <option value={y.lot_no} >{y.college_name}</option> : ''
                                            ))
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className='m-2'>
                                    <Form.Control name='email' value={email} onChange={e => setEmail(e.target.value)} />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className='m-2'>
                                    <Form.Control name='phone' value={phone} onChange={e => setPhone(e.target.value)} />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className='m-2'>
                                    <Form.Select name='degree' onChange={e => setDegree(e.target.value)} >
                                        <option value={degree}>{degree}</option>
                                        <option name='ug' value='ug'>UG</option>
                                        <option name='pg' value='Pg'>PG</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className='m-2'>
                                    <Form.Select name='session' onChange={e => setSession(e.target.value)} >
                                        <option value={session}>{session}</option>
                                        <option name='aided' value='aided'>Aided</option>
                                        <option name='sf' value='sf'>SF</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className='m-2'>
                                    <Form.Select name='event1' onChange={e => setEvent1(e.target.value)} >
                                        <option value={event1}>{event1}</option>
                                        {
                                            getEvents && getEvents.map(getEvent => (
                                                <option value={getEvent.name}>{getEvent.name}</option>
                                            ))
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className='m-2'>
                                    <Form.Select name='event2' onChange={e => setEvent2(e.target.value)} >
                                        <option value={event2}>{event2}</option>
                                        {
                                            getEvents && getEvents.map(getEvent => (
                                                <option value={getEvent.name}>{getEvent.name}</option>
                                            ))
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Card>
                    <Button type='submit' >Update</Button>
                </Form>
            </Card>
        </Container>
    )
}

export default EditParticipate