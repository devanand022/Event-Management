import React, { useEffect } from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getVerifiedCollege } from '../../../../actions/collegeAction'
import './CollegeTab1.css'

const CollegeTab1 = ({ show }) => {

    const dispatch = useDispatch();
    const { verifiedcolleges } = useSelector((state) => state.getVerifiedCollegeState);

    useEffect(() => {
        dispatch(getVerifiedCollege);
    }, [dispatch])
    return (
        <Card style={{ width: '100%', height: '88vh', border: 'none' }}>
            <h2 style={{ marginLeft: '10px' }}>College Details</h2>
            <Card style={{ width: '100%', height: '70vh', border: 'none' }} className="collegetable">
                <Table striped borderless hover style={{ width: show ? '1000px' : '1200px' }}>
                    <thead>
                        <tr>
                            <th>Lot No</th>
                            <th>College Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {verifiedcolleges && verifiedcolleges.map(x => (
                            <tr>
                                <td>{x.lot_no}</td>
                                <td>{x.college_name}</td>
                                <td>
                                    <div className="d-flex buttong">
                                        <Button variant="info">View</Button>
                                        <Button>Edit</Button>
                                        <Button variant="success">Verify</Button>
                                        <Button variant="danger">Delete</Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card>
        </Card>
    )
}

export default CollegeTab1