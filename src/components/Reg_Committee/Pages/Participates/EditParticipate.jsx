import React, { useEffect } from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCollege } from '../../../../actions/collegeAction'
import { getEvent } from '../../../../actions/eventAction'
import { singleParticipate } from '../../../../actions/participateAction'

const EditParticipate = () => {

    const { getColleges } = useSelector((state) => state.getCollegeState);
    const { getEvents } = useSelector((state) => state.getEventState);
    const { singleparticipate } = useSelector((state) => state.singleParticipateState);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getCollege);
        dispatch(getEvent);
        dispatch(singleParticipate(id));
    }, [dispatch, id])

    return (
        <Container fluid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', background: '#FFFA65' }}>
            <Card style={{ width: '90%', height: '90vh', border: 'none', display: 'flex', alignItems: 'center' }}>
                <Form style={{ width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card style={{ width: '90%', height: '77vh', border: 'none' }} className='mt-5'>
                        <Row>
                            <Col md={3}>
                                <Form.Group className='m-2'>
                                    <Form.Control name='name' />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group className='m-2'>
                                    <Form.Select name='college'>
                                        <option value=''>Select</option>
                                        {
                                            getColleges && getColleges.map(getCollege => (
                                                <option value={getCollege.lot_no}>{getCollege.college_name}</option>
                                            ))
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group className='m-2'>
                                    <Form.Control name='email' />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group className='m-2'>
                                    <Form.Control name='phone' />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group className='m-2'>
                                    <Form.Select name='degree' >
                                        <option value=''>Select</option>
                                        <option name='ug' value='ug'>UG</option>
                                        <option name='pg' value='Pg'>PG</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group className='m-2'>
                                    <Form.Select name='session' >
                                        <option value=''>Select</option>
                                        <option name='aided' value='aided'>Aided</option>
                                        <option name='sf' value='sf'>SF</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group className='m-2'>
                                    <Form.Select name='event1' >
                                        <option>Select</option>
                                        {
                                            getEvents && getEvents.map(getEvent => (
                                                <option value={getEvent.name}>{getEvent.name}</option>
                                            ))
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group className='m-2'>
                                    <Form.Select name='event2' >
                                        <option>Select</option>
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
                </Form>
            </Card>
        </Container>
    )
}

export default EditParticipate