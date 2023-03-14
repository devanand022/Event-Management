import React, { useEffect } from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCollege } from '../../../../actions/collegeAction'
import { getEvent } from '../../../../actions/eventAction'

const EditParticipate = () => {

    const { getColleges } = useSelector((state) => state.getCollegeState);
    const { getEvents } = useSelector((state) => state.getEventState);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getCollege);
        dispatch(getEvent);
    }, [dispatch])

    return (
        <Container fluid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', background: '#FFFA65' }}>
            <Card style={{ width: '90%', height: '90vh', border: 'none', display: 'flex', alignItems: 'center' }}>
                <Form style={{ width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card style={{ width: '90%', height: '77vh', border: 'none' }} className='mt-5'>
                        <Row>
                            <Col md={3}>
                                <Form.Group className='m-2'>
                                    <Form.Control />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group className='m-2'>
                                    <Form.Select>
                                        <option>Select</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group className='m-2'>
                                    <Form.Control />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group className='m-2'>
                                    <Form.Control />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group className='m-2'>
                                    <Form.Select>
                                        <option>Select</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group className='m-2'>
                                    <Form.Select>
                                        <option>Select</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group className='m-2'>
                                    <Form.Select>
                                        <option>Select</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group className='m-2'>
                                    <Form.Select>
                                        <option>Select</option>
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