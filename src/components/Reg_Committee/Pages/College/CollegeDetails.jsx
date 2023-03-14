import React, { useEffect } from "react";
import { Container, Card, Table, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import './College.css'
import { singleCollege } from '../../../../actions/participateAction';
import { useDispatch, useSelector } from "react-redux";

const CollegeDetails = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { collegedetails } = useSelector((state) => state.singleCollegeState);

    useEffect(() => {
        dispatch(singleCollege(id))
    }, [dispatch, id])

    return (
        <Container fluid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', background: '#FFFA65' }}>
            <Card style={{ width: '75%', height: '90vh', border: 'none', display: 'flex', alignItems: 'center' }}>
                <Table striped borderless hover style={{ width: '85%'}} className='mt-3'>
                    <thead>
                        <tr>
                            <th>Lot No</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Event</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {collegedetails && collegedetails.map(x => (
                            <tr>
                                <td>{x.lot_no}</td>
                                <td>{x.name}</td>
                                <td>{x.phone}</td>
                                <td>{x.email}</td>
                                <td>
                                    <div className="d-flex flex-column">
                                        <span>{x.event1}</span>
                                        <span>{x.event2}</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex justify-content-evenly">
                                        <Link to={`/reg/edit/participate/${x.id}`}><Button>Edit</Button></Link>
                                        <Button variant="danger">Delete</Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card>
        </Container>
    )
}

export default CollegeDetails;